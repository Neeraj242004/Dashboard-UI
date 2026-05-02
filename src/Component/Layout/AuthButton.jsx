// src/components/AuthButton.jsx
import React, { useState, useEffect } from "react"

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) setIsLoggedIn(true)
  }, [])

  const handleLogin = () => {
    localStorage.setItem("token", "dummy_token")
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
  }

  return (
    <button
      onClick={isLoggedIn ? handleLogout : handleLogin}
      className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md
        ${isLoggedIn ? "bg-red-500" : "bg-green-500"} text-white`}
    >
      {isLoggedIn ? "Logout 🚪" : "Login 🔐"}
    </button>
  )
}

export default AuthButton