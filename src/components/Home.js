
import '../App.css';
import NavBar from './NavBar';
import ShopWindow from './ShopWindow';
import TitleBar from './TitleBar';
import Welcome from './Welcome';


function Home() {
  return (
    <div className="Home">
      <TitleBar/>
     
      <NavBar/>
     <Welcome/>
    </div>
  );
}

export default Home;