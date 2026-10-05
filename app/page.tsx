import Image from "next/image";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">
          Ask About My Experience
        </h1>
        <p className="mt-3 text-gray-600">
          I'm an AI assistant that can answer questions
          about my resume, skills, experience, and projects.
        </p>
      </div>
     </main>
    </div>
  );
}

