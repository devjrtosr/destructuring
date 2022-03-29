const contenedor = document.querySelector('#contenedor');

const url = 'https://pokeapi.co/api/v2/pokemon/totodile';

const obtenerPokemon = async (url) =>{
    const respuestaPokemon = await fetch(url);
    const data = await respuestaPokemon.json();
    console.log();
    mostrarPokemon (data);
};

const functionReact = (pokemon) =>{
    pokemon.name
}

const mostrarPokemon = ({name,abilities,types,sprites}) =>{
const [primeraHabilidad,segundaHabilidad] = abilities;

const {ability: habilidad1} = primeraHabilidad;
const {name:nombreHabilidad} = habilidad1;
console.log(habilidad1);

const {ability: habilidad2} = segundaHabilidad;
const {name:nombreHabilidad2} = habilidad2;
console.log(abilities);

const [Primertipo,segundotipo]=types;
const {type:tipo1} =Primertipo;
const {name:nombreTipo} = tipo1;

const{front_default:imagenPokemon}=sprites;

let html = `
<div class="contenedor-pokemon">
    <img src="${imagenPokemon}" alt="Imagen de ${name}"/>
    <p>${name}</p>
    <p>${nombreHabilidad},${nombreHabilidad2}</p>
    <p>${nombreTipo}</p>
</div>`
;
contenedor.innerHTML += html;

};

obtenerPokemon(url);