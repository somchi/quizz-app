import React from "react";
import { Button } from "./ui/button";

const QuestionCom = () => {
  return (
    <div className="bg-card gap-3 max-w-3xl mx-auto p-6 ">
      <div className="md:border md:border-primary rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-primary">
          Question 34
        </h1>
        <p className="mb-6 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          veniam reiciendis illo impedit, saepe quasi soluta culpa, non ducimus
          laboriosam sit. Nesciunt, totam.
        </p>

        <div className="grid grid-cols-2 ">
          {/* test options */}
          {["A", "B", "C", "D"].map((option) => (
            <div
              key={option}
              className="flex  rounded-md cursor-pointer border border-primary bg-white hover:bg-theme-lightBlue transition-colors"
            >
              <span className=" flex items-center justify-center text-[0.6rem] w-5 h-5 md:w-6 md:h-6 md:text-[1rem] rounded-full bg-primary text-white hover:bg-theme-blue font-bold select-none">
                {option}
              </span>
              <p className="">
                Lorem ipsum dolor consectetur adipisicing elit. Repellat sint
                excepturi praesentium.
              </p>
            </div>
          ))}
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default QuestionCom;
