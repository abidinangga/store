import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "pages/homePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/catagories/:idc" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/congratulation" component={Congratulation}/>
        <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
