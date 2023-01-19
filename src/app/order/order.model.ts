import { BaseModel } from "../base.model";
import { Product } from "../products/product.model";
import { User } from "../user/user.model";

export interface Order extends BaseModel {
  user: User,
  products: Product[]
}
