import TeamItem from './TeamItem.js';

export default function TeamList({ teams }) {
  return (
    <div>
      <em>Basketball teams you should know:</em>
      {
        teams.map((team, i) => <TeamItem key={team.name + i} {...team} />)
      }
    </div>
  );
}
