//any es cualquier valor

let anyVar: any
anyVar = true
anyVar = undefined
anyVar = 1
anyVar = []

let isNew: boolean = anyVar
anyVar.doSomething()
//espero un error pero ts me lo permite porque anyVar es de tipo any
//nos devuelve a js sin un analisis de codigo estatico
//para evitar estos errores usamos unkown

let unkownVar: unknown
anyVar = true
anyVar = undefined
anyVar = 1
anyVar = []

// unkownVar.doSomething()//error }
//me fuerza a verificar el tipo, de lo contrario da error
// unkownVar.toUpperCase()//error
if (typeof unkownVar === "string") {
  unkownVar.toUpperCase()
}

// let isNew2: boolean = unkownVar//error
if (typeof unkownVar === "boolean") {
  let isNew2: boolean = unkownVar
}

//usar unkwon sobre any, SIEMPRE
//en este caso no sabemos si el json viene bien o mal y el unkwon nos protege de un error
const parse = (str: string): unknown => {
  return JSON.parse(str)
}
