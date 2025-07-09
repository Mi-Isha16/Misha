import React from "react";

class Five extends React.Component {
  render() {
    return (
      <div className="p-3 bg-white rounded shadow">
        <strong>Teacher Name:</strong> Mr. Rajeev Kumar<br />
        <strong>Subject:</strong> Mathematics
      </div>
    );
  }
}

class Six extends React.Component {
  render() {
    return (
      <div className="p-3 bg-white rounded shadow">
        <strong>Qualification:</strong> M.Sc. Mathematics<br />
        <strong>Experience:</strong> 8 Years
      </div>
    );
  }
}

function Seven() {
  return (
    <div className="p-3 bg-white rounded shadow">
      <strong>Classes Taken:</strong> Grade 8, 9, and 10<br />
      <strong>Room:</strong> B-302
    </div>
  );
}

function Eight() {
  return (
    <div className="p-3 bg-white rounded shadow">
      <strong>Next Lecture:</strong> 11:30 AM<br />
      <strong>Topic:</strong> Algebra - Quadratic Equations
    </div>
  );
}

export default Six;
export { Five, Seven, Eight };