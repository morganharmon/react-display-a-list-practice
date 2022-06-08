import FoodItem from './FoodItem.js';

export default function FoodList({ foods }) {
  return (
    <div>
      <em>Some of my favorite foods:</em>
      {
        foods.map((food, i) => <FoodItem key={food.name + i} {...food} />)
      }
    </div>
  );
} 
