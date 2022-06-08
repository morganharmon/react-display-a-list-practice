import logo from './logo.svg';
import './App.css';
// import your arrays here
import { snails } from './snails.js';
import SnailList from './SnailList.js';
import { foods } from './foods.js';
import FoodList from './FoodList.js';

function App() {
  return (
    <div className="App">
      <SnailList 
        snails = { snails }
      />
      <FoodList 
        foods = { foods }
      />
    </div>
  );
}

export default App;
