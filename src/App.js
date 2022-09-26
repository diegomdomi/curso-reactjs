import React,{useEffect} from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch ,Route, Redirect } from "react-router-dom";
// import Mensajes from './Components/Mensajes'
// import LoginPage from './Components/LoginPage';
// import {connect} from 'react-redux';

// function App({userLogged}) {



function App() {

  const mostrarVar = process.env.REACT_APP_ENV


  useEffect(() => {
      console.log(mostrarVar)
  })

  return (
    <div className="App">

  <h1>
    <strong>{mostrarVar}</strong>
  </h1>



    {/* <Router>
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
    </Router> */}
    </div>
  );
  }


  // const mapStateToProps = state => { 
  //   return{
  //      userLogged: state.userLogged
  //   }
  // };

  // export default connect(mapStateToProps)(App)
  export default App

