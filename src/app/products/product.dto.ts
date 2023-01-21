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
