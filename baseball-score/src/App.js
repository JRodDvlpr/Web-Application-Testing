import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';


function App() {

  const [strike , setStrike] = useState(0);
  const [ball, setBall ] = useState(0);

  const strikeHandle = () => {
    if (strike === 3) {
      setStrike(0)
      setBall(0)
    }else setStrike(strike + 1);
  }  
  
  const ballHandle = () => {
    if (balls === 4 ) {
      setStrike(0)
      setBall(0)
    } else setBall(ball + 1)
  }

  const hitHandle = () => {
    setStrike(0)
    setBall(0)
  }

  const FoulHandle = () => {
    if (strike < 2 ) setStrike(strike + 1)
  }

  return (
    <div className="App">
      <Display 
      strikes={strikeHandle} 
      balls={ballHandle}/>
      <Dashboard 
      strikes={strikeHandle}
      balls={ballHandle}
      hit={hitHandle}
      foul={FoulHandle}
      />
    </div>
  );
}

export default App;
