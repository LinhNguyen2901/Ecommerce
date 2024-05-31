import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Account from './Pages/Account';
import Navbar from './Component/Navbar/Navbar';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/men_banner.jpg'
import women_banner from './Component/Assets/women_banner.png'
import kid_banner from './Component/Assets/kid_banner.png'
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Category banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<Category banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Category banner={kid_banner} category="kids"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
