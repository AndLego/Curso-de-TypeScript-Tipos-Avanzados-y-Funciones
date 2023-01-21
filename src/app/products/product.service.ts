import { faker } from "@faker-js/faker";
import { CreateProductDto2 } from "./product.dto";
import { Product } from "./product.model";

export const products: Product[] = []

/**
 * generamos un ProductoDto sin las propiedades de id, dates, y categories,
 * de modo que en el servicio tenemos que actualizarlo
 * por lo general lo hace la base de datos
 * en otras palabras estos datos se generan es desde adentro y no desde el usuario
 */
export const addProduct = (data: CreateProductDto2): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id: string, element: Product) => {
  let index = products.findIndex(item => item.id === id)
  products.splice(index, 1, element)
}

export const deleteProduct = (id: string) => {
  let index = products.findIndex(item => item.id === id)
  products.splice(index, 1)
}

export const getProduct = (id: string) => {
  //code
}
