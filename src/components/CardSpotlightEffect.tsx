import React from "react";
import { useRef, useState } from "react";
import Roadmap from "./FeatureSection/Feature";
import { AnimatedPinDemo } from "./3dPinReal";
import { HeroScrollDemo } from "./ScrollHero";
import { BackgroundBoxesDemo } from "./BackgroundBoxes";
import { motion } from "framer-motion";
import { Features } from "./FeatureSection/Features2";

export const CardSpotlightEffect1 = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(1);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(1);
    };
  
    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" relative max-w-full overflow-hidden rounded-xl  px- py "
      >
        
        <div
          
          className="pointer-events-none absolute -inset-px opacity-0 transition ease-in duration-600 -z-10"
          style={{
            opacity,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(157, 67, 171, 0.4), transparent 50%)`,
          }}
          
        />
        {/* <Roadmap /> */}
        <Features />
        <AnimatedPinDemo />
        <HeroScrollDemo />
        <BackgroundBoxesDemo/>


        
        
        
      </div>
    );
  };
  