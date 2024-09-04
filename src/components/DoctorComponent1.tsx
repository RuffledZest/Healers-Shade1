import React, { useState, useEffect, useRef } from 'react'
import { FileText, UserCog, Calendar, Package, Plus, ChevronLeft, ChevronRight, User, MapPin, Droplet, Ruler, Weight, Pill, Stethoscope, FileSymlink, FileText as FileTextIcon, Upload } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Calendar1 } from "./ui/calendar"
import { gradient } from '../assets'
import { MouseParallax, ScrollParallax } from "react-just-parallax"

export default function DoctorRecord() {
  const [patients, setPatients] = useState([
    { id: '12345678', name: 'John Doe', age: 35, gender: 'Male', date: '2023-06-01' },
    { id: '23456789', name: 'Jane Smith', age: 28, gender: 'Female', date: '2023-06-02' },
    { id: '34567890', name: 'Bob Johnson', age: 42, gender: 'Male', date: '2023-06-03' },
    { id: '45678901', name: 'Alice Brown', age: 31, gender: 'Female', date: '2023-06-04' },
    { id: '56789012', name: 'Charlie Davis', age: 45, gender: 'Male', date: '2023-06-05' },
    { id: '67890123', name: 'Eva Wilson', age: 39, gender: 'Female', date: '2023-06-06' },
    
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({ gender: '', date: '' })
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [date, setDate] = React.useState(new Date())

  const generateUniqueId = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
  }

  const handleAddPatient = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newPatient = {
      id: generateUniqueId(),
      name: formData.get('name'),
      age: parseInt(formData.get('age')),
      gender: formData.get('gender'),
      date: new Date().toISOString().split('T')[0],
      location: formData.get('location'),
      bloodGroup: formData.get('bloodGroup'),
      height: formData.get('height'),
      weight: formData.get('weight'),
      medicalHistory: {
        pharmacy: formData.get('pharmacy'),
        physician: formData.get('physician'),
        event: formData.get('event'),
        prescription: formData.get('prescription'),
        remedies: formData.get('remedies'),
      },
      testReports: {
        doctor: formData.get('doctor'),
        referredTo: formData.get('referredTo'),
        type: formData.get('type'),
        comments: formData.get('comments'),
        // File handling would typically be done separately
      },
    }
    setPatients([...patients, newPatient])
    setIsOpen(false)
  }

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value === 'all' ? '' : value }))
    setCurrentPage(1)
  }

  const filteredPatients = patients.filter(patient => 
    (filters.gender === '' || patient.gender === filters.gender) &&
    (filters.date === '' || patient.date === filters.date)
  )

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value === 'all' ? filteredPatients.length : parseInt(value))
    setCurrentPage(1)
  }

  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    if (paginatedPatients.length === 0 && currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }, [paginatedPatients, currentPage])

  const parallaxRef = useRef(null)

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-n-8 p-6 space-y-8">
        <h2 className="text-2xl font-bold text-[#7047eb] mb-8">Healers Healthcare</h2>
        <nav className="space-y-4">
          {[
            { name: 'Health Records', icon: FileText },
            { name: 'Doctor Dashboard', icon: UserCog },
            { name: 'Appointments', icon: Calendar },
            { name: 'Inventory', icon: Package },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={`/${item.name.toLowerCase().replace(' ', '-')}`} 
              className="flex items-center p-3 rounded-lg hover:bg-[#7047eb] transition-colors duration-200"
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#7047eb]">Patient Health Records</h1>
        
        <section className="flex justify-between px-4 mx-5 items-center mb-6">
          <Select onValueChange={(value) => handleFilter('gender', value)}>
            <SelectTrigger className="w-[150px] bg-n-8 text-white border hover:border-[#7047eb] rounded-full">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent className="bg-n-8 text-white border-gray-700">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilter('date', value)}>
            <SelectTrigger className="w-[150px] bg-n-8 text-white border hover:border-[#7047eb] rounded-full">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent className="text-white border-gray-700">
              <Calendar1
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </SelectContent>
          </Select>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#7047eb] border hover:bg-transparent hover:border-[#7047eb] text-white rounded-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Doctor
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-n-8/[.95] text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto "style={{ scrollbarWidth: 'thin', scrollbarColor: '#7047eb65 #1f2937' }}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#7047eb] mb-4">Add New Patient</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddPatient} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#7047eb]">General Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <User className="text-[#7047eb]" />
                        <Input name="name" placeholder="Name" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-[#7047eb]" />
                        <Input name="age" type="number" placeholder="Age" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <UserCog className="text-[#7047eb]" />
                        <Select name="gender" className="flex-grow">
                          <SelectTrigger className="w-full bg-gray-800 text-white border-gray-700">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 text-white border-gray-700">
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="text-[#7047eb]" />
                        <Input name="location" placeholder="Location" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplet className="text-[#7047eb]" />
                        <Select name="bloodGroup" className="flex-grow">
                          <SelectTrigger className="w-full bg-gray-800 text-white border-gray-700">
                            <SelectValue placeholder="Blood Group" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 text-white border-gray-700">
                            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                              <SelectItem key={group} value={group}>{group}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Ruler className="text-[#7047eb]" />
                        <Input name="height" type="number" placeholder="Height (in cms.)" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Weight className="text-[#7047eb]" />
                        <Input name="weight" type="number" placeholder="Weight (in kg.)" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#7047eb]">Medical History</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Pill className="text-[#7047eb]" />
                        <Input name="pharmacy" placeholder="Pharmacy" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Stethoscope className="text-[#7047eb]" />
                        <Input name="physician" placeholder="Physician" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-[#7047eb]" />
                        <Input name="event" placeholder="Event" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileSymlink className="text-[#7047eb]" />
                        <Input name="prescription" placeholder="Prescription" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Pill className="text-[#7047eb]" />
                        <Input name="remedies" placeholder="Remedies" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3 text-[#7047eb]">Test Reports</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <UserCog className="text-[#7047eb]" />
                        <Input name="doctor" placeholder="Doctor" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileSymlink className="text-[#7047eb]" />
                        <Input name="referredTo" placeholder="Referred to" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="text-[#7047eb]" />
                        <Input name="type" placeholder="Type" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="text-[#7047eb]" />
                        <Input name="comments" placeholder="Comments" className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Upload className="text-[#7047eb]" />
                        <Input name="files" type="file" multiple className="flex-grow bg-gray-800 text-white border-gray-700" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-[#7047eb] hover:bg-[#5f3cc4] text-white">
                  Add Patient
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </section>

        <div className='relative'>
          <MouseParallax ref={parallaxRef} className="relative z-10">
            <div className="hidden sm:block inset-0 left-90 w-[56.625rem] opacity-10 mix-blen
d-color-dodge pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                <img className="w-full" src={gradient} width={942} height={942} alt="" />
              </div>
            </div>
          </MouseParallax>
          <div className="bg-n-8/[0.5] rounded-lg p-4 m-1  overflow-auto max-h-[calc(100vh-250px)] shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#7047eb65 #1f2937' }}>
            <Table>
              <TableHeader>
                <TableRow className="border-r border-transparent rounded-lg">
                  <TableHead className="text-[#7047eb] border-r">ID</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Name</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Age</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Gender</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Date</TableHead>
                  <TableHead className="text-[#7047eb]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedPatients.map((patient) => (
                  <TableRow 
                    key={patient.id} 
                    className="border-b border-transparent hover:bg-[#7047eb20] transition-colors duration-200 rounded-lg"
                  >
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.date}</TableCell>
                    <TableCell className='border-transparent'>
                      <Link to={`/patient/${patient.id}`} className="text-[#7047eb] hover:underline">
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <span>Show</span>
            <Select onValueChange={handleItemsPerPageChange} defaultValue="10">
              <SelectTrigger className="w-[100px] bg-n-8 text-white border hover:border-[#7047eb] rounded-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-n-8 text-white border-gray-700">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
            <span>entries</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-[#7047eb] hover:bg-[#5f3cc4] text-white rounded-full"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-[#7047eb] hover:bg-[#5f3cc4] text-white rounded-full"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}