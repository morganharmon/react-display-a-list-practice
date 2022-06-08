import SnailItem from './SnailItem';

export default function SnailList({ snails }) {
  return (
    <div>
      {
        snails.map((snail, i) => <SnailItem snail={snail} key={snail + i} />)
      }
    </div>
  );
}