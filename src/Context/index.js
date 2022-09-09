import React from 'react';

// const Context = React.createContext(
// // Estado inicial de la aplicación.
//          {
//              email:"",
//              password:"",
//              isLogged: false,
    
//         }
//     )
// export default Context
// console.log(Context._currentValue);
	
const initialState = {
    users: [],
    addUsers: (neUsers) => {}
  }
   
  export default React.createContext(initialState)
  