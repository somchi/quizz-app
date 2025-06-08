import WaitingCom from "@/app/components/WaitingCom";
import Test from "@/app/components/Test";
import LeaderBoard from "@/app/components/LeaderBoard";
import ParticipantsCom from "@/app/components/ParticipantsCom";
import QuestionCom from "@/app/components/QuestionCom";

const AudiencePage = () => {
  return (
    <section className="relative z-10">
      {/* <LeaderBoard /> */}
      {/* <QuestionCom /> */}
      <ParticipantsCom />
    </section>
  );
};

export default AudiencePage;
