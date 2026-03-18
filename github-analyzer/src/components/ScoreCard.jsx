export default function ScoreCard({score}) {

  return (
    <div className="card">

      <h3>Profile Score</h3>

      <div className="circle-score">
        {score}/100
      </div>

    </div>
  );
}
