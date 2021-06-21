export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        //Getters
        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getComentarios = () => _comentarios;
        this.getSonido = () => {
            return _sonido
        }

        //Setters

        this.setComentarios = (comentarios) => _comentarios = comentarios;
    }

    get nombre() {
        return this.getNombre();
    }

    get edad() {
        return this.getEdad();
    }
    get img() {
        return this.getImg();
    }
    get comentarios() {
        return this.getComentarios();
    }
    get sonido() {
        return this.getSonido();
    }

    set comentarios(comentarios) {
        return this.setComentarios(comentarios);
    }

}