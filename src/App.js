
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CheckOut from './components/CheckOut';
import ProductEntry from './components/ProductEntry';
import PurchasePage from './components/PurchasePage';
import StartShop from './components/StartShop';
import UserEntry from './components/UserEntry';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/start_shop' element={<StartShop/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/product_entry" element={<ProductEntry/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="user_entry" element={<UserEntry/>}/>
        <Route path="/start_shop/purchase" element={<PurchasePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
