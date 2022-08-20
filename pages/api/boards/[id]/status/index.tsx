import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../database/database";

const status = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let columns;
  if (data.exists()) {
    columns = data.data().status;
  } else {
    columns = {};
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(columns);
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default status;
