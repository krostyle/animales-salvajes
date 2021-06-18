import index from './classes/index.js'
import db from './Data.js'
import Images from './Images.js'

const animalsSelected = [];

const btnRegistrar = document.getElementById("btnRegistrar");

btnRegistrar.addEventListener('click', e => {
    const nombre = document.getElementById('animal');
    const edad = document.getElementById('edad');
    const comentarios = document.getElementById('comentarios');
    const bgImgE = document.getElementById('preview').style.backgroundImage;
    const urlImg = bgImgE.slice(5, bgImgE.length - 2);
    if (validate(nombre, edad, comentarios, urlImg)) {
        alert('OK')
        cleanForm(nombre, edad, comentarios, urlImg)
    } else {
        alert('Favor completar todos los datos')
    }

})

const validate = (nombre, edad, comentarios, urlImg) => {
    if (nombre.value !== "" && edad.value !== "" && comentarios.value !== "" && urlImg !== "") {
        return true;
    } else {
        return false;
    }
}

const cleanForm = (nombre, edad, comentarios, bgImgE) => {
    nombre.value = ""
    edad.value = ""
    comentarios.value = ""
    bgImgE = "url(../imgs/lion.svg)"
    console.log(bgImgE);
}