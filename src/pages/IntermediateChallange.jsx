import React from "react";
import Stepper from "../components/Stepper";
import Businessform from "../components/Businessform";

const IntermediateChallange = () => {
  return (
    <div className="">
      {/* Stepper Container */}
      <div className="py-4">
        <Stepper />
      </div>
      {/* Form Container */}
      <div className="max-w-4xl m-auto mt-12 p-4">
        <Businessform />
      </div>
    </div>
  );
};

export default IntermediateChallange;
