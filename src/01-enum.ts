//muy util para crear actionTypes en redux o cualquier cosa

enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string,
  rol: ROLES
}

const andresUser: User = {
  username: "andresbytes",
  rol: ROLES.ADMIN
}

const diMiRol = (rol: ROLES) => {
  return `Mi rol es ${rol}`;
}

//mas sencillo cuando vemos loq ue recomiendo TS "ctrl+space"
console.log(diMiRol(ROLES.ADMIN));


// diferencia con literal types

// Con un enum tenemos que ser mas específicos al momento de llamar a sus valores,
// no podemos acceder a ellos como si fuera una simple cadena.
//Mientras que con un literal type esto es mucho mas sencillo

type ROLES2 = "admin" | "seller" | "customer"

type User2 = {
  username: string,
  rol: ROLES2
}

const andresbytes2: User2 = {
  username: "andresbytes",
  rol: "admin"
}

const diMiRol2 = (rol: ROLES2) => {
  return `Mi rol es ${rol}`;
}

console.log(diMiRol2("admin"));
