import SnailItem from './SnailItem';

export default function SnailList({ snails }) {
  return (
    <div>
      <em>My Snails:</em>
      <div>
        {
          snails.map((snail, i) => <SnailItem snail={snail} key={snail + i} />)
        }
      </div>
    </div>
  );
}