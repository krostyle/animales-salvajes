import db from './Data.js'


const animal = document.getElementById('animal');
const preview = document.getElementById('preview');


animal.addEventListener('change', async() => {
    const { animales } = await db.getData();
    const nombreAnimal = animal.value;
    const animalSelected = animales.find(animal => animal.name === nombreAnimal);
    const animalImage = animalSelected.imagen;
    const animalPath = `./assets/imgs/${animalImage}`;
    createImage(animalPath)
})


const createImage = (path) => {
    preview.innerHTML = '';
    preview.style.backgroundImage = `url(${path})`
}

export default {}