'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"
import { Badge } from "./ui/badge"
import { User, MapPin, Droplet, Ruler, Weight, FileText, Calendar, Send, Menu, BackpackIcon, Cake } from 'lucide-react'
import Lottie from 'lottie-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { MouseParallax } from "react-just-parallax"
import { gradient } from '../assets'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { motion } from 'framer-motion'
import { BorderBeam } from './magicui/border-beam'
import Ripple from './magicui/ripple'
import animationData from '../components/lotties/medical4.json'
import animationData2 from '../components/lotties/medical3.json'
import { AiFillHeart } from 'react-icons/ai'



// Dummy data for charts
const healthData = [
  { name: 'Jan', weight: 70, bloodPressure: 120 },
  { name: 'Feb', weight: 72, bloodPressure: 118 },
  { name: 'Mar', weight: 71, bloodPressure: 122 },
  { name: 'Apr', weight: 73, bloodPressure: 121 },
  { name: 'May', weight: 72, bloodPressure: 119 },
  { name: 'Jun', weight: 74, bloodPressure: 120 },
]

const recoveryData = [
  { name: 'Week 1', progress: 20 },
  { name: 'Week 2', progress: 40 },
  { name: 'Week 3', progress: 60 },
  { name: 'Week 4', progress: 80 },
  { name: 'Week 5', progress: 90 },
  { name: 'Week 6', progress: 95 },
]

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


// Dummy patient data
const patientData = {
  id: '12345678',
  name: 'John Doe',
  age: 35,
  gender: 'Male',
  bloodGroup: 'O+',
  height: 175,
  weight: 70,
  location: 'New York, USA',
  occupation: 'Software Engineer',
  allergies: 'Peanuts',
  emergencyContact: '+1 234 567 8901',
}

// Dummy AI responses
const aiResponses = [
  "The patient's blood pressure has been stable over the last 6 months.",
  "Based on the recent test results, the patient's cholesterol levels have improved.",
  "I recommend scheduling a follow-up appointment in 3 months to monitor progress.",
  "The patient's BMI is within the normal range, but regular exercise is advised.",
  "No significant drug interactions were found with the current medication regimen.",
]

export default function PatientDetails() {
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [editedData, setEditedData] = useState(patientData)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [aiQuery, setAiQuery] = useState('')
  const [aiConversation, setAiConversation] = useState<string[]>([])
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [aiConversation])

  const handleSave = () => {
    toast.success('Patient details updated successfully')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedData(prev => ({ ...prev, [name]: value }))
  }

  const handleAiQuery = (e: React.FormEvent) => {
    e.preventDefault()
    setAiConversation(prev => [...prev, `You: ${aiQuery}`])
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
    setTimeout(() => {
      setAiConversation(prev => [...prev, `AI: ${randomResponse}`])
    }, 1000)
    setAiQuery('')
  }

  const parallaxRef = useRef(null)

  const SidebarContent = () => (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-[#7047eb] mb-8">Healers Healthcare</h2>
      <nav className="space-y-2">
        {[
          { name: 'Health Records', icon: FileText },
          { name: 'Doctor Dashboard', icon: User },
          { name: 'Appointments', icon: Calendar },
          { name: 'Inventory', icon: Weight },
        ].map((item, index) => (
          <React.Fragment key={item.name}>
            <Link 
              to={`/${item.name.toLowerCase().replace(' ', '-')}`} 
              className="flex items-center p-3 rounded-lg hover:bg-[#7047eb] transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5 md:mr-3" />
              <span className='md:block'>{item.name}</span>
            </Link>
            {index < 3 && <div className="h-px bg-gray-700 my-2 mx-4" />}
          </React.Fragment>
        ))}
      </nav>
    </>
  )

  if (isLoading) {
    return (

      
      <div className="flex flex-col gap-5 md:flex-row min-h-screen bg-black text-white p-8 animate-pulse">
        <div className="w-full md:w-64 bg-gray-800 h-screen" />
        <div className="flex-1 space-y-8">
          <div className="h-32 bg-gray-800 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 bg-gray-800 rounded-lg" />
            <div className="h-64 bg-gray-800 rounded-lg" />
          </div>
          <div className="h-96 bg-gray-800 rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] bg-black p-4 md:p-6">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block w-64 bg-black p-4 md:p-6 space-y-8">
        <SidebarContent />
      </div>

      <div className="flex-1 min-h-screen bg-black text-white p-8 sm:p-10">
        <Toaster />
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <a href="/health-records" className="hover:text-[#7047eb]">Health Records</a>
          <span className="mx-2">/</span>
          <span className="text-[#7047eb]">Patient Details</span>
        </div>

        <div className='relative bg-[#131313a2]  mb-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-black md:shadow-xl'>

          <Card className="bg-[#131313a2]    ">
          <div className="flex  flex-col mx-auto sm:mx-0 items-center gap-8 p-10 md:p-15 ">
            <div className='container flex flex-wrap px-0 md:justify-between'>

            <h1 className="text-5xl font-bold mb-4">{editedData.name}</h1>
            <p className="text-gray-400 text-xl mb-4">Patient ID: {id}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-5'>

            <img src={`/defaultProfilePhoto.jpg`} alt="Patient" className=" w-[30vh] sm:w-[45vh] h-[30vh] sm:h-[45vh] rounded-lg hover:scale-95 transition duration-100 mx-auto sm:mx-0" />

            <div className='flex flex-col justify-between w-full'>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-top gap-2">
                  <User className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Gender:</h4> <p className='text-white/55'>{editedData.gender}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <Cake className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Age:</h4> <p className='text-white/55'>{editedData.age}</p></span>
                </div>
                
                <div className="flex items-top gap-2 ">
                  <MapPin className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Location:</h4> <p className='text-white/55'>{editedData.location}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <Droplet className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Blood Group:</h4> <p className='text-white/55'>{editedData.bloodGroup}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <Ruler className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Height:</h4> <p className='text-white/55'>{editedData.height}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <Weight className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Weight:</h4> <p className='text-white/55'>{editedData.weight}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <BackpackIcon className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Occupation:</h4> <p className='text-white/55'>{editedData.occupation}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <Droplet className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Allergies:</h4> <p className='text-white/55'>{editedData.allergies}</p></span>
                </div>
                <div className="flex items-top gap-2">
                  <User className="h-15 w-15 text-[#7047eb]" />
                  <span><h4>Contact:</h4> <p className='text-white/55'>{editedData.emergencyContact}</p></span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ">
            <Badge variant="outline" className="bg-[#fff] text-black">Heart Rate: Normal</Badge>
            <Badge variant="outline" className="bg-[#fff] text-black">Blood Pressure: Controlled</Badge>
            <Badge variant="outline" className="bg-[#fff] text-black">Cholesterol: In Range</Badge>
            <Badge variant="outline" className="bg-[#fff] text-black">BMI: Healthy</Badge>
            {/* add more */}
            <Badge variant="outline" className="bg-[#fff] text-black">Blood Sugar: Normal</Badge>
            <Badge variant="outline" className="bg-[#fff] text-black">Oxygen Level: Normal</Badge>
            <Badge variant="outline" className="bg-[#fff] text-black">Vaccination: Completed</Badge>
            
          </div>
            </div>
            </div>
          </div>
          </Card>
          <BorderBeam size={250} duration={12} delay={9} />

        </div>


        <div className="flex justify-between items-center mb-8 sm:mb-15">
          <h2 className="text-4xl font-bold">Patient Records</h2>
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="border bg-[#7047eb] hover:bg-[#000] hover:border-[#7047eb] text-white">Edit Patient Details</Button>
            </DrawerTrigger>
            <DrawerContent className="bg-black text-white">
              <DrawerHeader>
                <DrawerTitle>Edit Patient Details</DrawerTitle>
                <DrawerDescription>Make changes to patient information here.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(editedData).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                    <Input
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="bg-black border hover:bg-transparent hover:border-[#7047eb] transition duration-200 text-white"
                    />
                  </div>
                ))}
              </div>
              <div className="p-4">
                <div className='w-full flex justify-center items-center'>
                  <Button onClick={handleSave} className="w-[30vh] border bg-[#7047eb] hover:bg-[#000] hover:border-[#7047eb] hover:text-white ">Save Changes</Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>


         {/* Medical History card */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 sm:my-32">
          <Link to={`/patient/${id}/medical-history`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-[45vh] bg-[#131313a2] border border-[#7047eb] rounded-lg flex items-center justify-center cursor-pointer p-20"
            >
                <Lottie
                animationData={defaultOptions.animationData}
        height={150}
        width={150}
      />
              <div className="text-center">
                {/* <FileText className="text-[#7047eb] w-16 h-16 mb-4 mx-auto" /> */}
                <span className="text-2xl font-semibold">Medical History</span>
              </div>
            </motion.div>
          </Link>

          {/* Test Report Card */}
          <Link to={`/patient/${id}/test-report`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-[45vh] bg-[#131313a2] border border-[#7047eb] rounded-lg flex items-center justify-center cursor-pointer p-20"
            >
                <Lottie
                animationData={defaultOptions2.animationData}
        height={50}
        width={50}
      />
              <div className="text-center">
                {/* <FileText className="text-[#7047eb] w-16 h-16 mb-4 mx-auto" /> */}
                <span className="text-2xl font-semibold">Test Reports</span>
              </div>
            </motion.div>
          </Link>
        </div>


        {/* Ai ChatBox Part */}
        <h2 className="text-4xl font-bold mb-8">Ask The AI</h2>
        <div className='grid  grid-cols-1 md:grid-cols-2 justify-between w-full gap-5 '>

          <div className="relative bg-[#131313a2] flex w-auto md:w-[70vh] mb-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-black md:shadow-xl">
          <Card className="bg-[#131313a2] w-full h-full p-1 ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] mb-4" ref={chatRef}>
              {aiConversation.map((message, index) => (
                <div key={index} className={`mb-2 ${message.startsWith('You:')
                  ? 'text-right'
                  : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.startsWith('You:')
                    ? 'bg-[#7047eb] text-white'
                    : 'bg-gray-700 text-white'}`}>
                    {message}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleAiQuery} className="relative z-3">
              <Input
                type="text"
                placeholder="Ask anything about this patient..."
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="w-full pr-12 bg-[#131313a2] border-[#7047eb] text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="absolute right-0.25 top-1/2 transform -translate-y-1/2 bg-[#7047eb] hover:bg-[#5f3cc4]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
            
          </Card>
     
      <BorderBeam size={250} duration={12} delay={9} />
      <Ripple className='z-1' />
    </div>

    <div className="relative flex w-auto md:w-[70vh] mb-12 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          
      <BorderBeam size={250} duration={12} delay={9} />
      <Ripple className='z-1' />
    </div>


        
        
        
        </div>

        
       


        {/* Parallax Section */}
        {/* <MouseParallax ref={parallaxRef} className="relative z-10">
          <div className="hidden sm:block inset-0 left-90 w-[56.625rem] opacity-10 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <img className="w-full" src={gradient} width={942} height={942} alt="" />
            </div>
          </div>
        </MouseParallax> */}

        



        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Patient Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#131313a2]  text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Health Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#7047eb" />
                    <YAxis yAxisId="right" orientation="right" stroke="#ffffff" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="weight" fill="#7047eb" />
                    <Bar yAxisId="right" dataKey="bloodPressure" fill="#ffffff" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-[#131313a2] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Recovery Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={recoveryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                    <Legend />
                    <Line type="monotone" dataKey="progress" stroke="#7047eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}