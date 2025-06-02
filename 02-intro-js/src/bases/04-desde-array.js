const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ vegeta, trunks, goku ] = personajes;

// console.log(goku); // Goku
// console.log(vegeta); // Vegeta
// console.log(trunks); // Trunks

// No es ideal por el ejemplo anterior
const personajes2 = ['Naruto', 'Sasuke', 'Sakura'];
const [,,sakura] = personajes2;
// console.log(sakura); // Sakura

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();
// console.log(letras, numeros); 

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo valor se llamará setNombre
const useState = (value) => {
  return [ value, ()=> {
    console.log('Hola Mundo');
  }]
}

const [ nombre, setNombre ] = useState('Goku');
console.log(nombre); // Goku
setNombre();