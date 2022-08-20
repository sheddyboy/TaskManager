import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import db from "../../../../../../../../database/database";

const subtasks = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const urlTID: any = req.query.tid;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let suttasksRef;
  let subtasks: [];
  if (data.exists()) {
    suttasksRef = data.data().subtasks;
    subtasks = suttasksRef.filter((i: any) => i.t_id === urlTID);

    // tid = subtasks.filter((i: any) => {
    //   i.t_id === req.query.tidd;
    // });
  } else {
    subtasks = [];
    // tid = [];
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(subtasks);
      break;
    case "POST":
      {
        const t_id = uuid();
        const taskData = {
          title: req.body.title,
          status: req.body.status,
          description: req.body.description,
          t_id: t_id,
        };

        await updateDoc(boardRef, { tasks: arrayUnion(taskData) });
        const subtasks: [] = req.body.subtasks;
        subtasks.map(async (title) => {
          const s_id = uuid();
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
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default subtasks;
