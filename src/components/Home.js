
import '../App.css';
import NavBar from './NavBar';
import ShopWindow from './ShopWindow';
import TitleBar from './TitleBar';


function Home() {
  return (
    <div className="Home">
      <TitleBar/>
      <h3 id = 'mainHt'>We hunt for the  bargains so you don't have to...Come find your own thrill-of-the-hunt here!</h3>
      <NavBar/>
     <ShopWindow/>
    </div>
  );
}

export default Home;