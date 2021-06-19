import db from './Data.js'

const getAnimalSound = async(animal) => {
    const { animales } = await db.getData();
    const { sonido } = await animales.find(e => e.name === animal)
    return sonido
}




export default getAnimalSound