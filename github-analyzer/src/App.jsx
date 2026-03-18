import { useState } from "react";
import Dashboard from "./Dashboard";
import SearchBar from "./SearchBar";
import "./styles/dashboard.css";
export default function App() {

  const [data,setData] = useState(null);

  const analyze = async (username) => {

    const res = await fetch(
      `https://github-analyzer-worker.github-ai-analyzer.workers.dev/api?username=${username}`
    );

    const json = await res.json();

    console.log("API DATA:", json);

    setData(json);
  };

  return (
  <div className="main-wrapper">

    <div className="app-container">

      <SearchBar onSearch={analyze}/>

      {data && <Dashboard data={data}/>}

    </div>

  </div>
);

}
