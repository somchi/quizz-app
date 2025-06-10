import { WaitingCom } from '../_components/WaitingCom';
import Test from '../_components/Test';
import { LeaderBoard } from '../_components/LeaderBoard';
import { ParticipantsCom } from '../_components/ParticipantsCom';
import { QuestionCom } from '../_components/QuestionCom';
import { AnswerCom } from '../_components/AnswerCom';

const AudiencePage = () => {
  return (
    <section className="relative z-10">
      {/* <WaitingCom type="roundToStart" /> */}
      {/* <LeaderBoard /> */}
      {/* <QuestionCom /> */}
      {/* <ParticipantsCom /> */}
      <AnswerCom
        question={'Hello People'}
        options={[
          { option: 'A' },
          { option: 'B' },
          { option: 'C' },
          { option: 'D' },
        ]}
        selectedOption={'B'}
        correctAnswer={'B'}
      />
    </section>
  );
};

export default AudiencePage;
