import AnimalItem from './AnimalItem.js';

export default function AnimalList({ animals }) {
  return (
    <div>
      <em>Some nice animals:</em>
      <hr></hr>
      {
        animals.map((animal, i) => <AnimalItem key={animal.type + i} animal={ animal } />)
      }
    </div>
  );
}