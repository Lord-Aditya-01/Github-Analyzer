export default function AchievementSection({badges}) {

  if(!badges) return null;

  return (
    <div className="card">

      <h3>Achievements</h3>

      {badges.map((b,i)=>(
        <img key={i} src={b.icon} width="50"/>
      ))}

    </div>
  );
}
