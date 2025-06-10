// import { LeaderBoard } from '../_components/LeaderBoard';
// import { ParticipantsCom } from '../_components/ParticipantsCom';
// import { SampleOptions } from '@/app/lib/constants';
// import { Question } from './Question';
import { Waiting } from './Waiting';

export const Audience = () => {
  return (
    <section className="relative z-10">
      <Waiting status="Waiting" description="Waiting for next question" />
      {/* <ParticipantsCom /> */}
      {/* <LeaderBoard /> */}
      {/* <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col px-8 w-[50vw]">
          <Question
            options={SampleOptions}
            data={{
              question:
                'Familiarity with state management tools like Redux or VueX. Experience in developing and integrating custom components with Shopify’s Polaris Design System and Shopify API.Understanding of responsive design principles and experience with CSS frameworks like Bootstrap, Tailwind CSS, or Material-UI',
              questionNumber: '1',
              answer: 'a',
              selected: '',
            }}
            selectedAble={false}
          />
        </div>
      </div> */}
    </section>
  );
};
