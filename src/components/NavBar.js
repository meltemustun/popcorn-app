import React from "react";

export default function NavBar({ children }) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      {children}
    </div>
  );
}
