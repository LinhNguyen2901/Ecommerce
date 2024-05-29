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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/account' element={<Account/>}/>

      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
