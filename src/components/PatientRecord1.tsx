'use client'

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
import { User, MapPin, Droplet, Ruler, Weight, FileText, Stethoscope, Calendar, FileSymlink, Pill, TrendingUp, Activity } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


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
    { id: 1, doctor: 'Dr. Brown', referredTo: 'Lab A', type: 'Blood Test', date: '2024-01-15' },
    { id: 2, doctor: 'Dr. Davis', referredTo: 'Lab B', type: 'X-Ray', date: '2024-02-20' },
  ],
}

export default function PatientDetails() {
  const { id } = useParams<{ id: string }>()
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(patientData)

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

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Toaster />
      <div className="mb-6 flex items-center text-sm text-gray-500">
        <a href="/health-records" className="hover:text-[#7047eb]">Health Records</a>
        <span className="mx-2">/</span>
        <span className="text-[#7047eb]">Patient Details</span>
      </div>

      <div className="flex items-center gap-8 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${editedData.name}`} />
          <AvatarFallback>{editedData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-4xl font-bold">{editedData.name}</h1>
          <p className="text-gray-400">Patient ID: {editedData.id}</p>
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

      <div className="relative mb-12">
        <Separator className="absolute w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

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

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Patient Records</h2>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="bg-[#7047eb] hover:bg-[#5f3cc4]">Edit Patient Details</Button>
          </DrawerTrigger>
          <DrawerContent className="bg-gray-900 text-white">
            <DrawerHeader>
              <DrawerTitle>Edit Patient Details</DrawerTitle>
              <DrawerDescription>Make changes to patient information here.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={editedData.name} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" name="age" type="number" value={editedData.age} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" name="gender" value={editedData.gender} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Input id="bloodGroup" name="bloodGroup" value={editedData.bloodGroup} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" name="height" type="number" value={editedData.height} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" name="weight" type="number" value={editedData.weight} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" value={editedData.location} onChange={handleInputChange} className="bg-gray-800 text-white" />
              </div>
            </div>
            <div className="p-4">
              <Button onClick={handleSave} className="w-full bg-[#7047eb] hover:bg-[#5f3cc4]">Save Changes</Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center gap-2">
              <FileText className="text-[#7047eb]" />
              Medical History
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 text-white">
            <DialogHeader>
              <DialogTitle>Medical History</DialogTitle>
              <DialogDescription>Patient's medical history records</DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[400px] pr-4">
              {editedData.medicalHistory.map((history, index) => (
                <div key={history.id} className="mb-4">
                  <h4 className="font-semibold text-[#7047eb]">Event {index + 1}</h4>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <Pill className="text-[#7047eb]" />
                      <span>{history.pharmacy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Stethoscope className="text-[#7047eb]" />
                      <span>{history.physician}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#7047eb]" />
                      <span>{history.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileSymlink className="text-[#7047eb]" />
                      <span>{history.prescription}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill className="text-[#7047eb]" />
                      <span>{history.remedies}</span>
                    </div>
                  </div>
                  {index < editedData.medicalHistory.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center gap-2">
              <FileText className="text-[#7047eb]" />
              Test Reports
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 text-white">
            <DialogHeader>
              <DialogTitle>Test Reports</DialogTitle>
              <DialogDescription>Patient's test report records</DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[400px] pr-4">
              {editedData.testReports.map((report, index) => (
                <div key={report.id} className="mb-4">
                  <h4 className="font-semibold text-[#7047eb]">Report {index + 1}</h4>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="text-[#7047eb]" />
                      <span>{report.doctor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileSymlink className="text-[#7047eb]" />
                      <span>{report.referredTo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="text-[#7047eb]" />
                      <span>{report.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#7047eb]" />
                      <span>{report.date}</span>
                    </div>
                  </div>
                  {index < editedData.testReports.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}