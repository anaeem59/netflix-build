import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './LoginScreen'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        )
      } else {
        dispatch(logout);
      }
      console.log(userAuth);
    })

    return unsubscribe;
  }, [])

  return (
    <div className="app"> 
     <Router>
       {!user ? (
         <LoginScreen />
       ) : (
        <Switch>
         <Route exact path="/" >
          <HomeScreen />
         </Route>
       </Switch>
       )}
     </Router>
    </div>
  );
}

export default App;
