import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const companies = [
    { name: "Amazon", type: "Big Tech", h1b: true, status: "Not Applied" },
    { name: "Google", type: "Big Tech", h1b: true, status: "Applied" },
    { name: "Microsoft", type: "Big Tech", h1b: true, status: "Interview" },
    { name: "Meta", type: "Big Tech", h1b: true, status: "Not Applied" },
    { name: "Apple", type: "Big Tech", h1b: true, status: "Not Applied" },

    { name: "IBM", type: "Consulting", h1b: true, status: "Applied" },
    { name: "Accenture", type: "Consulting", h1b: true, status: "Not Applied" },
    { name: "Cognizant", type: "Consulting", h1b: true, status: "Not Applied" },
    { name: "Infosys", type: "Consulting", h1b: true, status: "Not Applied" },
    { name: "TCS", type: "Consulting", h1b: true, status: "Not Applied" },

    { name: "Robert Half", type: "Contract", h1b: false, status: "Not Applied" },
    { name: "Deloitte", type: "Contract", h1b: true, status: "Offer" },
    { name: "Capgemini", type: "Contract", h1b: true, status: "Not Applied" },
    { name: "HCLTech", type: "Contract", h1b: true, status: "Not Applied" }
  ];

  // 🔍 SEARCH FILTER
  let filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🎯 CATEGORY FILTER
  if (filter !== "ALL") {
    filtered = filtered.filter((c) => c.type === filter);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      
      <h1>🎯 Job Tracker App</h1>
      <p>Track OPT / STEM OPT / H1B companies + application status</p>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search company (e.g. Google)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          width: 250,
          marginRight: 10,
          marginBottom: 10
        }}
      />

      {/* 🎯 FILTER BUTTONS */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("Big Tech")}>Big Tech</button>
        <button onClick={() => setFilter("Consulting")}>Consulting</button>
        <button onClick={() => setFilter("Contract")}>Contract</button>
      </div>

      <h2>📌 Companies</h2>

      {/* LIST */}
      <div style={{ lineHeight: "2" }}>
        {filtered.map((c, index) => (
          <div key={index} style={{ padding: "6px 0" }}>
            <b>{c.name}</b> — {c.type} —{" "}
            {c.h1b ? "✅ H1B Friendly" : "⚠️ Limited"} —{" "}
            <span style={{ color: "blue" }}>{c.status}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;