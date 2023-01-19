type Sizes = "S" | "M" | "L" | "XL"
type Product = {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

const products: Product[] = []
products.push({
  id: 1,
  title: "Saco",
  createdAt: new Date,
  stock: 31,
  size: "M"
})

/**
 * las interfaces funcion similiar al type pero aplicado
 * a objetos y clases
 * ya que definimos varios tipos en varias lineas
 * a difrencia de un type que se peude realizar en 1 linea
 *
 * Su mayor diferencia es que interface nos permite extender
 * por medio de patrones
 */

interface Product2 {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

const products2: Product2[] = []
products.push({
  id: 1,
  title: "Saco",
  createdAt: new Date,
  stock: 31,
  size: "M"
})
const addProduct = (data: Product2) => {
  products.push(data)
}
