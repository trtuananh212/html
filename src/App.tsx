import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import ProductList from "./ProductList";
// import ProductAdd from "./ProductAdd";
// import ProductEdit from "./ProductEdit";
// import Signin from "./Signin";
// import Signup from "./Signup";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
   
  );
}

export default App;
