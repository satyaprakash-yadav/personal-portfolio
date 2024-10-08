"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./text-generate-effect";
import Link from "next/link";
import { Download, MoveRight } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  const words = `Hello, I'am Satyaprakash I enjoy learning new technology & building sites & apps. My focus is Django & Next.js applications`;

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Satya Portrait"
            width={350}
            height={350}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <TextGenerateEffect
        filter={false}
        words={words}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      />

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here{" "}
          <MoveRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/resume.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full"
          download={true}
        >
          Download CV{" "}
          <Download className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/satyaprakash-yadav/"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/satyaprakash-yadav"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
