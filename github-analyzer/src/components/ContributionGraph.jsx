export default function ContributionGraph({graph}) {

  if(!graph) return null;

  return (
    <div className="card">

      <h3>Contribution Graph</h3>

      {graph.map((v,i)=>(
        <span key={i}>{v} | </span>
      ))}

    </div>
  );
}
