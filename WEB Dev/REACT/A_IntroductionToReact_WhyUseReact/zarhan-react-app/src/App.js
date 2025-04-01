import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  // State Variable
  const [value, setValue] = useState(0);

  return (

    <div className="App">

      {/* Components with Props atributes */}
      <Navbar bgColor="red" textColor="blue" />


      {/* React-Dom  */}
      <div className="counter" >{value}</div>
      <button onClick={() => { setValue(value + 1) }}>Click me</button>

 {/* Components */}
      <Footer footertext="hello i hham footer" />

    </div>
  );
}

export default App;
