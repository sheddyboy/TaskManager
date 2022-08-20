import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../../../../database/database";

const stid = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const urlTID: any = req.query.tid;
  const urlSTID: any = req.query.stid;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let suttasksRef;
  let sid: [];
  if (data.exists()) {
    suttasksRef = data.data().subtasks;
    sid = suttasksRef.find((i: any) => i.s_id === urlSTID);
  } else {
    sid = [];
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(sid);
      break;
    case "PATCH":
      {
        await updateDoc(boardRef, { subtasks: arrayUnion(req.body) });
        res.status(200).json(req.body);
      }
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default stid;
