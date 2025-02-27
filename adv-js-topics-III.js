console.log("probando")

// Operador SPREAD (de esparcimiento). nos da todos los elementos de una estructura de array u objeto esparcidos.

const someNumbers = [4, 8, 15, 16, 23, 42]

console.log(someNumbers)
console.log(...someNumbers)
//                |
// los valores sin la estructura de array


//1. Usar algunos metodos que requieren el spread
console.log(Math.max( 10, 20, 5, 200, 130 ))

console.log(Math.max(...someNumbers))


//2. Unir Data y mover data de arrays y objetos

const students = ["alejandro", "samuel"]
const students2 = ["kurt", "juan"]

const allStudents = [...students, ...students2, "victor"]
console.log(allStudents)

const user = {
  username: "bob",
  lastName: "esponja"
}

const address = {
  lugar: "una piña debajo del mar",
  country: "australia"
}

const fullUserInfo = { ...user, ...address, bestFriend: "patricio" }
console.log(fullUserInfo)

//3. Clonar data (objetos y arrays)


const personas = [
  {
    username: "samuel",
    candy: 10,
  }, // ref. abcd
  {
    username: "alejandro",
    candy: 12,
  }, // ref. bcde
  {
    username: "kurt",
    candy: 8,
  }, // ref. cdef
  {
    username: "juan",
    candy: 6,
  } // ref. defg
] // ref. 1234

// Diferencias de clonación

// formas de clonar de tipo shallow (poco profundo). Clonando la referencia del array, pero no de los elementos internos del array.
// const clone = personas.slice(0)
// const clone = [...personas]

// formas de clonar de tipo deep (profundo). Crear una nueva referencia para todos los objetos/arrays que haya dentro de la estructura.
// const clone = JSON.parse( JSON.stringify(personas) )
const clone = structuredClone(personas)

clone.pop()
// clone[0].candy = 50

console.log("clone", clone)
console.log("original", personas)



// Operador REST (al resto de los elementos)

const hobbies = ["surfear", "escalar", "leer", "ver pelis"]

const [ primerHobby, segundoHobby, ...todosLosDemas ] = hobbies

console.log(primerHobby)
console.log(segundoHobby)
console.log(todosLosDemas)

function verificarSiElEstudianteAprobó(studentName, ...elRestoDeLosParametros) {

  console.log(elRestoDeLosParametros)

  const sumaDeNotas = elRestoDeLosParametros.reduce((acc, cadaNota) => {
    return acc + cadaNota
  }, 0)
  
  const promedio = sumaDeNotas / elRestoDeLosParametros.length

  if (promedio >= 5) {
    console.log(`Promedio de: ${promedio}. El estudiante ${studentName} aprobó!`)
  } else {
    console.log(`Promedio de: ${promedio}. El estudiante ${studentName} no aprobó :(`)
  }

}

verificarSiElEstudianteAprobó("bob", 4, 9)
verificarSiElEstudianteAprobó("patricio", 2, 6)
verificarSiElEstudianteAprobó("calamardo", 1, 9)
verificarSiElEstudianteAprobó("don cangrejo", 2, 7, 9)
verificarSiElEstudianteAprobó("arenita", 2, 7, 9, 10, 4, 2, 6, 2, 8, 7)