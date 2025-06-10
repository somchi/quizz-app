import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col">
        <div className="grid gap-1">
          <h2 className="text-4xl font-semibold">Welcome to the Quiz App</h2>
          <h3 className="text-xl font-semibold">
            Click either option to continue
          </h3>
        </div>
        <div className="grid">
          <Link href={''} className="rounded-md px-2 py-2 bg-[#b3b7c3]">
            For Participant
          </Link>
          <Link href="" className="rounded-md px-2 py-2 bg-white">
            For Audience
          </Link>
        </div>
      </div>
    </main>
  );
}
