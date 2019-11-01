import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import CaregiverTest from "./views/Caregiver/Caregiver"
import "bootstrap/dist/css/bootstrap.min.css"



const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
        <Route exact path="/CaregiverPage"> <CaregiverTest /></Route>
      </Switch>
    </div>
  );
}

export default App;
