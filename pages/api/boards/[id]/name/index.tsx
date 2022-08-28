import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../../database/database";

const name = async (req: NextApiRequest, res: NextApiResponse) => {
  const urlID: any = req.query.id;
  const boardRef = doc(db, "boards", urlID);

  const data = await getDoc(boardRef);

  let name;
  if (data.exists()) {
    name = data.data().name;
  } else {
    name = {};
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(name);
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default name;
