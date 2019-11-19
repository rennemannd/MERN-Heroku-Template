import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import Projects from "./views/Projects/Projects"
import Technology from "./views/Technology/Technology"
import Press from "./views/Press/Press"
import Publications from "./views/Publications/Publications"
import Admin from "./views/Admin/Admin"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.css';


const App = () => {
    return (
    <div>
      <Header />
      <div className="content">
        <Switch >
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/press" component={Press} />
            <Route exact path="/publications" component={Publications} />
            <Route exact path="/admin" component={Admin} />
            <Route component={NotFound}/>
        </Switch>
        <div className="bottom">
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
