export default function StatsGrid({ data }) {

  return (
    <div className="stats-grid">

      <div className="stat">Repositories: {data.public_repo_count}</div>
      <div className="stat">Followers: {data.followers}</div>
      <div className="stat">Score: {data.score}</div>

    </div>
  );
}
