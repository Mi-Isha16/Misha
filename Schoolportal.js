import React from "react";
import Student, { One, Three, Four } from "./Student";
import Teacher, { Five, Seven, Eight } from "./Teacher";
import Staff, { Nine, Eleven, Twelve } from "./Staff";
import './App.css';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">🏫 School Info Portal</h1>
      <div className="sections-container">
        <div className="section student-section">
          <h2 className="section-title">👩‍🎓 Student Info</h2>
          <One />
          <Three />
          <Four />
          <Student />
        </div>
        <div className="section teacher-section">
          <h2 className="section-title">👨‍🏫 Teacher Info</h2>
          <Five />
          <Seven />
          <Eight />
          <Teacher />
        </div>
        <div className="section staff-section">
          <h2 className="section-title">👩‍💼 Staff Info</h2>
          <Nine />
          <Eleven />
          <Twelve />
          <Staff />
        </div>
      </div>
    </div>
  );
}

export default App;
