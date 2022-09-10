import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div class="main-content">
      <h1 className="title">Fun facts about React</h1>
      <ul className="list">
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 100k stars on GitHub</li>
        <li className="list-item">Is maintained by Facebook</li>
        <li className="list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  );
}
