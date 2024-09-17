import React from "react";
import { useRef, useState } from "react";
import Roadmap from "./FeatureSection/Feature";
import { AnimatedPinDemo } from "./3dPinReal";
import { HeroScrollDemo } from "./ScrollHero";
import { BackgroundBoxesDemo } from "./BackgroundBoxes";
import { motion, useScroll, useTransform } from "framer-motion";
import { Features } from "./FeatureSection/Features2";
import Iphone15Pro from "./magicui/iphone-15-pro";
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import RetroGrid from "./magicui/retro-grid";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "../lib/utils";
import MobileAppSection from "./MobileAppSection";
import FAQ from "./FAQ";
import { BentoGridThirdDemo } from "./BentoGrid1";
import { TracingBeam } from "./ui/tracing-beam";
import BentoGrid2 from "./BentoGrid2";
import Footer from "./Footer/Footer";
import Features3 from "./FeatureSection/Feature3";

export const CardSpotlightEffect1 = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity1, setOpacity1] = useState(0);

    const ref = useRef(null)


    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();

  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity1(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity1(1);
    };
  
    const handleMouseEnter = () => {
      setOpacity1(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity1(1);
    };
  
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" relative max-w-full overflow-hidden rounded-xl "
      >
        

        
        <div className="pointer-events-none absolute -inset-px opacity-0 transition ease-in duration-600 -z-10"
          style={{
            opacity: opacity1,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(157, 67, 171, 0.4), transparent 50%)`,
          }}
          
          />
          <TracingBeam className="">
        {/* <Roadmap /> */}


        <div className="py-20">
        <p id="features" className="mt-16 mb-16 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    The Features Out of the Blue
  </p> 
      
        <Features3 />
    </div>
        <motion.div ref={ref} style={{ opacity }}>

        <BentoGridThirdDemo />
        </motion.div>

        {/* <AnimatedPinDemo /> */}
        {/* <HeroScrollDemo /> */}
        <p id="aboutUs" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    Your Healthcare Management Companion 
  </p> 
        
  <BentoGrid2/>
       <MobileAppSection/>


       <p id="faq" className="mt-36 mb-10 sm:mb-20 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    Frequently Asked Questions
  </p>  



  {/* faq section */}

  <FAQ/>


  

         
  
  <p id="contactUs" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    That's Healers For You
  </p>   
        <BackgroundBoxesDemo/>


      </TracingBeam>
      <Footer/>


        
        
        
      </div>
    );
  };
  