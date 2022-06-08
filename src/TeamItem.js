import { teams } from './teams';

export default function TeamItem({ name, stars, city }) {
  return (
    <div>
      <h3>{ name }</h3>
      <h5>{ city }</h5>
      <ul>
        <li className='li'>pg: { stars.pg }</li>
        <li className='li'>sg: { stars.sg }</li>
        <li className='li'>c: { stars.c }</li>
      </ul>

    </div>
  );
}