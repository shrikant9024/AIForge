"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-blue-900 font-bold py-36 text-center space-y-5">
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>I have all your answers, AI serving at its best</h1>
        <h1 className="text-rose-900">It can be :</h1>
        <div className="text-transparent bg-clip-text text-slate-900">
          <TypewriterComponent
            options={{
              strings: ["chatbot.", "photos .", "blogs.", "emails."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        generate content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="md:text-lg p-4 bg-slate-900 md:p-6 rounded-full font-semibold">
            try it out
          </Button>
        </Link>
      </div>
    </div>
  );
};
