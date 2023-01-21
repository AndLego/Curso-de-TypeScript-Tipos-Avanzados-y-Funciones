import { Product } from "./product.model"

/**Omit
 * nos permite omitir datos a la hora de enviar oc rear un objeto
 * por ejemplo, cuando subimos un dato a mongodb u otra db
 * por lo general ellos crean el id y la fecha de creacion
 * por lo que no seria necesarioa que en nuestra interface lo
 * generaramos.
 */


//en este caso se crea un clon de Product pero sin la propiedad id
type CreateProductDto = Omit<Product, "id" | "createdAt" | "updatedAt" | "category">


/**
 * en este segundo caso creo una nueva interface omitiendo propiedades pero
 * añadiendo una nueva propiedad
 */
export interface CreateProductDto2 extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string
}


/**
 * el opuesto del Omit
 * es el Pick, en el que genero un objeto y yo elijo los atributos
 */

type example = Pick<Product, "color" | "description">

/**
 * el utility type Partial nos permite enviar parametros parciales
 * sin necesidad de crear una copia de interface añadiendo item? opcional
 * Lo que hace de background es poner todo con signo de ? automaticamente
 * si lo usamos de modo type no nos pide de manera obligatoria ningun param
 * pero al usar interface y extenderlo podemos pedir de manera obligatoria
 * ciertos parametros
 */

// export type UpdateProductDto = Partial<Product>

/**
 * reutilizamos el dto CreateProduct con el fin de omitir ciertos parametros que
 * ya tenemos de solo tipo lectura y fijos
 */
export interface UpdateProductDto extends Partial<CreateProductDto2> { }

/**
 * el contrario de Partial es Required, el cual hace todos los campos requeridos
 * incluso aquellos que teniamos como opcionales desde un inicio
 */

export type example2 = Required<Product>
