import React from "react";

const StepBar = ({ status }) => {
  const steps = [
    { status: "Pending", label: "Pending" },
    { status: "Sudah Dibayar", label: "Sudah Dibayar" },
    { status: "Sedang Diproses", label: "Sedang Diproses" },
    { status: "Dalam perjalanan", label: "Dalam perjalanan" },
    { status: "Delivered", label: "Delivered" },
  ];

  const getStepProgress = (stepIndex) => {
    if (stepIndex === 0) return 0; // First step starts at 0%

    // Calculate step progress based on the index
    const stepPercentage = 100 / (steps.length - 1);
    return stepIndex * stepPercentage;
  };

  return (
    <div className="flex justify-between items-center w-full bg-gray-200 rounded-lg p-1">
      {steps.map((step, index) => (
        <div key={step.status} className="relative flex items-center">
          {/* Step Indicator */}
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center border-4 ${
              status === step.status
                ? "border-creamBase bg-darkCream"
                : "border-gray-300"
            }`}
          >
            {status === step.status && (
              <span className="text-white">{index + 1}</span>
            )}
          </div>

          {/* Step Connector */}
          {index !== steps.length - 1 && (
            <div
              className={`absolute top-0 left-6 h-0.5 w-full bg-gray-300 ${
                status === steps[index + 1].status ? "bg-darkCream" : ""
              }`}
              style={{
                width: `${getStepProgress(index)}%`,
              }}
            ></div>
          )}

          {/* Step Label */}
          <div
            className={`ml-2 text-sm ${
              status === step.status
                ? "font-bold text-blue-500"
                : "text-gray-500"
            }`}
          >
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepBar;
