import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import SubMenu from './components/SubMenu';
import SideBarMenu from './components/SideBarMenu';

function App() {
  return (
    <div className="App">
      <Hero/>
      <NavBar/>
      <SubMenu/>
      <SideBarMenu/>
    </div>
  );
}

export default App;
