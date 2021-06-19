import { Leon, Lobo, Oso, Serpiente, Aguila } from './classes/Animals.js'
import Images from './Images.js'
import getAnimalSound from './Sound.js';

const animalsSelected = [];

const btnRegistrar = document.getElementById("btnRegistrar");
const nombre = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');;


btnRegistrar.addEventListener('click', async(e) => {
    const bgImgE = document.getElementById('preview').style.backgroundImage;
    const urlImg = bgImgE.slice(5, bgImgE.length - 2);
    if (validate(nombre, edad, comentarios, urlImg)) {

        const srcSonidoAnimal = `./assets/sounds/${await getAnimalSound(nombre.value)}`

        switch (nombre.value) {
            case 'Leon':
                let newAnimal = new Leon(animal.value, edad.value, urlImg, comentarios.value, srcSonidoAnimal);
                console.log(newAnimal.nombre);
                console.log(newAnimal.edad);
                console.log(newAnimal.img);
                console.log(newAnimal.comentarios);
                console.log(newAnimal.sonido);
                break;
        }
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