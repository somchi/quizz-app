"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const Question = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ["A", "B", "C", "D"];

  const handleOptionClick = ({ option }: { option: string }) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      alert(`You selected: ${selectedOption}`);
      // Add more logic here (e.g., form submit, state update, next question)
    }
  };

  return (
    <div className="grid place-content-center max-w-3xl mx-auto p-2 h-screen bg-transparent">
      <div className="md:border md:border-primary bg-card p-2 rounded-lg animate-in fade-in zoom-in duration-700">
        <h1 className="text-2xl font-semibold mb-4 text-primary">
          Question 34
        </h1>
        <p className="mb-6 text-[0.8rem] md:text-[1rem] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          veniam reiciendis illo impedit, saepe quasi soluta culpa.
        </p>

        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick({ option })}
              className={`flex items-center gap-1 rounded-md cursor-pointer border p-1 transition-colors
                ${
                  selectedOption === option
                    ? "bg-theme-lightBlue border-theme-blue"
                    : "bg-white border-primary hover:bg-theme-lightBlue"
                }`}
            >
              <span
                className={`grid place-content-center text-[0.6rem] w-5 h-5 md:w-6 md:h-6 md:text-[1rem] p-1 rounded-full font-bold select-none text-white
                  ${
                    selectedOption === option ? "bg-theme-blue" : "bg-primary"
                  }`}
              >
                {option}
              </span>
              <p className="text-[0.8rem] md:text-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>

        <div className="grid place-content-center p-2">
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`${
              !selectedOption ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
