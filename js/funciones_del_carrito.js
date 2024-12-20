const confirmarCompra = () => {
    return new Promise( (resolve,reject) =>{
        Swal.fire({
            title: '¡Hola!',
            text: 'Este es un mensaje de prueba.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        if (true) resolve("resuelta la promesa confirmarCompra")
        else reject("algo fallo en la promesa confirmarCompra");
    })
}


var precioTotal = 0;

if (localStorage.getItem("carrito") !== null) {
    console.log("carrito encontrado");
    let carritoSTRING = localStorage.getItem("carrito");
    let carrito = JSON.parse(carritoSTRING);
    console.log(carrito);
    console.log(typeof(carrito));
    carrito.forEach((elemento, indice) => {
        let carritoHTML = document.getElementById("carritoHTML");
        let linea = document.createElement("TR");
        linea.innerHTML = `
                         <td>${elemento[0]}</td>
                         <td>$${elemento[1]}</td>
                         <td class="eliminar"><i class="fa-solid fa-trash"></i></td>
        `;

        const eliminar = linea.querySelector(".eliminar");
        eliminar.addEventListener("click", () => {
            console.log(`BORRADO Indice: ${indice}`);
            carrito.splice(indice,1);
            console.log(carrito);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        })

        carritoHTML.appendChild(linea);
        precioTotal += elemento[1];
    })  
}

let precioHTML = document.getElementById("precioHTML");
precioRedondeado = precioTotal.toFixed(2);
precioHTML.innerHTML = `$${precioRedondeado}`;

let botonConfirmar = document.getElementById("botonConfirmar");
botonConfirmar.addEventListener("click", () => {
        localStorage.removeItem("carrito"); 
        Swal.fire({
            title: "COMPRA CONFIRMADA",
            text: "La orden se debito de su cuenta",
            icon: "success"
          }).then((res)=>window.location.href = "index.html")
            .catch(error=>console.log(error))
    }
);

let botonCancelar = document.getElementById("botonCancelar");
botonCancelar.addEventListener("click", () => {
        localStorage.removeItem("carrito"); 
        Swal.fire({
            title: "COMPRA CANCELADA",
            text: "El pedido fue borrado.",
            icon: "error"
          }).then((res)=>window.location.href = "index.html")
            .catch(error=>console.log(error))
    }
);