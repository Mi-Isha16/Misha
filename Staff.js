import React from "react";

class Nine extends React.Component {
  render() {
    return (
      <div className="p-3 bg-white rounded shadow">
        <strong>Staff Name:</strong> Mrs. Latha Reddy<br />
        <strong>Designation:</strong> Office Administrator
      </div>
    );
  }
}

class Ten extends React.Component {
  render() {
    return (
      <div className="p-3 bg-white rounded shadow">
        <strong>Contact:</strong> latha@schoolmail.com<br />
        <strong>Phone:</strong> 9012345678
      </div>
    );
  }
}

function Eleven() {
  return (
    <div className="p-3 bg-white rounded shadow">
      <strong>Working Hours:</strong> 9:00 AM - 5:00 PM<br />
      <strong>Department:</strong> Administration
    </div>
  );
}

function Twelve() {
  return (
    <div className="p-3 bg-white rounded shadow">
      <strong>Room:</strong> Ground Floor, Office #1<br />
      <strong>Responsibilities:</strong> Handling records, admissions, and notices
    </div>
  );
}

export default Ten;
export { Nine, Eleven, Twelve };