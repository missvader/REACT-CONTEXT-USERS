import React from "react";
import { useReducer } from "react";
import UserReducer from "./UserReducer"
//importamos el UserContext
import UserContext from "./UserContext";

//este componente es el que contiene el estado
const UserState = (props) => {
  //aqui vamos a definir el estado inicial
  const initialState = {
    users : [],
    selectedUser: null
  }
  //el state contiene el estado inicial
  //el setState dispara la actualizacion de ese estado
  //el reducer te permite escoger que es lo que quieres ejecutar dependiendo del dispatch
  //useReducer es la función que nos da react y en este caso, UserReducer lo vamos a crear nosotros para decidir que funciones queremos ejecutar
  /*const [state, setState] = useState(initialState);*/
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //funcion que nos traera una lista de usuarios para llenar users
  const getUsers = () => {}

  //funcion que nos traera un objeto para llenar selectedUser
  const getProfile = () => {}
  //ahora en el return ejecutamos el UserContext para decirle que todos los componentes que pongamos dentro, van a poder acceder al estado y hacer uso de él . Dentro de UserContext tenemos que especificar que funciones queremos pasarle con el provider. En value especificamos a que van a poder acceder los componentes hijos
  return (
    <UserContext.Provider value = {{
      users : state.users,
      selectedUser : state.selectedUser,
      getUsers,
      getProfile 
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;