// Destructuración

console.log("probando")


const unPerritoMuyMajo = {
  name: "Pepe",
  breed: "San Bernardo",
  age: 6,
  rating: 11
}

const unPerritoMuyMajo2 = {
  name: "Paco",
  breed: "Pug",
  age: 10,
  rating: 11,
  color: "blanco"
}

// let name = unPerritoMuyMajo.name
// let breed = unPerritoMuyMajo.breed
// let age = unPerritoMuyMajo.age
// let rating = unPerritoMuyMajo.rating

// destructuración en objetos => extraer propiedades de un objeto y almacenarlas en variables

// let { breed, age, rating, name  } = unPerritoMuyMajo

// console.log(`El perrito ${name} es de raza ${breed} y tiene ${age} añitos de edad`)

// console.log(`Rating del perrito ${name}. ${rating}/10 `)


function describirPerrito({ name, breed, age, rating, color = "sin color definido"}) {
  // El = en destructuración asigna un valor predeterminado (por defecto) en caso que no se haya recibido

  // const { name, breed, age, rating } = unPerrito

  console.log(`El perrito ${name} es de raza ${breed} y tiene ${age} añitos de edad`)

  console.log(`Rating del perrito ${name}. ${rating}/10 `)

  console.log(`${name} es de color ${color}`)

}

describirPerrito(unPerritoMuyMajo)
describirPerrito(unPerritoMuyMajo2)


// Destructuración en Arrays

const misTresLibrosFavoritosDelMundoMundial = ["MundoDisco", "Dresden Files", "Dragonlance"]



let [ libro1, libro2, libro3, libro4 = "Harry Potter" ] = misTresLibrosFavoritosDelMundoMundial

console.log(`Mis tres libros favoritos son: ${libro1}, ${libro2}, ${libro3} y ${libro4}`)


const persona = {
  firstName: "Bill",
  lastName: "Gates",
  job: "Microsoft CEO",
  other: {
    about: {
      hobby: "desarrollar computación quantica",
      otherCompanies: ["CN", "Caterpillar"]
    }
  }
}

// const { firstName, other } = persona
// const { about } = other
// const { hobby, otherCompanies } = about
// const [ primeraComp ] = otherCompanies

const { other: { about: { hobby, otherCompanies: [ primeraComp ] } } } = persona

console.log(hobby)
console.log(primeraComp)
