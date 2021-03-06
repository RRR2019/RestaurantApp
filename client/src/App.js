import React from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import { Route, withRouter } from 'react-router-dom';
import Register from './components/Register/Register';
import Authenticate from './components/Authenticate/Authenticate';
import Restaurants from './components/Restaurant/Restaurant';
import Login from "./components/Login/Login";


function App() {
	return (
	  <Router>
		<div>
		  <Switch>
		  	<Route exact path="/" component={withRouter(Authenticate)} />
			<Route exact path="/register" component={withRouter(Register)} />
			<Route exact path="/login" component={withRouter(Login)} />
			<Route path="/:username" component={withRouter(Restaurants)} />
		  </Switch>
		</div>
	  </Router>
	);
  }
  
  export default App;
