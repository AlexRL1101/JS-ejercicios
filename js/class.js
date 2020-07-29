/* id de la película en IMDB, 
titulo,
director, 
año de estreno, 
país o países de origen, 
géneros y calificación en IMBD. */

export class Pelicula {

    constructor(id, titulo, director, anioEstreno, pais, genero, calificacion) {

        // Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números
        (getEvaluarCaracteresMaximos(id, 9)) ?
        console.error(`Su Id "${id}" es diferente a 9 caracteres"`): (getEvaluarId(id)) ?
            this.id = id :
            console.error(`Su patron Id "${id}" no es correcto`);

        // Valida que el título no rebase los 100 caracteres.
        (getEvaluarCaracteresMaximos(titulo, 100)) ? console.error(`Su titulo "${titulo}" rebasa los 100 caracteres disponibles`): this.titulo = titulo;

        // Valida que el director no rebase los 50 caracteres
        (getEvaluarCaracteresMaximos(director, 50)) ? console.error(`Su director "${director}" rebasa los 50 caracteres disponibles`): this.director = director;

        // Valida que el año de estreno sea un número entero de 4 dígitos
        (getEvaluarAnioEstreno(anioEstreno)) ? this.anioEstreno = anioEstreno: console.error(` Su año introduccido "${anioEstreno}" no es congruente`);

        // Valida que el país o paises sea introducidos en forma de arreglo
        (getEvaluarSiEsArreglo(pais)) ? this.pais = pais: console.error(`Su pais "${pais}" no esta en arreglo`);

        // Valida que los géneros sean introducidos en forma de arreglo
        if (getEvaluarGeneroAceptado(genero)) this.genero = genero;

        // Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición
        (getEvaluarCalificacion(calificacion)) ? this.calificacion = calificacion: console.error(` Su calificación ingresada "${calificacion}" no es congruente`)
    }

    // Crea un método que devuelva toda la ficha técnica de la película
    getFichaTecnica() {
        console.log(`Id: ${this.id}\n Titulo: '${this.titulo}'\n Director: ${this.director}\n Año de Estreno: ${this.anioEstreno}\n Paises: ${this.pais}\n Generos: ${this.genero}\n Calificación: ${this.calificacion}`);
    }

    // Crea un método estático que devuelva los géneros aceptados
    static getGeneros() {
        let patron = [
                'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western',

                'action', 'adult', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'film noir', 'game-show', 'history', 'horror', 'musical', 'music', 'mystery', 'news', 'reality-tv', 'romance', 'sci-fi', 'short', 'sport', 'talk-show', 'thriller', 'war', 'western'
            ],
            as = [],
            pe = [],
            fi = [];

        for (const i of patron.sort()) {
            (i.match(/[A-Z]/)) ? as.push(i): pe.push(i)
        }

        for (let i = 0; i < as.length; i++) {
            fi.push('\n ~ ' + as[i] + ' (' + pe[i] + ')')
        }

        console.info(`Los Generos aceptados son: ${fi}.`)
    }
}


const getEvaluarId = (id) => {
    return (/^[a-zA-Z]{2}[0-9]{7}$/i.test(id))
}

const getEvaluarCaracteresMaximos = (tex, can) => {
    return (tex.length > can)
}

const getEvaluarAnioEstreno = (anio) => {
    if (typeof(anio) === 'number') return (/^[0-9]{4}$/g.test(anio))
}

const getEvaluarSiEsArreglo = (el) => {
    return (Array.isArray(el))
}

const getEvaluarGeneroAceptado = (ge) => {
    let patron = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western',

        'action', 'adult', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'film noir', 'game-show', 'history', 'horror', 'musical', 'music', 'mystery', 'news', 'reality-tv', 'romance', 'sci-fi', 'short', 'sport', 'talk-show', 'thriller', 'war', 'western'
    ];

    if (getEvaluarSiEsArreglo(ge)) {
        for (let i = 0; i < ge.length; i++) {
            if (!patron.includes(ge[i])) {
                console.error(` Su arreglo [${ge}] en la posición "${ge.find(el => el === ge[i])}" esta incorrecta o mal escrita`);
                return false;
            }
        }
        return true;
    } else {
        return console.error(`Su genero "${ge}" no esta ingresado en un arreglo`);
    }

}

const getEvaluarCalificacion = (cal) => {
    if (typeof(cal) === 'number') return (cal >= 0 && cal <= 10)
}