import { Product } from "./product.model";

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
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
