
export default function FoodItem({ name, ingredients, deliciousness }) {
  return (
    <div className='foods'>
      <h3>{ name }</h3>
      <ul style={{ width: 'fit-content' }}>{ ingredients.map((ingredient, i) => <li className='li' key={i}>{ ingredient }</li>) }</ul>
      <p>Deliciousness: { deliciousness }</p>
    </div>
  );
}