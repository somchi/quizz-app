import WaitingCom from "@/app/components/WaitingCom";
import Test from "@/app/components/Test";
import LeaderBoard from "@/app/components/LeaderBoard";
import ParticipantsCom from "@/app/components/ParticipantsCom";
import QuestionCom from "@/app/components/QuestionCom";
import AnswerCom from "@/app/components/AnswerCom";

const AudiencePage = () => {
  return (
    <section className="relative z-10">
      {/* <WaitingCom type="roundToStart" /> */}
      {/* <LeaderBoard /> */}
      {/* <QuestionCom /> */}
      {/* <ParticipantsCom /> */}
      <AnswerCom
        question={"Hello People"}
        options={[
          { option: "A" },
          { option: "B" },
          { option: "C" },
          { option: "D" },
        ]}
        selectedOption={"B"}
        correctAnswer={"B"}
      />
    </section>
  );
};

export default AudiencePage;
