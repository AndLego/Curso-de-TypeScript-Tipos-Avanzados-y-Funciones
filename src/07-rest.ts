import { User, ROLES } from "./01-enum"

const currentUser: User = {
  username: "andres",
  rol: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.rol === ROLES.ADMIN) {
    return true
  }
  return false
}

const rta = checkAdminRole()
console.log("checkAdminRole", rta);
/*

export const checkRole = (roles: string[]) => {
  if (roles.includes(currentUser.rol)) {
    return true
  }
  return false
}

const rta2 = checkRole([ROLES.ADMIN, ROLES.SELLER])
console.log("chechRole", rta2);
*/

//mandar los parametros como ...args nos crea automticamente un array

export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.rol)) {
    return true
  }
  return false
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
console.log("chechRole", rta2);
