import "./assets/css/app.css";
import HomePage from "pages/homePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/catagories" element={<Details />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/congratulation" element={<Congratulation />}/>
        <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
