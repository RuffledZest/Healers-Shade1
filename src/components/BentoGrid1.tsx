"use client";
import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { Suspense, lazy } from "react";
import ClientTweetCard from "./magicui/client-tweet-card";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled } from "@tabler/icons-react"

export async function TweetDemo() {
  return <ClientTweetCard id="1835722369819971792" className="shadow-2xl" />;
}

// import Image from "next/image";

export function BentoGridThirdDemo() {
  return (
    <>
    <p id="" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    The More You Can Do With Healers
  </p> 
    <BentoGrid className=" max-w-7xl mx-auto mt-32 md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg] z-20", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    <div className="z-10 rotate-6">

            <VelocityScroll
            text="Wait We Have More"
            default_velocity={1}
            
            className=" font-display text-center text-4xl font-bold tracking-[-0.02em] text-black/70 drop-shadow-sm dark:text-white/30 md:text-7xl md:leading-[5rem]"
          />
        </div>
    </>
  );
}


const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex opacity-65 flex-row rounded-full border border-gray-700 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 text-center flex hover:scale-90 transition duration-300 justify-center items-center rounded-full bg-gradient-to-r from-[#ffb246] to-violet-500 flex-shrink-0"><p className="text-xs text-center  px-2">View Patient</p></div>
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" ><p className="text-xs px-2">Name: Jhon Age: 28 Gender: Male ...</p></div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex opacity-65 flex-row rounded-full border border-gray-700 dark:border-white/[0.2] p-2 items-center space-x-2 w-full ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" ><p className="text-xs px-2">Name: Rune Age: 22 Gender: Female ...</p></div>
        <div className="h-6  rounded-full hover:scale-90 transition duration-300 flex justify-center items-center bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" ><p className="text-xs text-center  px-2">View Patient</p></div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex opacity-65 flex-row rounded-full border border-gray-700 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 text-center hover:scale-90 transition duration-300 flex justify-center items-center rounded-full bg-gradient-to-r from-[#ffb246] to-violet-500 flex-shrink-0"><p className="text-xs text-center  px-2">View Patient</p></div>
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" ><p className="text-xs px-2">Name: Dylan Age: 46 Gender: Male ...</p></div>
      </motion.div>
      
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const measures = [
    { name: "Blood Pressure", value: 70 },
    { name: "Cholesterol", value: 90 },
    { name: "Sugar Level", value: 40 },
    { name: "Heart Rate", value: 60 },
    { name: "BMI", value: 80 },
  ]

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-4"
    >
      {measures.map((measure, i) => (
        <motion.div
          key={`measure-${i}`}
          className="flex flex-row items-center space-x-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="w-24 text-xs">{measure.name}</div>
          <motion.div
            className={`h-4 rounded-full ${measure.value < 50 ? 'bg-yellow-400' : 'bg-green-400'}`}
            initial={{ width: 0 }}
            animate={{ width: `${measure.value}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg">
        {/* Adding the ClientTweetCard here */}
        <ClientTweetCard id="1835722369819971792" className="shadow-2xl" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
        Dr. Smith
        </p>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
        Neurosurgeon
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Available
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
        Dr. Smith
        </p>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
        Neurosurgeon
        </p>
        <p className="border border-yellow-500 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Busy
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9mZW1hbGVfaW5kaWFuX2RvY3Rvcl9pc19mZGVlZjk4NC04NDQwLTQyOWEtOGViMy1mMDIxZTJkYWRlZTNfMS5wbmc.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
        Dr. Lily
        </p>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
        Pediatrician
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Available
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-600 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500"><p className="text-green-500">You:</p> Does the patient has any past alergies?</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-gray-600 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500"><p className="text-blue-500">AI</p>
          Yes, the patient has a history of asthma. The patient is allergic to dust and pollen.
        </p>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Patient Data Management",
    description: (
      <span className="text-sm">
        Retrival of Patient Data Directly from the Canister.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Track Patient's Status",
    description: (
      <span className="text-sm">
        Monitor vital signs and health metrics in real-time.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Follow Us on Twitter",
    description: (
      <span className="text-sm">
       Get the latest updates on our Twitter handle, @Healers_Healthcare
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Live Doctor's Availability",
    description: (
      <span className="text-sm">
        Check real-time availability of specialists for consultations.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Ask The AI",
    description: (
      <span className="text-sm">
       Ask AI to summarize the patient data for you.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
