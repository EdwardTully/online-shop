
import '../App.css';
import NavBar from './NavBar';
import ShopWindow from './ShopWindow';


function Home() {
  return (
    <div className="Home">
      <h1 id='mainH'>Thrifty Dick's Dealbay</h1>
      <h3 id = 'mainHt'>Crazy Good Deals and a FREE SECRET PRIZE, Guaranteed!</h3>
      <NavBar/>
     <ShopWindow/>
    </div>
  );
}

export default Home;