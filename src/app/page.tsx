"use client"

import Login from "../../components/Login"
import Register from "../../components/Register"
import React, { useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>Please Login or Register</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>

      {showLogin && <Login />}
      {showRegister && <Register />}
    </div>
    </main>
  )
}
