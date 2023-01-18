//los paraemtros opcionales tienen que ir al final
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

/*por eso usamos ?? en vez de || ya que los toma como false y no manda
malos resultados
0 === false
"" === false
false === false
*/

const p1 = createProduct(1, true, 32)
console.log(p1);

const p2 = createProduct(1)
//stock: undefined entonces le ponemos un valor por defecto
console.log(p2);

const p3 = createProduct(1, false, 0)
console.log(p3);
