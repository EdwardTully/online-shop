
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CheckOut from './components/CheckOut';
import ProductEntry from './components/ProductEntry';
import PurchasePage from './components/PurchasePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/product_entry" element={<ProductEntry/>}/>
        <Route path="/purchase" element={<PurchasePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
