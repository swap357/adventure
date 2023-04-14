import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ChatInterface from "~/components/ChatInterface";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adventure</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Adventure<span className="text-[hsl(280,100%,70%)]">World</span> 🏝
          </h1>

          <main className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8 justify-center">
          
            
            <p className="text-2xl font-medium text-center text-white sm:text-2xl">
              just bots, passing the butter 🧈 and the salt 🧂
            </p>
            
            <div className={`w-3/4 mx-auto bg-purple-900 dark:bg-secondary-900 rounded-lg shadow-lg p-2 chat`}>
              <ChatInterface />
            </div>
        </main>
        </div>
      </main>
    </>
  );
};

export default Home;
