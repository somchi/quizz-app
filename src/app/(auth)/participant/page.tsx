import { ConnectToQuiz } from '../components/ConnectToQuiz';

export default function AuthPage() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col bg-blue-300 md:p-8 p-4 md:mx-0 mx-8 rounded-lg">
        <div className="grid gap-1">
          <h2 className="text-4xl font-semibold">Welcome to the Quiz</h2>
          <h3 className="text-xl font-semibold">
            To continue enter your details
          </h3>
        </div>
        <div className="grid gap-2 mt-4">
          <ConnectToQuiz />
        </div>
      </div>
    </main>
  );
}
