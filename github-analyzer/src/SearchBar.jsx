import { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [username,setUsername] = useState("");

  return (
    <div className="search-section">
      <div className="search-bar">

        <input
          className="search-input"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={()=>onSearch(username)}
        >
          Analyze Profile
        </button>

      </div>
    </div>
  );
}
