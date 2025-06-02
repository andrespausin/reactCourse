//Tarea 
// 1. Transforma la función a una función de flecha
// 2. La función debe retornar un objeto implicito
// 3. Hacer pruebas

// Codigo original
function getActiveUser(nombre){
  return {
    uid: 'ABC123',
    username: nombre
  }
}

// Transformar a funcion de flecha
const getActiveUser2 = (nombre) => ({uid: 'ABC123', username: nombre});

// Pruebas
console.log(getActiveUser('Andres'));
console.log(getActiveUser2('Andres'));