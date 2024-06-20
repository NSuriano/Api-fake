import { conexionApi } from "./conexion.js";


const formulario = document.querySelector("[data-form]");

 async function crearProducto(evento){

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionApi.agregarCards(nombre,precio,imagen);

}

const mensaje = document.querySelector(".respuesta");


formulario.addEventListener("submit", evento => { 
    crearProducto(evento);
    evento.preventDefault();
    mensaje.style.display = "block";
    window.location.reload();

});

