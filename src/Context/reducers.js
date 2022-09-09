 export const LOGEDIN_STORE = "LOGEDIN_STORE";

//   export  const inicialState = {
//          email:"",
//          password:"",
//          isLogged: false

//     }

   export const myReducer = (state,action)=>{
        switch (action.type) {
            case LOGEDIN_STORE:
                return{ 
                    ...state,
                    email: action.payload.email,
                    password: action.payload.password,  
                    isLogged:true
                }
                default:
                return {...state};
        }
    }