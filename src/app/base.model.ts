export interface BaseModel {
  readonly id: string | number,
  readonly createdAt: Date,
  updatedAt: Date,
}


/**
 * readonly en TS
 * Como su nombre lo indica, este feature de TS nos ayuda
 * a tener ciertos atributos solo de lectura. Lo que significa
 * que no pueden ser modificados. Un buen caso de uso es el id
 * y el createdAt.
 */
