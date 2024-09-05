import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { FileText, UserCog, Calendar, Package, Plus, ChevronLeft, ChevronRight, User, MapPin, Droplet, Ruler, Weight, Pill, Stethoscope, FileSymlink, FileText as FileTextIcon, Upload, Trash2, Search, CalendarIcon } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Calendar1 } from "./ui/calendar"
import { Label } from "./ui/label"
import { gradient } from '../assets'
import { MouseParallax, ScrollParallax } from "react-just-parallax"
import { addDays, format, isWithinInterval } from "date-fns"
import { DateRange } from "react-day-picker"
import { cn } from "../lib/utils"
import { Skeleton } from "./ui/skeleton"

export default function PatientHealthRecord() {
  const [patients, setPatients] = useState([
    // { id: '12345678', name: 'John Doe', age: 35, gender: 'Male', date: '2024-06-01' },
    // { id: '23456789', name: 'Jane Smith', age: 28, gender: 'Female', date: '2023-06-02' },
    { id: '45678901', name: 'Alice Brown', age: 31, gender: 'Female', date: '2024-06-04' },
    { id: '56789012', name: 'Charlie Davis', age: 45, gender: 'Male', date: '2024-06-05' },
    { id: '67890123', name: 'Eva Wilson', age: 39, gender: 'Female', date: '2024-07-06' },
    { id: '78901234', name: 'John Doe 2', age: 35, gender: 'Female', date: '2024-06-07' },
    { id: '89012345', name: 'Jane Smith', age: 28, gender: 'Female', date: '2024-07-08' },
    { id: '90123456', name: 'Bob Johnson 2', age: 42, gender: 'Male', date: '2024-06-09' },
    { id: '01234567', name: 'Alice Brown', age: 31, gender: 'Female', date: '2024-07-10' },
    { id: '12345678', name: 'Charlie' , age: 45, gender: 'Male', date: '2024-07-11' },
    { id: '23456789', name: 'Eva Wilson 2', age: 39, gender: 'Female', date: '2024-07-12' },
    { id: '34567890', name: 'Bob Johnson 3', age: 42, gender:'Male', date: '2024-06-13' },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({ gender: '', date: undefined as DateRange | undefined, search: '' })
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [medicalHistories, setMedicalHistories] = useState([{}])
  const [testReports, setTestReports] = useState([{}])
  const [isLoading, setIsLoading] = useState(false)

  const generateUniqueId = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
  }

  const handleAddPatient = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newPatient = {
      id: generateUniqueId(),
      name: formData.get('name') as string,
      age: parseInt(formData.get('age') as string) || 0,
      gender: formData.get('gender') as string,
      date: new Date().toISOString().split('T')[0],
      location: formData.get('location') as string,
      bloodGroup: formData.get('bloodGroup') as string,
      height: formData.get('height') as string,
      weight: formData.get('weight') as string,
      medicalHistories: medicalHistories.map((_, index) => ({
        pharmacy: formData.get(`pharmacy${index}`) as string,
        physician: formData.get(`physician${index}`) as string,
        event: formData.get(`event${index}`) as string,
        prescription: formData.get(`prescription${index}`) as string,
        remedies: formData.get(`remedies${index}`) as string,
      })),
      testReports: testReports.map((_, index) => ({
        doctor: formData.get(`doctor${index}`) as string,
        referredTo: formData.get(`referredTo${index}`) as string,
        type: formData.get(`type${index}`) as string,
        comments: formData.get(`comments${index}`) as string,
      })),
    }
    setPatients(prevPatients => [...prevPatients, newPatient])
    setIsOpen(false)
    setMedicalHistories([{}])
    setTestReports([{}])
  }, [medicalHistories, testReports])

  const handleFilter = useCallback((key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value === 'all' ? '' : value }))
    setCurrentPage(1)
    simulateLoading()
  }, [])

  const filteredPatients = useMemo(() => {
    return patients.filter(patient => {
      const genderMatch = filters.gender === '' || patient.gender === filters.gender
      const searchMatch = filters.search === '' || 
        patient.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        patient.id.includes(filters.search)
      let dateMatch = true
      if (filters.date?.from || filters.date?.to) {
        const patientDate = new Date(patient.date)
        if (filters.date.from && filters.date.to) {
          dateMatch = isWithinInterval(patientDate, { start: filters.date.from, end: filters.date.to })
        } else if (filters.date.from) {
          dateMatch = patientDate >= filters.date.from
        } else if (filters.date.to) {
          dateMatch = patientDate <= filters.date.to
        }
      }
      return genderMatch && dateMatch && searchMatch
    })
  }, [patients, filters])

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)

  const handleItemsPerPageChange = useCallback((value: string) => {
    setItemsPerPage(value === 'all' ? filteredPatients.length : parseInt(value))
    setCurrentPage(1)
    simulateLoading()
  }, [filteredPatients.length])

  const paginatedPatients = useMemo(() => {
    return filteredPatients.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  }, [filteredPatients, currentPage, itemsPerPage])

  useEffect(() => {
    if (paginatedPatients.length === 0 && currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }, [paginatedPatients, currentPage])

  const parallaxRef = useRef(null)

  const addMedicalHistory = useCallback(() => {
    if (medicalHistories.length < 5) {
      setMedicalHistories(prev => [...prev, {}])
    }
  }, [medicalHistories])

  const removeMedicalHistory = useCallback((index: number) => {
    setMedicalHistories(prev => {
      const newHistories = [...prev]
      newHistories.splice(index, 1)
      return newHistories
    })
  }, [])

  const addTestReport = useCallback(() => {
    if (testReports.length < 5) {
      setTestReports(prev => [...prev, {}])
    }
  }, [testReports])

  const removeTestReport = useCallback((index: number) => {
    setTestReports(prev => {
      const newReports = [...prev]
      newReports.splice(index, 1)
      return newReports
    })
  }, [])

  const simulateLoading = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-24 md:w-60 lg:w-64 bg-n-8 p-1 md:p-6 space-y-8">
        <h2 className="text-xs md:text-2xl font-bold text-[#7047eb] mb-8">Healers Healthcare</h2>
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
              <item.icon className="h-5 w-5 md:mr-3" />
              <span className='hidden md:block'>{item.name}</span>
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

          <div className="flex items-center space-x-2">
            <Search className="text-[#7047eb]" />
            <Input
              placeholder="Search by name or ID"
              className="bg-n-8 text-white border-gray-700"
              onChange={(e) => handleFilter('search', e.target.value)}
            />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !filters.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.date?.from ? (
                  filters.date.to ? (
                    <>
                      {format(filters.date.from, "LLL dd, y")} -{" "}
                      {format(filters.date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(filters.date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar1
                initialFocus
                mode="range"
                defaultMonth={filters.date?.from}
                selected={filters.date}
                onSelect={(newDate) => handleFilter('date', newDate)}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#7047eb] border hover:bg-transparent hover:border-[#7047eb] text-white rounded-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-n-8/[.95] text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
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
                        <Select name="gender">
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
                        <Select name="bloodGroup">
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
                    {medicalHistories.map((_, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold mb-3 text-[#7047eb]">Medical History {index + 1}</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Pill className="text-[#7047eb]" />
                            <Input name={`pharmacy${index}`} placeholder="Pharmacy" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Stethoscope className="text-[#7047eb]" />
                            <Input name={`physician${index}`} placeholder="Physician" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="text-[#7047eb]" />
                            <Input name={`event${index}`} placeholder="Event" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileSymlink className="text-[#7047eb]" />
                            <Input name={`prescription${index}`} placeholder="Prescription" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Pill className="text-[#7047eb]" />
                            <Input name={`remedies${index}`} placeholder="Remedies" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                        </div>
                        {index > 0 && (
                          <Button type="button" onClick={() => removeMedicalHistory(index)} className="mt-2 bg-red-500 hover:bg-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove Medical History
                          </Button>
                        )}
                      </div>
                    ))}
                    {medicalHistories.length < 5 && (
                      <Button type="button" onClick={addMedicalHistory} className="mt-2 bg-green-500 hover:bg-green-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Medical History
                      </Button>
                    )}
                    
                    {testReports.map((_, index) => (
                      <div key={index} className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 text-[#7047eb]">Test Report {index + 1}</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <UserCog className="text-[#7047eb]" />
                            <Input name={`doctor${index}`} placeholder="Doctor" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileSymlink className="text-[#7047eb]" />
                            <Input name={`referredTo${index}`} placeholder="Referred to" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileTextIcon className="text-[#7047eb]" />
                            <Input name={`type${index}`} placeholder="Type" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="text-[#7047eb]" />
                            <Input name={`comments${index}`} placeholder="Comments" className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Upload className="text-[#7047eb]" />
                            <Input name={`files${index}`} type="file" multiple className="flex-grow bg-gray-800 text-white border-gray-700" />
                          </div>
                        </div>
                        {index > 0 && (
                          <Button type="button" onClick={() => removeTestReport(index)} className="mt-2 bg-red-500 hover:bg-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove Test Report
                          </Button>
                        )}
                      </div>
                    ))}
                    {testReports.length < 5 && (
                      <Button type="button" onClick={addTestReport} className="mt-2 bg-green-500 hover:bg-green-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Test Report
                      </Button>
                    )}
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
            <div className="hidden sm:block inset-0 left-90 w-[56.625rem] opacity-10 mix-blend-color-dodge pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                <img className="w-full" src={gradient} width={942} height={942} alt="" />
              </div>
            </div>
          </MouseParallax>
          <div className="bg-n-8/[0.5] rounded-lg p-4 m-1 overflow-auto max-h-[calc(100vh-250px)] shadow-lg" style={{ scrollbarWidth: 'thin', scrollbarColor: '#7047eb65 #1f2937' }}>
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
                {isLoading ? (
                  Array(itemsPerPage).fill(0).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    </TableRow>
                  ))
                ) : (
                  paginatedPatients.map((patient) => (
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
                  ))
                )}
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
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1))
                simulateLoading()
              }}
              disabled={currentPage === 1 || isLoading}
              className="bg-[#7047eb] hover:bg-[#5f3cc4] text-white rounded-full"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button 
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
                simulateLoading()
              }}
              disabled={currentPage === totalPages || isLoading}
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