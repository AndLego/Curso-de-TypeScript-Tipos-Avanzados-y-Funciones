import { faker } from "@faker-js/faker";
import { CreateProductDto2, FindProductDto, UpdateProductDto } from "./product.dto";
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

/**
 * En este caso hallamos el objeto para actualizar, pasamos los parametros a cambiar,
 * y retornamos un objeto con la data previa y los nuevos datos.
 * Estos gracias al utility type Partial
 * @param id id para identificar el item en cuestion
 * @param element datos que queremos actualizar
 * @returns retorna el item actualizado detipo Product
 *
 */

export const updateProduct = (id: string | number, element: UpdateProductDto): Product => {
  let index = products.findIndex(item => item.id === id)
  let prevData = products[index]
  products[index] = {
    ...prevData,
    ...element
  }
  return products[index]
}

/**
 *
 * @param id id para identificar el item
 * @returns un array cuyos valores hagn match
 */

export const findProducts = (dto: FindProductDto): Product[] => {
  //codigo de filtro, mongo, sql, etc
  // dto.color= "blue" error porque llegan como params de lectura
  const property = Object.keys(dto)[0];
   const value = dto[property as keyof FindProductDto];

//de esta manera se arregla el error de buscar un index sin typo especifico
  return products.filter(item => item[property as keyof FindProductDto] === value)
}


export const deleteProduct = (id: string) => {
  let index = products.findIndex(item => item.id === id)
  products.splice(index, 1)
}

