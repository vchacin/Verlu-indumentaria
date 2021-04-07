var listaProductos = [];

var totalProductos = 9;

function cargarProductos() {
    for (let index = 0; index < totalProductos; index++) {
        var producto = {};

        producto.id = index;
        producto.nombre = "Producto "+index;
        producto.precio = 1200 + index * 10;
        producto.codigo = "ART00" + index;
        producto.descuento = 15;
        producto.cuotas = 12;
    
        listaProductos.push(producto);    
    }
}

cargarProductos();