// si mando Andy quiero que me retorne => [A,n,d,y]
//es decir que reciba un string y lo devuelva hecho array
//string => string[]
//y viceversa

const myfunc = (input: string | string[]) => {
  if (typeof input === "string") {
    return input.split("")
  }
  return input.join("")
}

const rta = myfunc("Andy")
console.log(rta);
const rta2 = myfunc(["A", "n", "d", "y"])
console.log(rta2);

//sobrecarga solo se consigue en funciones de tipo func(){}

function parseStr(input: string | string[]) {
  if (typeof input === "string") {
    return input.split("")//string
  }
  return input.join("")//string[]
}


const rtaArray = parseStr("Andy")
/**
 * el problema viene en que yo se que devuelve un array pero ts no, y por
 * eso no me hace inferencia alguna cuando tipeo rtaArray.reve___
 * por lo que tendria que hacer la comprobacion
 * if(Array.isArray(rtaArray)){rtaArray.reverse()}
 */
console.log("rtaArray", "Andy =>", rtaArray);

const rtaStr = parseStr(["A", "n", "d", "y"])
/**
 * lo mismo sucede con el string rtaStr.toLower_____
 * if(typeof rtaStr === "string"){rtaStr.toLowerCase()}
 */
console.log("rtaStr", "['A', 'n', 'd', 'y'] =>", rtaStr);
