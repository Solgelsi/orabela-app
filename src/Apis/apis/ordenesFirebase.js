import { db } from '../../Firebase/index';
import { collection } from "firebase/firestore";

const database = db();
export const ordenesRef = () => collection(database, "ordenes");
