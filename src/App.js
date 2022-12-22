import "./assets/css/app.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from "pages/homePage";

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      {/* <Router>
        <Route path="/" element={HomePage}/>
      </Router> */}
    </div>
  );
}

export default App;
