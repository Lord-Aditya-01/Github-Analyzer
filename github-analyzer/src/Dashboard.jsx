export default function Dashboard({ data }) {

  if(!data) return null;

  return (

    <div className="dashboard-wrapper">

      {/* PROFILE */}
      <div className="profile-card">

        <img src={data.avatar} className="profile-avatar"/>

        <div>
          <h2>{data.username}</h2>
          <p>{data.bio}</p>
          <p>Repos: {data.public_repo_count} | Followers: {data.followers}</p>
        </div>

      </div>


      {/* GRID */}
      <div className="dashboard-grid">

        <div className="left-col">

          <div className="card">

  <h3>Contribution Graph</h3>

  <div className="graph-container">

    {data.contributionGraph?.map((item, index) => (

      <div
        key={index}
        className="graph-box"
        style={{
          background:
            item.contributions > 0
              ? `rgba(34,197,94,${0.3 + item.contributions * 0.15})`
              : "#1e293b"
        }}
        title={`Day ${item.day}: ${item.contributions} contributions`}
      />

    ))}

  </div>

</div>

          <div className="card">
            <h3>AI Analysis</h3>

            <p>{data.ai_analysis?.developer_type}</p>

            <ul>
              {data.ai_analysis?.improvement?.map((i,index)=>(
                <li key={index}>{i}</li>
              ))}
            </ul>

          </div>

        </div>


        <div className="right-col">

          <div className="card score-card">
            {data.score}/100
          </div>

          <div className="card">
            <h3>Achievements</h3>

            <div className="badges">
              {data.badges?.map((b,i)=>(
                <span className="badge" key={i}>
                  {b.name}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
