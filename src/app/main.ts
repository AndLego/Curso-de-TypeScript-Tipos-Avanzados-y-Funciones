import { addProduct } from "./products/product.service";

addProduct({
  id: 1,
  title: "Camisa",
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 2,
  size: "L",
  category: {
    id: 23,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "ropa"
  }
})
