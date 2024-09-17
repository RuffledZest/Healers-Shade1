import React from "react";
import Iphone15Pro from "./magicui/iphone-15-pro";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "../lib/utils";
import LetterPullup from "./magicui/letter-pullup";
import { Apple, LucideApple } from "lucide-react";
import SparklesText from "./magicui/sparkles-text";
import { motion } from 'framer-motion';



export default function MobileAppSection() {
  return (
    <>
    <p id="downloadMobileApp" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    Download Our Mobile App
  </p>
    <section className="flex justify-center items-center mb-80 mx-10 md:mx-32 ">
          
    <div className="relative flex h-[500px] md:h-[700px] lg:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#cccccb] dark:bg-[#0b0213] md:shadow-xl">
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-32 ">

    <div className="flex flex-col  justify-center">

      

  
    <SparklesText text="Healers Mobile App" className="text-center mt-10 md:mt-2 " />
  <p className="  z-10 whitespace-pre-wrap text-center self-center text-xl font-medium tracking-tighter text-black dark:text-white">
    Get the best experience on the go
  </p>
  <div className="flex justify-between gap-10 m-10 items-center ">


  <button className="z-20 relative inline-flex h-12 w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Download 
    <img src="/appleLogo.png" className="h-6 w-6 ml-2" /> 
  </span>
</button>
<button className="z-20 relative inline-flex h-12 w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Download
    <img src="/androidLogo.png" className="h-7 w-7 ml-2" /> 
  </span>
</button>
  </div>
    </div>



  
  <div className="relative  flex gap-2 mx-auto">

  <motion.div className="z-[12]"
      animate={{
        y: [0, -20, 0], // Moves up 20px and then back to the original position
      }}
      transition={{
        duration: 3, // Duration of the up and down motion
        repeat: Infinity, // Repeat indefinitely
        ease: 'easeInOut', // Smooth easing
      }}
    >
 {/* Your component goes here */}
  <Iphone15Pro
    className="size-[300px] md:size-[390px] lg:size-[390px] xl:size-[390px] 2xl:size-[390px] z-[12] "
    src="/mobileAppImg.jpg"
  />
    </motion.div>

    <motion.div className="absolute z-[11]"
      animate={{
        y: [0, -15, 0], // Moves up 20px and then back to the original position
      }}
      transition={{
        duration: 3, // Duration of the up and down motion
        repeat: Infinity, // Repeat indefinitely
        ease: 'easeInOut', // Smooth easing
      }}
    >
  <Iphone15Pro
    className="absolute rotate-[340deg] md:rotate-[320deg]  -translate-x-10 md:-translate-x-20 translate-y-5 md:translate-y-10 size-[300px] md:size-[380px] lg:size-[380px] xl:size-[380px] 2xl:size-[380px] "
    src="/mobileAppImg.jpg"
  />
    </motion.div>
  
</div>
  
  </div>
  



  <DotPattern
    className={cn(
      "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
    )}
  />
</div>
    </section>
    </>
    
  );
}