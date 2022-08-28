import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../database/database";
const tasks = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let tasks;
  if (data.exists()) {
    tasks = data.data().tasks;
  } else {
    tasks = {};
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(tasks);
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default tasks;
