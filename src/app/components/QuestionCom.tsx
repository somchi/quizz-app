import React from "react";
import { Button } from "./ui/button";

const QuestionCom = () => {
  return (
    <div className="grid place-content-center  max-w-3xl mx-auto p-2 h-screen bg-transparent">
      <div className="md:border md:border-primary bg-card p-2 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-primary">
          Question 34
        </h1>
        <p className="mb-6 text-[0.8rem] md:text-[1rem] leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          veniam reiciendis illo impedit, saepe quasi soluta culpa, non ducimus
          laboriosam sit. Nesciunt, totam.
        </p>

        <div className="grid grid-cols-2 gap-2 ">
          {/* test options */}
          {["A", "B", "C", "D"].map((option) => (
            <div
              key={option}
              className="flex items-center gap-1  rounded-md cursor-pointer border border-primary p-1 bg-white hover:bg-theme-lightBlue transition-colors"
            >
              <span className="grid place-content-center text-[0.6rem] w-5 h-5 md:w-6 md:h-6 md:text-[1rem] p-1 rounded-full bg-primary text-white hover:bg-theme-blue font-bold select-none">
                {option}
              </span>
              <p className="text-[0.8rem] md:text-[1rem]">
                Lorem ipsum dolor consectetur adipisicing elit. Repellat sint
                excepturi praesentium.
              </p>
            </div>
          ))}
        </div>
        <div className="grid place-content-center p-2">
          <Button className="">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCom;
