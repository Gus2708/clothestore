import './App.css';
import Cart from './components/Cart';
import Homepage from './components/Homepage';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart></Cart>
      {/* <SignUp></SignUp> */}
      {/* <LogIn></LogIn> */}
      {/* <Homepage></Homepage> */}

    </div>
  );
}

export default App;
