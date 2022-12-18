import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

//vamos a mostrar la lista de usuarios usando el context
const UserList = () => {
  //con el useContext le vamos a decir al componente a que contexto queremos que acceda
  const {getUsers} = useContext(UserContext)

  //el useEffect se va a ejecutar en cuanto cargue el componente
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div>
      User list
    </div>
  )
}

export default UserList;