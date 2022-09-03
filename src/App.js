import './App.css';
import { BrowserRouter as Router, Switch ,Route, Redirect } from "react-router-dom";
import Mensajes from './Components/Mensajes'
import LoginPage from './Components/LoginPage';
import {connect} from 'react-redux';

function App({userLogged}) {
  return (
    <div className="App">
    
    <Router>
      <Switch>
      	
            <Route exact path="/" component={ LoginPage }/>
            <Route path="/mensajes" >
              {
                userLogged.length ?
                <Mensajes />
                :
                ()=>{
                  alert("must be logged in")
                return (<Redirect to="/"/>)
                }
              }
            </Route>        
      </Switch>
    </Router>
    </div>
  );
  }


  const mapStateToProps = state => { 
    return{
       userLogged: state.userLogged
    }
  };

  export default connect(mapStateToProps)(App)

