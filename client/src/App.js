import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import CaregiverPage from "./views/Caregiver/Caregiver"
import "bootstrap/dist/css/bootstrap.min.css"
import data from './dataADL';



const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Caregiver"><CaregiverPage data={data} /></Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
