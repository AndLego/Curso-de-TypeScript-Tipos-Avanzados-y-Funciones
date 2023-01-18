//una mejor manera de asignar valores por defecto es la siguiente
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, true, 32)
console.log(p1);

const p2 = createProduct(1)
//stock: undefined entonces le ponemos un valor por defecto
console.log(p2);

const p3 = createProduct(1, false, 0)
console.log(p3);
