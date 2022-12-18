import { GET_PROFILE, GET_USERS } from "./types";

//el state me va a traer informacion del estado y action me dirá lo que quiero hacer(como actualizo ese estado)
//action es un objeto
//payload son los datos que me estan pasando
export default (state, action) => {
  const {payload,type} = action;

  //ahora ejecutamos un switch para decidir dependiendo del type que me pasen que es lo que quiero hacer.
  //le decimos lo que va a recibir y con que va a actualizar el estado
  switch(type){
    case GET_USERS:
      return {
        ...state,
        users: payload
      }
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload
      }
    default:
      return state;
  }

}