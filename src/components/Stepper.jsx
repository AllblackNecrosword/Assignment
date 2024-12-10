import React from "react";

const Stepper = () => {
  const steps = [
    "Business Type",
    "Business Detail",
    "Authorized Representative",
    "Business Owners",
    "Company Directors",
    "Support Information",
    "Add Details",
    "Complete Registration",
  ];

  const completedSteps = 1;

  return (
    <div className="p-4 flex justify-center w-[1200px] m-auto">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="relative flex flex-col items-center text-teal-600">
            {/* Circle */}
            {/* <div className="rounded-full border-4 border-gray-300 w-4 h-4"></div> */}
            <div
              className={`rounded-full w-4 h-4 border-4 ${
                index <= completedSteps ? "border-green-500" : "border-gray-300"
              }`}
            ></div>
            <div className="absolute top-full mt-2 text-center w-32 text-sm items-center text-gray-500">
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-auto border-t-4 relative top-1.5 ${
                index < completedSteps ? "border-green-500" : "border-gray-300"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
