import { BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import AxiosProducts from "./Components/FakeStore/AxiosProducts";
import NavBarStore from './Components/FakeStore/NavBarStore';
import Product from "./Components/FakeStore/Product"
import LoginStore from './Components/FakeStore/LoginStore';
import './Components/FakeStore/store.css'
import 'materialize-css/dist/css/materialize.min.css'
import Context from './Context/index'
import {useReducer} from 'react'
import { myReducer,LOGEDIN_STORE } from './Context/reducers';

function AppAxios (){
    const [users, dispatch] = useReducer(myReducer, [
        {
            email:"",
            password:"",
            isLogged:false        
        }
      ]);

    let addUsers = (users) => {
        dispatch({type: LOGEDIN_STORE, payload: users});
      }
      
    console.log(users);
    return(
        <>
        <Context.Provider value={{users:users,addUsers:addUsers}}>
        <BrowserRouter>
                <NavBarStore/>
            <Switch>
                <Route exact path="/" component={LoginStore} />   
                <Route exact path ="/store">
                    {
                            users.isLogged ? 
                            <AxiosProducts/>
                        :
                        ()=>{
                            alert("must be logged in")
                            return(<Redirect to="/"/>)   
                        }

                    }
                </Route>
                <Route exact path="/product/:id" component={Product}/>
            </Switch>
        </BrowserRouter>
        </Context.Provider>
        </>
    )
}

export default AppAxios