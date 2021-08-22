import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
//   const [style, setStyle] = useState({
//     color: 'white',
//     backgroundColour: 'black'
// })
  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#08706e';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
  }
  return (
    <div className="App">
      
      <Header mode={mode} toggleMode={toggleMode}></Header>
      <Main mode={mode}></Main>
    </div>
  );
}

export default App;
