import {
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../database/database";

const id = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const boardRef = doc(db, "boards", urlID);

  switch (req.method) {
    case "GET":
      {
        const data = await getDoc(boardRef);
        res.status(200).json(data.data());
      }
      break;
    case "PUT":
      {
        await updateDoc(boardRef, {
          tasks: arrayUnion(req.body.tasks),
          subtasks: arrayUnion(...req.body.subtasks),
        });
        res.status(200).json(req.body);
      }
      break;
    case "PATCH":
      {
        await updateDoc(boardRef, req.body);
        res.status(200).json(req.body);
      }
      break;
    case "DELETE":
      {
        const boardRef = doc(db, "boards", urlID);
        await deleteDoc(boardRef);
        res.status(200).json({ Message: `${urlID} Deleted` });
      }
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default id;
