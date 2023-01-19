/**
 * sobrecarga de funciones para solucionar la inferencia
 * en el resultado de una funcion con ts
 * de manera resumida: el overload lo que hace es definir el tipo de datos
 * diferentes que una funcion recibe y devuelve
 */

//sobrecarga solo se consigue en funciones de tipo func(){}
//primeros tipamos la funcion para la sobrecarga

export function parseStr(input: string): string[]
export function parseStr(input: string[]): string

//despues se ejecuta la funcion
//y vemos que ya sale el overload

// export function parseStr(input: string | string[]) {
//   if (typeof input === "string") {
//     return input.split("")//string
//   }
//   return input.join("")//string[]
// }

//podemos refactorizar la funcion de la siguiente manera generica para poder
//añadir mas sobrecargas

export function parseStr(input: unknown): unknown {
  if (typeof input === "string") {
    return input.split("")//string
  } else if (Array.isArray(input)) {
    return input.join("")//string[]
  }
}

//y aca ya aparece el tipo de dato que retornamos
const rtaArray = parseStr("Andy")
rtaArray.reverse()
console.log("rtaArray", "Andy =>", rtaArray);

const rtaStr = parseStr(["A", "n", "d", "y"])
rtaStr.toLowerCase()
console.log("rtaStr", "['A', 'n', 'd', 'y'] =>", rtaStr);
