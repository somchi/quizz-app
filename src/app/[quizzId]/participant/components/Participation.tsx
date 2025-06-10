import { SampleOptions } from '@/app/lib/constants';
import { Question } from '../../_components/Question';
import { Waiting } from '../../_components/Waiting';

export const Participation = () => {
  return (
    <div>
      <Question
        data={{
          question:
            'Familiarity with state management tools like Redux or VueX. Experience in developing and integrating custom components with Shopify’s Polaris Design System and Shopify API.Understanding of responsive design principles and experience with CSS frameworks like Bootstrap, Tailwind CSS, or Material-UI',
          questionNumber: '1',
          answer: '',
          selected: '',
        }}
        options={SampleOptions}
        selectedAble={true}
      />
      {/* <Waiting status="Pending" description="Waiting for quiz to start" /> */}
    </div>
  );
};
