"use client";
// import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Heading from "../components/Heading/Heading"

// import {Link} from "react-router-dom";
import Section from "./Section/Section";
import { gradient } from "../assets";

export function AnimatedPinDemo() {
  return (
    <>

    <div>

     <Section className="overflow-hidden" id="3dPins">
            
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="Features Out of the Blue" />
        </div>
    </Section>
    
    


    <div className="grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-4
    w-full
    pl-10
    pr-10
    ">
      <div className="absolute top-[70.25rem] left-[20.375rem] w-[56.625rem] opacity-90 mix-blend-color-dodge pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                                <img className="w-full" src={gradient} width={942} height={942} alt="" />
                            </div>
                        </div>
      
   

      
    <div className="h-[24rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut magnam provident eum voluptates cumque. Quam asperiores iure"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Health Records
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <img src="https://cdn.pixabay.com/photo/2016/06/24/02/35/ehr-1476525_960_720.png" alt="HealthRecord"/>

          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-800" /> */}
        </div>
      </PinContainer>
      
    </div>
   



   

    <div className="h-[24rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut magnam provident eum voluptates cumque. Quam asperiores iure"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Doctor Dashboard
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <img src="https://www.price2spy.com/wp-content/uploads/2023/06/Pricing-Dashboard-Hero-Image.png" alt="DoctorDashboard" className="h-88"/>

          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-800" /> */}
        </div>
      </PinContainer>
      
    </div>
 



    

    <div className="h-[24rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut magnam provident eum voluptates cumque. Quam asperiores iure"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Appointments
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <img src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-personal-doctor-appointment-2d-vector-isolated-illustration-png-image_4660145.png" alt="Appoiments"/>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-800" /> */}
        </div>
      </PinContainer>
      
    </div>
   


    

    <div className="h-[24rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut magnam provident eum voluptates cumque. Quam asperiores iure"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Inventory
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <img src="https://www.eturns.com/media/drljj503/medical-hero.png" alt="fuck you"/>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-800" /> */}
        </div>
      </PinContainer>
      
    </div>

 
      
      </div>
    </div>
    
      
    </>
  );
}
