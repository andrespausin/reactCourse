// Desestructuracion de objetos

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const persona2 = { 
  nombre: 'Peter',
  edad: 20,
  clave: 'Spiderman',
  rango: 'Soldado'
}

const persona3 = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

// const { nombre, edad, clave } = persona 

// funcion que retorna un objeto
const returnPerson = ({nombre, edad, clave, rango='Capitan'}) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Clave: ${clave}, Rango: ${rango}`);
}

// returnPerson(persona);
// returnPerson(persona2);

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
  return {
    nombreClave: clave,
    years: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.1232
    }
  }
}

const avenger = useContext(persona2);
console.log({...avenger});

// Manera correcta 

const {nombreClave, years} = useContext(persona2);
console.log(nombreClave, years);



const { latlng, latlng: { lat, lng } } = useContext(persona3);
console.log(`Latitud: ${lat}, Longitud: ${lng}`);