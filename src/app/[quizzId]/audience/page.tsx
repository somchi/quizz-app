import WaitingCom from "@/app/components/WaitingCom";
import Test from "@/app/components/Test";
import LeaderBoard from "@/app/components/LeaderBoard";
import ParticipantsCom from "@/app/components/ParticipantsCom";

const AudiencePage = () => {
  return (
    <section>
      {/* <WaitingCom type="audience" children={<Test />} /> */}
      {/* <LeaderBoard /> */}
      <ParticipantsCom />
    </section>
  );
};

export default AudiencePage;
