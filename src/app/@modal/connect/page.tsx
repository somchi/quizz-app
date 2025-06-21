import { ConnectAudience } from '@/app/components/ConnectAudience';
import { Modal } from '@/app/components/Modal';

const StartAudience = () => {
  return (
    <Modal
      title="Provide ID"
      description="Enter quiz Id to continue"
      back={false}
    >
      <ConnectAudience />
    </Modal>
  );
};

export default StartAudience;
