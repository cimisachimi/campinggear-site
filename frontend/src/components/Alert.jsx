import React from "react";

const Alert = ({ message, type, onClose }) => {
  return (
    <div
      className={`alert alert-${type} fixed top-5 right-5 z-50 p-4 rounded shadow-lg`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 p-1 rounded bg-red-500 text-white"
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
