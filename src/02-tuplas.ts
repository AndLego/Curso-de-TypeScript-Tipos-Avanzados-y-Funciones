// Las tuplas nos sirven para hacer un array fuertemente tipado
// especificando el tipo de dato de cada elemento del array así
//  como la cantidad de elementos.

const prices: (number | string)[] = [1, 2, 3, 4, 4, "asdas"]
prices.push(1)
prices.push("1")

//en la tupla se determina la ubicacion y el tipo de dato
let user: [string, number] = ["andres", 12]
user = ["Felipe", 15]
// user = [12, 15] //error
// user = ["Andres", 15, 12] //error

//un ejemplo claro es el hook useState de React
//destructuring tuple
const [username, age] = user

console.log(username); //Felipe
console.log(age); // 15
