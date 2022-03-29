const contenedor = document.querySelector("#contenedor"),
  cantidad = prompt("Ingrese la cantidad de pokemones a mostrar: ");
let html, valorTipoUno, valorTipoDos, valorHabilidadUno, valorHabilidadDos;
const obtenerPokemon = async () => {
  for (let i = 1; i <= cantidad; i++) {
    let aleatorio = Math.round(Math.random() * (898 - 1) + 1);
    await crearPokemon(aleatorio);
  }
};
const crearPokemon = async (num) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const respuesta = await fetch(url);
  const pokemons = await respuesta.json();
  console.log(pokemons);
  mostrarPokemon(pokemons);
};
const mostrarPokemon = ({ sprites, name, id, types, abilities }) => {
  obtenerTipos(types);
  obtenerHabilidades(abilities);
  html = `<div class="tarjeta">
              <img src="${sprites.front_default}" alt="Pokemon ${name}">
              <p>Nombre: ${name}</p>
              <p>Identificador: ${id}</p>
              <p>Tipos: ${
                types[1] ? `${valorTipoUno}, ${valorTipoDos}` : valorTipoUno
              }</p>
              <p>Habilidad: ${
                abilities[1]
                  ? `${valorHabilidadUno}, ${valorHabilidadDos}`
                  : valorHabilidadUno
              }</p>
            </div>`;
  contenedor.innerHTML += html;
};
const obtenerTipos = (types) => {
  if (types[1]) {
    const [primerTipo, segundoTipo] = types;
    const { type: tipoUno } = primerTipo;
    const { name: NombreUno } = tipoUno;
    const { type: tipoDos } = segundoTipo;
    const { name: NombreDos } = tipoDos;
    valorTipoUno = NombreUno;
    valorTipoDos = NombreDos;
  } else {
    const [primerTipo] = types;
    const { type: tipoUno } = primerTipo;
    const { name: NombreUno } = tipoUno;
    valorTipoUno = NombreUno;
  }
};
const obtenerHabilidades = (abilities) => {
  if (abilities[1]) {
    const [primerHabilidad, segundaHabilidad] = abilities;
    const { ability: habilidadUno } = primerHabilidad;
    const { name: NombreHabilidadUno } = habilidadUno;
    const { ability: habilidadDos } = segundaHabilidad;
    const { name: NombreHabilidadDos } = habilidadDos;
    valorHabilidadUno = NombreHabilidadUno;
    valorHabilidadDos = NombreHabilidadDos;
  } else {
    const [primerHabilidad] = abilities;
    const { ability: habilidadUno } = primerHabilidad;
    const { name: NombreHabilidadUno } = habilidadUno;
    valorHabilidadUno = NombreHabilidadUno;
  }
};
obtenerPokemon();
