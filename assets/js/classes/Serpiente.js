import { Animal } from "./Animal.js";

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Sisear() {
        this.getSonido();
    }
}