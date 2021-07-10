import Register from './Register';
import Login from './Login';
import ReviewForm from './ReviewForm';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './Home';
import { AuthProvider } from './AuthContext';
// import {firebase} from './firebase'
function App() {
  return(
    <AuthProvider>
      <div className="App">
        
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} ></Route>
            <Route path="/register" exact={true} component={Register} ></Route>
            <Route path="/login" exact={true} component={Login} ></Route>
            <Route path="/review" exact={true} component={ReviewForm}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
    
  )
}
// firebase.auth().onAuthStateChanged((user)=>{
//   if(user){
//     console.log("loggedin");
//   }else{
//     console.log("logged out");
//   }
// })
export default App;
