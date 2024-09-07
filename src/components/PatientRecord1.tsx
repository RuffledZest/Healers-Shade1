'use client'

import React, { useRef, useState } from 'react'
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { User, MapPin, Droplet, Ruler, Weight, FileText, Stethoscope, Calendar, FileSymlink, Pill, TrendingUp, Activity, Package, UserCog, Menu, Send } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { MouseParallax, ScrollParallax } from "react-just-parallax"
import { gradient } from '../assets'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { motion } from 'framer-motion'


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
  medicalHistory: [
    { id: 1, pharmacy: 'City Pharmacy', physician: 'Dr. Smith', event: 'Annual Checkup', prescription: 'Vitamins', remedies: 'Exercise' },
    { id: 2, pharmacy: 'Central Drugs', physician: 'Dr. Johnson', event: 'Flu Treatment', prescription: 'Antibiotics', remedies: 'Rest' },
  ],
  testReports: [
    { id: 1, doctor: 'Dr. Brown', referredTo: 'Lab A', type: 'Blood Test', date: '2024-01-15', testImage: '/sampleMedicalReport1.jpg' },
    { id: 2, doctor: 'Dr. Davis', referredTo: 'Lab B', type: 'X-Ray', date: '2024-02-20', testImage: '/sampleMedicalReport2.jpg' },
  ],
}

export default function PatientDetails() {
  const { id } = useParams<{ id: string }>()
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(patientData)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [aiQuery, setAiQuery] = useState('')

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    toast.success('Patient details updated successfully')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedData(prev => ({ ...prev, [name]: value }))
  }

  const handleAiQuery = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the query to an AI service
    toast.success(`Query sent: ${aiQuery}`)
    setAiQuery('')
  }
  const parallaxRef = useRef(null)

  const SidebarContent = () => (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-[#7047eb] mb-8">Healers Healthcare</h2>
      <nav className="space-y-2">
        {[
          { name: 'Health Records', icon: FileText },
          { name: 'Doctor Dashboard', icon: UserCog },
          { name: 'Appointments', icon: Calendar },
          { name: 'Inventory', icon: Package },
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

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] bg-n-8 p-4 md:p-6">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-n-8 p-4 md:p-6 space-y-8">
        <SidebarContent />
      </div>



    <div className="flex-1 min-h-screen bg-black text-white p-8">
        
      <Toaster />
      <div className="mb-6 flex items-center text-sm text-gray-500">
        <a href="/health-records" className="hover:text-[#7047eb]">Health Records</a>
        <span className="mx-2">/</span>
        <span className="text-[#7047eb]">Patient Details</span>
      </div>

      <div className="flex  items-center gap-8 mb-8">
        
        <Avatar className="w-32 h-32">
            <AvatarImage src={`/defaultProfilePhoto.jpg`} />
          {/* <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${editedData.name}`} /> */}
          <AvatarFallback>{editedData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className='flex  justify-between w-full'>
          <h1 className="text-4xl font-bold">{editedData.name}</h1>
          <p className="text-gray-400 text-xl">Patient ID: {id}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <div className="flex items-center gap-2">
          <User className="text-[#7047eb]" />
          <span>{editedData.age} years, {editedData.gender}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-[#7047eb]" />
          <span>{editedData.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplet className="text-[#7047eb]" />
          <span>Blood Group: {editedData.bloodGroup}</span>
        </div>
        <div className="flex items-center gap-2">
          <Ruler className="text-[#7047eb]" />
          <span>Height: {editedData.height} cm</span>
        </div>
        <div className="flex items-center gap-2">
          <Weight className="text-[#7047eb]" />
          <span>Weight: {editedData.weight} kg</span>
        </div>
      </div>

      <div className="relative  mb-12">
        <Separator className="absolute w-full" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      <div className="flex justify-between items-center mb-8">
        
        <h2 className="text-2xl font-bold">Patient Records</h2>
        
        <Drawer>
            
          <DrawerTrigger asChild>
            <Button className=" border bg-[#7047eb] hover:bg-[#000] hover:border-[#7047eb] text-white">Edit Patient Details</Button>
          </DrawerTrigger>
          <DrawerContent className="bg-black text-white">
            <DrawerHeader>
              <DrawerTitle>Edit Patient Details</DrawerTitle>
              <DrawerDescription>Make changes to patient information here.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={editedData.name} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" name="age" type="number" value={editedData.age} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" name="gender" value={editedData.gender} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Input id="bloodGroup" name="bloodGroup" value={editedData.bloodGroup} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" name="height" type="number" value={editedData.height} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" name="weight" type="number" value={editedData.weight} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" value={editedData.location} onChange={handleInputChange} className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200 text-white" />
              </div>
            </div>
            <div className="p-4">
                <div className='w-full flex justify-center items-center'>

              <Button onClick={handleSave} className="w-[30vh] border bg-[#7047eb] hover:bg-[#000] hover:border-[#7047eb] hover:text-white ">Save Changes</Button>
                </div>
            </div>
          </DrawerContent>
        </Drawer>
        
      </div>

      <div className="">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Link to={`/patient/${id}/medical-history`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-40 bg-[#131313a2] border border-[#7047eb] rounded-lg flex items-center justify-center cursor-pointer"
            >
              <div className="text-center">
                <FileText className="text-[#7047eb] w-12 h-12 mb-2 mx-auto" />
                <span className="text-xl font-semibold">Medical History</span>
              </div>
            </motion.div>
          </Link>
          <Link to={`/patient/${id}/test-report`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-40 bg-[#131313a2] border border-[#7047eb] rounded-lg flex items-center justify-center cursor-pointer"
            >
              <div className="text-center">
                <FileText className="text-[#7047eb] w-12 h-12 mb-2 mx-auto" />
                <span className="text-xl font-semibold">Test Reports</span>
              </div>
            </motion.div>
          </Link>
        </div>
        <MouseParallax ref={parallaxRef} className="relative z-10">
            <div className="hidden sm:block inset-0 left-90 w-[56.625rem] opacity-10 mix-blend-color-dodge pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                <img className="w-full" src={gradient} width={942} height={942} alt="" />
              </div>
            </div>
          </MouseParallax>
      </div>






      <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ask the AI for patient details</h2>
          <form onSubmit={handleAiQuery} className="relative">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
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
              </motion.div>
          </form>
        </section>






      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Patient Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#131313a2] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="text-[#7047eb]" />
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
                <TrendingUp className="text-[#7047eb]" />
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
        <div className="flex flex-wrap gap-2 mt-6">
          <Badge variant="outline" className="bg-[#7047eb] text-white">Heart Rate: Normal</Badge>
          <Badge variant="outline" className="bg-[#7047eb] text-white">Blood Pressure: Controlled</Badge>
          <Badge variant="outline" className="bg-[#7047eb] text-white">Cholesterol: In Range</Badge>
          <Badge variant="outline" className="bg-[#7047eb] text-white">BMI: Healthy</Badge>
        </div>
      </section>

      
    </div>
    </div>
  )
}