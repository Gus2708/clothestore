import './App.css';
import Homepage from './components/Homepage';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LogIn></LogIn>
      {/*<Homepage></Homepage> */}
    </div>
  );
}

export default App;
