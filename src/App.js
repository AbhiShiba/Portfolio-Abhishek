import './App.css';
import 'animate.css'
import { Home } from './component/Home/Home';
import { NavBar } from './component/NavBar/NavBar';
import { About } from './component/About/About';
import { Works } from './component/Work/Works';
import { Contact } from './component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
