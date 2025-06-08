import React from "react";
import { Button } from "./ui/button";

const QuestionCom = () => {
  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto p-6 rounded-lg md:border md:border-primary">
      <h1 className="text-2xl font-semibold mb-4 text-primary">Question 34</h1>
      <p className="mb-6 text-text leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        veniam reiciendis illo impedit, saepe quasi soluta culpa, non ducimus
        laboriosam sit. Nesciunt, totam.
      </p>

      <div className="space-y-4">
        {/* test options */}
        {["A", "B", "C", "D"].map((option) => (
          <div
            key={option}
            className="flex items-center gap-3 p-4 rounded-md cursor-pointer border border-primary bg-white hover:bg-lightBlue transition-colors"
          >
            <div className="flex justify-center items-baseline">
              <span className="inline-flex items-center justify-center text-[0.6rem] w-5 h-5 md:w-6 md:h-6 md:text-[1rem] rounded-full bg-primary text-white font-bold select-none">
                {option}
              </span>
            </div>
            <p className="">
              Lorem ipsum dolor consectetur adipisicing elit. Repellat sint
              excepturi praesentium.
            </p>
          </div>
        ))}
      </div>
      <Button>Submit</Button>
    </div>
  );
};

export default QuestionCom;
