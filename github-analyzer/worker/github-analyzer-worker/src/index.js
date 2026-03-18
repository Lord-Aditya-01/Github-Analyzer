
export default {
  async fetch(request) {

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json"
    };

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    try {

      const url = new URL(request.url);

      if (url.pathname !== "/api") {
        return new Response(JSON.stringify({ status:"API Running" }), { headers });
      }

      const username = url.searchParams.get("username");

      if (!username) {
        return new Response(JSON.stringify({ error:"Username required" }), { headers });
      }

      // 🔥 IMPORTANT: Use secret instead of hardcoding token later
      require('dotenv').config();
      const TOKEN = process.env.GITHUB_TOKEN;
      const githubHeaders = {
        "Authorization": `Bearer ${TOKEN}`,
        "User-Agent": "Cloudflare-Worker"
      };

      // =====================
      // FETCH USER
      // =====================

      const userRes = await fetch(
        `https://api.github.com/users/${username}`,
        { headers: githubHeaders }
      );

      const userData = await userRes.json();

      if (!userData.login) {
        return new Response(JSON.stringify({
          error: "GitHub user not found",
          githubResponse: userData
        }), { headers });
      }

      // =====================
      // FETCH REPOS
      // =====================

      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        { headers: githubHeaders }
      );

      const reposData = await repoRes.json();

      const repos = Array.isArray(reposData) ? reposData : [];

      // =====================
      // CREATE DASHBOARD DATA
      // =====================

      const contributionGraph = Array.from({length:30}, (_,i)=>({
        day:i+1,
        contributions: Math.floor(Math.random()*5)
      }));

      const badges = [
        { icon:"🏆", name:"High Repo Creator" },
        { icon:"🔥", name:"Active Developer" },
        { icon:"🚀", name:"Contributor" }
      ];

      const ai_analysis = {
        developer_type: "Full-stack learner focusing on frontend and backend basics",
        improvement:[
          "Add README to projects",
          "Increase open source contributions",
          "Improve documentation",
          "Pin best projects"
        ]
      };

      const score = Math.min(100, repos.length * 2);

      const response = {
        avatar: userData.avatar_url,
        username: userData.login,
        bio: userData.bio,
        followers: userData.followers,
        public_repo_count: userData.public_repos,
        score,
        contributionGraph,
        badges,
        ai_analysis
      };

      return new Response(JSON.stringify(response), { headers });

    } catch (err) {

      return new Response(JSON.stringify({
        error:"Worker crashed",
        message: err.message
      }), { headers });

    }

  }
};
