const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const port = 3001;

// Use CORS to allow requests from your React frontend
app.use(cors());

// Mocked incident data
const incidents = [
  {
    id: 1,
    type: "Ransomware Attack!!",
    description: "The system has been infected with ransomware.",
    attackVector: "Phishing Email",
    compromisedSystems: ["Finance Server", "User Workstations"],
    status: "Detected", 
  },
  {
    id: 2,
    type: "Data Breach!!",
    description: "Sensitive customer data has been exfiltrated.",
    attackVector: "SQL Injection",
    compromisedSystems: ["Customer Database"],
    status: "Detected",
  },
];

app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
