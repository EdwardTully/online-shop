
import '../App.css';
import NavBar from './NavBar';
import ShopWindow from './ShopWindow';


function Home() {
  return (
    <div className="Home">
      <h1 id='mainH'>Scrappy Dick's D*Bay</h1>
      <h3 id = 'mainHt'>Crazy Good Deals and FREE Shipping Always!</h3>
      <NavBar/>
     <ShopWindow/>
    </div>
  );
}

export default Home;