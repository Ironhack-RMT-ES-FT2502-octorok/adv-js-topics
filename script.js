console.log("probando")

// Reducción sintaxica de funciones de flecha

// const decirHola = (name) => {
//   return `Hola ${name}`
// }

const decirHola = (name) => `Hola ${name}`

// 1. Si la funcion tiene una sola linea, podemos ponerla en la misma linea que se crea y quitar las llaves.
// 2. Si esa linea era el return de la función, entonces el return está implicito.
// 3. Si la funcioo, tiene un solo parametro, los parentesis del parametro son opcionales.

console.log( decirHola("Rocío") )


const array = ["samuel", "juan", "alejandro", "kurt", "ana", "alex"]


.filter((eachName) => eachName[0] === "a" || eachName[0] === "j")
.map((eachName) => eachName.toUpperCase())
.forEach((eachName) => console.log( decirHola(eachName) ) )


//1. Siempre que tengamos una condición que retorna un booleano, podemos directamente retornar la condición.
//2. aplicamos reducciónes sintaxicas de funcion de flecha

// console.log(nuevoArray2)


// Object Property Shorthand (abreviación de propiedades)


let username = "bob";
let age = 29;


const user = {
  username,
  age,
  address: "Una piña debajo del mar",
}

// Si el nombre de la propiedad es igual a la variable de donde vienen los valores, entonces solo tenemos que poner el nombre de la propiedad una vez

console.log(user)

