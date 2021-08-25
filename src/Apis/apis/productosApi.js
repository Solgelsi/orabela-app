import { productos } from '../dataSource/productos';

export const getProductos = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });

export const getProductosXCategoria = (idCategoria) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoriaId === Number(idCategoria)));
        }, 2000);
    });

export const getProductoXId = (idProducto) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === Number(idProducto)));
        }, 2000);
    })