const contenedor = document.querySelector("#contenedor");

const obtenerPokemon = async (url) => {
  const respuesta = await fetch(url);
  const pokemon = await respuesta.json();
  console.log(pokemon);
  mostrarPokemon(pokemon);
};

const mostrarPokemon = ({ name, types, sprites, abilities }) => {
  const { type: firstType } = types[0];
  const { name: nameFirstType } = firstType;
  const { type: secondType } = types[1];
  const { name: nameSecondType } = secondType;

  const { front_default: imagePokemon } = sprites;

  const [firstElementAbility] = abilities;
  const { ability: firstAbility } = firstElementAbility;
  const { name: nameFirstAbility } = firstAbility;
  const [, secondElementAbility] = abilities;
  const { ability: secondAbility } = secondElementAbility;
  const { name: nameSecondAbility } = secondAbility;

  let html = `
    <div class="contenedor-pokemon">
        <img src="${imagePokemon}" alt="Imagen de ${name}" />
        <p>Nombre: ${name}</p>
        <p>Tipos: ${nameFirstType},${nameSecondType}</p>
        <p>Abilidades: ${nameFirstAbility}, ${nameSecondAbility}</p>
    </div>
    `;

  contenedor.innerHTML = html;
};

obtenerPokemon("https://pokeapi.co/api/v2/pokemon/1");
