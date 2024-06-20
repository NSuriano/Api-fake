import { conexionApi } from "./conexion.js";

const lista = document.querySelector("[data-ul]");

function crearCards(imagen,nombre,precio,id) {
    const card = document.createElement("li");
    card.innerHTML = `
    <img src="${imagen}" alt="${nombre}">
    <p class="nombre">${nombre}</p>
    <span class="precio">$${precio}</span>
    <button class="eliminar" id="${id}">
    <img class="papelera" src="./imagenes/papelera.png" alt="papelera">
    </button>`;

    const deleteButton = card.querySelector(".eliminar");
    deleteButton.addEventListener("click", () => {
        conexionApi.deleteProductos(id)
            .then(() => {
                card.remove();
            })
            .catch(err => console.log(err));
    });

    lista.appendChild(card);
    return card;
}



async function mostrarProductos(){
    try {
    const tarjetas = await conexionApi.listarProdutos();
    tarjetas.forEach(producto => {
        lista.appendChild(
            crearCards(
            producto.imagen,
            producto.nombre,
            producto.precio,
            producto.id
            )
        )
      });
       
    } catch (error) {
       console.log(error); 
    }
}
   
mostrarProductos();


