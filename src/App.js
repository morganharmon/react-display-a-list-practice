import logo from './logo.svg';
import './App.css';
// import your arrays here
import { snails } from './snails.js';
import SnailList from './SnailList.js';

function App() {
  return (
    <div className="App">
      <SnailList 
        snails = { snails }
      />
    </div>
  );
}

export default App;
