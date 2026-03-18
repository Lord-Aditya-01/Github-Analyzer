export default function AIAnalysis({ai}) {

  if(!ai) return null;

  return (
    <div className="card">

      <h3>AI Analysis</h3>

      <p>{ai.developer_type}</p>

      <ul>
        {ai.improvement.map((x,i)=>(
          <li key={i}>{x}</li>
        ))}
      </ul>

    </div>
  );
}
