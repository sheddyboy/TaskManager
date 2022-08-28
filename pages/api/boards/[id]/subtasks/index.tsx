import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../database/database";
const subtasks = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let subtasks;
  if (data.exists()) {
    subtasks = data.data().subtasks;
  } else {
    subtasks = {};
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(subtasks);
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default subtasks;
