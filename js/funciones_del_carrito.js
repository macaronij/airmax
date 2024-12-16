var precioTotal = 0;

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
        precioTotal += elemento[1];
    })  
}

let precioHTML = document.getElementById("precioHTML");
precioHTML.innerHTML = `$${precioTotal}`;

let botonConfirmar = document.getElementById("botonConfirmar");
botonConfirmar.addEventListener("click", () => {
        alert("COMPRA CONFIRMADA");
        localStorage.removeItem("carrito");
    }
);

let botonCancelar = document.getElementById("botonCancelar");
botonCancelar.addEventListener("click", () => {
        alert("COMPRA CANCELADA");
        localStorage.removeItem("carrito");
    }
);