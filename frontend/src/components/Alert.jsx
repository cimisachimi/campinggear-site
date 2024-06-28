import React from "react";

const Alert = ({ message, type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-2/3 md:w-1/3 p-4 rounded-lg shadow-lg">
        <div className={`alert alert-${type} rounded shadow-lg p-4`}>
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-4 p-1 rounded bg-red-500 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
