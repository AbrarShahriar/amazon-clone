import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch({ 
          type: 'SET_USER',
          user
         })
      } else {
        dispatch({ 
          type: 'SET_USER',
          user: null
         })
      }
      
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
