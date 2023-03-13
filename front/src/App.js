import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Details from "./pages/details/Details";
import UpdatePost from "./pages/updatePost/UpdatePost";
import { useSelector } from 'react-redux';


function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="main">
      <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
      <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path="/detail/:id" element={user ? <Details /> : <Navigate to='/login' />} />
        <Route path="/updatepost/:id" element={user ? <UpdatePost /> : <Navigate to='/login' />}  />

      </Routes>
    </div>
  );
}

export default App;
