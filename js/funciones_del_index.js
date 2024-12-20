if (localStorage.getItem("carrito") == null) {
    console.log(`No se encontro carrito, inicializando`);
    var carrito = [];
} else {
    var carritoSTRING = localStorage.getItem("carrito");
    var carrito = JSON.parse(carritoSTRING);
    console.log(`Carrito encontrado: ${carrito}`);
}

document.addEventListener("DOMContentLoaded",()=>{
    let productosContainer = document.getElementById("productos-container");
    fetch("https://dummyjson.com/products?limit=5")
        .then(response => response.json())
        .then(data => 
            {
                let productos = data.products;
                productosContainer.innerHTML="";
                productos.forEach(elemento => {
                    const cardDiv = document.createElement("DIV");

                    cardDiv.innerHTML = 
                    `<div class="card">
                        <img class="card-foto" src="${elemento.thumbnail}">
                        <div class="card-titulo"><h3>${elemento.title}</h3></div>
                        <div class="card-precio">Precio: $${elemento.price}</div>
                        <a href="carrito.html"><button class="boton">Comprar</button></a>
                        <div class="card-texto">${elemento.description}</div>
                    </div>`;
                    
                    const botonAgregar = cardDiv.querySelector("button");
                    botonAgregar.addEventListener("click", () => {
                        carrito.push([elemento.title,elemento.price])
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                    })

                    productosContainer.appendChild(cardDiv);
                });
            })
        .catch( error => console.log("ERROR DE FETCH", error));
})