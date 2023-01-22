import { addProduct, findProducts, products, updateProduct } from "./products/product.service";
import { faker } from "@faker-js/faker"

for (let index = 0; index < 5; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(["M", "S", "L", "XL"]),
    categoryId: faker.datatype.uuid()
  })
}

console.log("products", products);
const product = products[0]
const rta = updateProduct(product.id, {
  title: "new title",
  stock: 80,
})
console.log("updated", rta);

const filterProducts = findProducts({
  color: "blue"
})

console.log("filtered", filterProducts);

