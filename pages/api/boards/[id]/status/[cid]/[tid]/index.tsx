import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../../../database/database";

const tid = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const urlTID: any = req.query.tid;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let tidRef;
  let tid: [];
  if (data.exists()) {
    tidRef = data.data().tasks;
    tid = tidRef.find((i: any) => i.t_id === urlTID);
  } else {
    tid = [];
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(tid);
      break;
    case "PATCH":
      await updateDoc(boardRef, { tasks: arrayRemove(req.body.previousbody) });
      await updateDoc(boardRef, { tasks: arrayUnion(req.body.currentbody) });
      res.status(200).json(req.body.currentbody);
      break;

    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default tid;
