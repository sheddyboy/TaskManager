import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import db from "../../../../../../database/database";

const cid = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const urlCID: any = req.query.cid;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let cidRef;
  let cid;
  if (data.exists()) {
    cidRef = data.data().tasks;
    cid = cidRef.filter((i: any) => i.status === urlCID);
  } else {
    cid = {};
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(cid);
      break;
    case "POST":
      {
        const t_id = uuidv4();
        const taskData = {
          title: req.body.title,
          status: req.body.status,
          description: req.body.description,
          t_id: t_id,
        };

        await updateDoc(boardRef, { tasks: arrayUnion(taskData) });
        const subtasks: [] = req.body.subtasks;
        subtasks.map(async (title) => {
          const s_id = uuidv4();
          const subtaskData = {
            t_id: t_id,
            s_id: s_id,
            s_title: title,
            isCompleted: false,
          };
          await updateDoc(boardRef, { subtasks: arrayUnion(subtaskData) });
        });
        res.status(200).json(req.body);
      }
      break;
    case "DELETE":
      await updateDoc(boardRef, { tasks: arrayRemove(req.body) });
      res.status(200).json(req.body);
      break;

    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default cid;
