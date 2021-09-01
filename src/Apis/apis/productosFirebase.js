import { db } from '../../Firebase/index';
import { collection, getDocs, query, where, doc, getDoc  } from "firebase/firestore";

const database = db();
export const productosRef = () => collection(database, "productos");
export const productosSnapshot = () => getDocs(productosRef());
export const productosXCategoria = (idCategoria) => getDocs(query(productosRef(), where("categoriaId", "==", Number(idCategoria))));
export const productoXId = (id) => getDoc(doc(database, "productos", id));