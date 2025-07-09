import React from "react";

class One extends React.Component {
  render() {
    return (
      <div className="p-3 bg-white rounded shadow">
        <strong>Student Name:</strong> Anika Sharma<br />
        <strong>Grade:</strong> 10th Grade
      </div>
    );
  }
}

class Two extends React.Component {
  render() {
    return (
      <div className="p-3 bg-white rounded shadow">
        <strong>Parent Contact:</strong> 9876543210<br />
        <strong>Email:</strong> anika.sharma@email.com
      </div>
    );
  }
}

function Three() {
  return (
    <div className="p-3 bg-white rounded shadow">
      <strong>Subjects:</strong> Math, Science, English, History
    </div>
  );
}

function Four() {
  return (
    <div className="p-3 bg-white rounded shadow">
      <strong>Attendance:</strong> 94%<br />
      <strong>Status:</strong> Good
    </div>
  );
}

export default Two;
export { One, Three, Four };
