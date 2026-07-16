// src/pages/DoctorDashboard.js

import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "patients"), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      setPatients(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Doctor Dashboard</h2>

      {patients.map((p, i) => (
        <div key={i}>
          <p>Heart Rate: {p.heartRate}</p>
          <p>BP: {p.bp}</p>
          <p>Temp: {p.temp}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default DoctorDashboard;