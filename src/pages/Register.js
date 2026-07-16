// src/pages/Register.js

import React, { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registered successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;