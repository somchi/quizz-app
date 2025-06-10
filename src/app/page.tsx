import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col px-8">
        <div className="grid gap-1">
          <h2 className="text-4xl font-semibold">Welcome to the Quiz App</h2>
          <h3 className="text-xl font-semibold">
            Click either option to continue
          </h3>
        </div>
        <div className="grid gap-2 mt-4">
          <Link
            href={'/participant'}
            className="rounded-md px-4 py-3 text-center bg-blue-200 font-semibold"
          >
            For Participant
          </Link>
          <Link
            href="/connect"
            className="rounded-md px-4 py-3 text-center bg-yellow-600 font-semibold"
          >
            For Audience
          </Link>
        </div>
      </div>
    </main>
  );
}
