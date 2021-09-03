import { db } from '../../Firebase/index';
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

const database = db();
const collectionName = "productos";
export const productosRef = () => collection(database, collectionName);
export const productosSnapshot = () => getDocs(productosRef());
export const productosXCategoria = (idCategoria) => getDocs(query(productosRef(), where("categoriaId", "==", Number(idCategoria))));
export const productRef = (id) => doc(database, collectionName, id);
export const productoXId = (id) => getDoc(productRef(id));