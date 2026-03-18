export default function ProfileCard({data}) {

  return (
    <div className="card">

      <img src={data.avatar} width="80"/>

      <h2>{data.username}</h2>

      <p>{data.bio}</p>

      <p>
        Followers: {data.followers} | Repos: {data.public_repo_count}
      </p>

    </div>
  );
}
