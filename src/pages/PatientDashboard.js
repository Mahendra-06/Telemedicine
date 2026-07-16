// src/pages/PatientDashboard.js

import React, { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { analyzeVitals } from "../services/diagnostics";

function PatientDashboard() {
  const [heartRate, setHeartRate] = useState("");
  const [bp, setBp] = useState("");
  const [temp, setTemp] = useState("");
  const [result, setResult] = useState([]);

  const submitData = async () => {
    const data = {
      heartRate: Number(heartRate),
      bp: Number(bp),
      temp: Number(temp),
      timestamp: Date.now(),
    };

    await addDoc(collection(db, "patients"), data);

    const analysis = analyzeVitals(data);
    setResult(analysis);
  };

  return (
    <div>
      <h2>Patient Dashboard</h2>

      <input placeholder="Heart Rate"
        onChange={(e) => setHeartRate(e.target.value)} />

      <input placeholder="Blood Pressure"
        onChange={(e) => setBp(e.target.value)} />

      <input placeholder="Temperature"
        onChange={(e) => setTemp(e.target.value)} />

      <button onClick={submitData}>Submit</button>

      <h3>Analysis:</h3>
      {result.map((r, i) => <p key={i}>{r}</p>)}
    </div>
  );
}

export default PatientDashboard;