import { useEffect, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

import { UPDATE_USER } from "./types";
import { getUserHelp } from "./getUserHelper";

const UserState = ({children}) => {


  const initialState  ={
    user : null
  }


  const [ state , dispatch ]  = useReducer( UserReducer , initialState)

  const setUser = (user) => {
    if(!user) return false
    dispatch({
      type : UPDATE_USER,
      payload: user
    })
  }

  useEffect(() => {
    const storedUser = getUserHelp()
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


  return(
    <UserContext.Provider value={{
      user: state.user,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserState