class Pelicula {
    constructor({ id, titulo, director, anioEstreno, pais, genero, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(anioEstreno);
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros() {
        return [
            'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'
        ];
    }

    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(',')}.`)
    }

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

        if (typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

        if (typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for (let cadena of valor) {
            if (typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarLogitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);

        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena('IMDB id', id))
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.error(`IMDB id "${id} no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números."`);
    }

    validarTitulo(titulo) {
        if (this.validarCadena('Titulo', titulo))
            this.validarLogitudCadena('Titulo', titulo, 100);
    }

    validarDirector(director) {
        if (this.validarCadena('Director', director))
            this.validarLogitudCadena('Director', director, 50);
    }

    validarEstreno(anioEstreno) {
        if (this.validarNumero('Año de Estreno', anioEstreno))
            if (!(/^([0-9]){4}$/.test(anioEstreno)))
                return console.error(`Año de Estreno "${anioEstreno} no es valido, debe ser un número de 4 digitos."`);
    }

    validarPais(pais) {
        this.validarArreglo('Pais', pais)
    }

    validarGeneros(generos) {
        if (this.validarArreglo('Generos', generos)) {
            for (const genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género(s) incorrectos "${generos.join(',')}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero('Calificación', calificacion))
            return (calificacion < 0 || calificacion > 10) ?
                console.error('La calificaión tiene que estar en un rango entre 0 y 10') :
                this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica() {
        console.info(`Ficha Tecnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.anioEstreno}"\nPaís: "${this.pais.join('-')}"\nGéneros: "${this.genero.join(',')}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`);
    }
}

// Pelicula.generosAceptados();
// const peli = new Pelicula({
//     id: 'tt1234567',
//     titulo: 'Titulo de la Pelicula',
//     director: 'Director de la Pelicula',
//     anioEstreno: 2020,
//     pais: ['México'],
//     genero: ['Comedy'],
//     calificacion: 7.891
// });

// peli.fichaTecnica();

const misPelis = [{
        id: 'tt1234567',
        titulo: 'La Caida del Halcon Negro',
        director: 'Stephen',
        anioEstreno: 1999,
        pais: ['USA'],
        genero: ['War'],
        calificacion: 9
    },
    {
        id: 'bc1791721',
        titulo: 'Lagrimas del Sol',
        director: 'Kawy',
        anioEstreno: 2001,
        pais: ['Mexico'],
        genero: ['War'],
        calificacion: 10
    },
    {
        id: 'de1983919',
        titulo: 'Star Wars',
        director: 'Simon',
        anioEstreno: 2017,
        pais: ['Estados Unidos'],
        genero: ['Sci-Fi'],
        calificacion: 10
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());