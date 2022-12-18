import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

//vamos a mostrar la lista de usuarios usando el context
const UserList = () => {
  //con el useContext le vamos a decir al componente a que contexto queremos que acceda
  const {getUsers, users} = useContext(UserContext)

  //el useEffect se va a ejecutar en cuanto cargue el componente
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className="list-group h-100">
      {
        users.map(user => (
          <a href="#!" key={user.id} className="list-group-item list-group-item-action d-flex flex-row 
            justify-content-start"
            onClick={() => console.log(user.id)}
            >
            <img src = {user.avatar} className = "img-fluid mr-4 rounded-circle" width="70"/> 
            <p>
              {`${user.first_name} ${user.last_name}`}
            </p>
          </a>
        ))
      }
    </div>
  )
}

export default UserList;