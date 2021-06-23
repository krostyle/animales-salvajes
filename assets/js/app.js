import { Leon, Lobo, Oso, Serpiente, Aguila } from './classes/Animals.js'
import Images from './Images.js'
import getAnimalSound from './Sound.js';

const animalsSelected = [];

const btnRegistrar = document.getElementById("btnRegistrar");
const nombre = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');;
const tableAnimals = document.getElementById('Animales')


btnRegistrar.addEventListener('click', async(e) => {
    e.preventDefault();
    const bgImgE = document.getElementById('preview').style.backgroundImage;
    const urlImg = bgImgE.slice(5, bgImgE.length - 2);
    if (validate(nombre, edad, comentarios, urlImg)) {

        if (nombre.value === 'Águila') {
            nombre.value = 'Aguila'
        }
        const srcSonidoAnimal = `./assets/sounds/${await getAnimalSound(nombre.value)}`
        let animal;

        switch (nombre.value) {
            case 'Leon':
                animal = new Leon(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
            case 'Lobo':
                animal = new Lobo(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break
            case 'Oso':
                animal = new Oso(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
            case 'Serpiente':
                animal = new Serpiente(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
            case 'Aguila':
                animal = new Aguila(nombre.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal)
                break;
        }

        // console.log(animal);
        animalsSelected.push(animal)
            // console.log(animalsSelected);
        createCards(animalsSelected)
        createModal(animalsSelected)
        cleanForm(nombre, edad, comentarios, bgImgE);
    } else {
        alert('Favor completar todos los datos')
    }

})






const validate = (nombre, edad, comentarios, urlImg) => {
    if ((nombre.value !== "" && nombre.value !== 'Seleccione un animal') && (edad.value !== "" && edad.value !== 'Seleccione un rango de años') && comentarios.value !== "" && urlImg !== "") {
        return true;
    } else {
        return false;
    }
}

const cleanForm = (nombre, edad, comentarios, bgImgE) => {
    nombre.value = "Seleccione un animal"
    edad.value = "Seleccione un rango de años"
    comentarios.value = ""
    const defaultBgImg = document.getElementById('preview')
    defaultBgImg.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}


const createCards = (listaAnimales) => {
    tableAnimals.innerHTML = ''
        // console.log(listaAnimales);
    listaAnimales.forEach((animal, i) => {
        console.log(animal);
        console.log(i);
        tableAnimals.innerHTML +=
            /*HTML*/
            `
            <div class="card text-white bg-secondary m-3">
            <img type ="button "style="width: 10rem;" src="${animal.img}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#${animal.nombre}-${i}">
            <div class="card-body p-1" onclick="playSounds('${animal.sonido}')">
            <a href="#"><img class="p-1" height="30rem" src="./assets/imgs/audio.svg"/></a>
            </div>
        </div>
            `
    });
}


window.playSounds = (sound) => {
    const sonido = new Audio(sound);
    sonido.play();
}

const createModal = (listaAnimales) => {
    const modales = document.getElementById('modales');
    modales.innerHTML = "";
    listaAnimales.forEach((animal, i) => {
        console.log(animal);
        console.log(i);
        modales.innerHTML +=
            `
        <!-- Modal ${animal.nombre} - ${i} -->
        <div class="modal fade" id="${animal.nombre}-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-dark text-white">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${animal.nombre}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${animal.img}" class="img-fluid">
                <hr>
                <h5>Edad</h5>
                <p>${animal.edad}</p>
                <hr>
                <h5>Comentarios</h5>
                <p>${animal.comentarios}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>`
    })

}