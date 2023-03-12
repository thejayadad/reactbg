import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Details from "./pages/details/Details";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create   />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;
