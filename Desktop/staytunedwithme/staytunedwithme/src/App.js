import logo from './logo.svg';
import Navbar from './Navbar';
import { About } from './About';
import { Blog } from './Blog';
import { Footer } from './Footer';
import './App.css';


function App() {
  return (
    <>
      <Navbar searchbar={false} wname="StayTunedWithME"/>
      <About/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;


