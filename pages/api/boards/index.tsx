import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database/database";
const boards = async (req: NextApiRequest, res: NextApiResponse) => {
  const boardsRef = collection(db, "boards");

  switch (req.method) {
    case "GET":
      {
        const { docs } = await getDocs(boardsRef);
        const data = docs.map((i) => ({ id: i.id, data: i.data() }));
        res.status(200).json(data);
      }
      break;
    case "POST":
      {
        const { id } = await addDoc(boardsRef, req.body);
        res.status(200).json(id);
      }
      break;
    default:
      res.status(200).json({ Message: `${req.method} not allowed` });
      break;
  }
};

export default boards;
