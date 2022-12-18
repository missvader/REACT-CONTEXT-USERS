import { createContext } from "react";
//aqui vamos a crear el context que guardaremos en UserContext, podemos crear los context que queramos y separar asi de otros estados. El context es basicamente una funcion que retorna un estado
const UserContext = createContext()

export default UserContext;