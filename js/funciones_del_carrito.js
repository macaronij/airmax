if (localStorage.getItem("carrito") !== null) {
    console.log("carrito encontrado");
    let carritoSTRING = localStorage.getItem("carrito");
    let carrito = JSON.parse(carritoSTRING);
    console.log(carrito);
    console.log(typeof(carrito));
    carrito.forEach(elemento => {
        let carritoHTML = document.getElementById("carritoHTML");
        let linea = document.createElement("TR");
        linea.innerHTML = `
                         <td>${elemento[0]}</td>
                         <td>$${elemento[1]}</td>
                         <td class="eliminar"><i class="fa-solid fa-trash"></i></td>
        `;
        carritoHTML.appendChild(linea);
    })  
}