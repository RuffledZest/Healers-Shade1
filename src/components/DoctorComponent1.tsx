'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { FileText, UserCog, Calendar, Package, Plus, ChevronLeft, ChevronRight, User, MapPin, Phone, Clock, Briefcase, Search, CalendarIcon, Menu } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { MouseParallax } from "react-just-parallax"
import { Skeleton } from "./ui/skeleton"
import { gradient } from '../assets'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const specialties = [
  'NEUROSURGEON', 'UROLOGIST', 'ENT', 'GYNECOLOGIST', 'ORTHOPEDIC',
  'PEDIATRICIAN', 'GEN.PHYSICIAN', 'COSMETIC & PLASTIC SURGEON'
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function DoctorRecord() {
  const [doctors, setDoctors] = useState([
    { id: '12345678', name: 'Dr. John Doe', experience: 10, specialty: 'NEUROSURGEON', mobile: '1234567890', daysAvailable: ['Mon', 'Wed', 'Fri'], dutyStart: '09:00', dutyEnd: '17:00' },
    { id: '23456789', name: 'Dr. Jane Smith', experience: 8, specialty: 'PEDIATRICIAN', mobile: '2345678901', daysAvailable: ['Tue', 'Thu', 'Sat'], dutyStart: '10:00', dutyEnd: '18:00' },
    // Add more dummy data as needed
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({ specialty: '', days: [], search: '' })
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const generateUniqueId = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
  }

  const handleAddDoctor = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newDoctor = {
      id: generateUniqueId(),
      name: formData.get('name') as string,
      experience: parseInt(formData.get('experience') as string) || 0,
      specialty: formData.get('specialty') as string,
      mobile: formData.get('mobile') as string,
      daysAvailable: days.filter(day => formData.get(day) === 'on'),
      dutyStart: formData.get('dutyStart') as string,
      dutyEnd: formData.get('dutyEnd') as string,
    }
    setDoctors(prevDoctors => [...prevDoctors, newDoctor])
    setIsOpen(false)
  }, [])

  const handleFilter = useCallback((key: string, value: any) => {
    setFilters(prev => {
      if (key === 'days') {
        const updatedDays = prev.days.includes(value)
          ? prev.days.filter(day => day !== value)
          : [...prev.days, value]
        return { ...prev, [key]: updatedDays }
      }
      return { ...prev, [key]: value === 'all' ? '' : value }
    })
    setCurrentPage(1)
    simulateLoading()
  }, [])

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const specialtyMatch = filters.specialty === '' || doctor.specialty === filters.specialty
      const daysMatch = filters.days.length === 0 || filters.days.some(day => doctor.daysAvailable.includes(day))
      const searchMatch = filters.search === '' || 
        doctor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        doctor.id.includes(filters.search)
      return specialtyMatch && daysMatch && searchMatch
    })
  }, [doctors, filters])

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage)

  const handleItemsPerPageChange = useCallback((value: string) => {
    setItemsPerPage(value === 'all' ? filteredDoctors.length : parseInt(value))
    setCurrentPage(1)
    simulateLoading()
  }, [filteredDoctors.length])

  const paginatedDoctors = useMemo(() => {
    return filteredDoctors.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  }, [filteredDoctors, currentPage, itemsPerPage])

  useEffect(() => {
    if (paginatedDoctors.length === 0 && currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }, [paginatedDoctors, currentPage])

  const parallaxRef = useRef(null)

  const simulateLoading = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

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

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold mb-4 text-white">Doctor Dashboard</h1>
        <p className="text-gray-400 text-center lg:text-left mb-8">Manage and view detailed information about doctors, their specialties, and schedules.</p>
        
        <section className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <Select onValueChange={(value) => handleFilter('specialty', value)}>
            <SelectTrigger className="w-full md:w-[200px] bg-n-8 text-white border hover:border-[#7047eb] rounded-lg">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent className="bg-n-8 text-white border-gray-700">
              <SelectItem value="all">All Specialties</SelectItem>
              {specialties.map(specialty => (
                <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex flex-wrap items-center gap-2">
            <Label>Days:</Label>
            {days.map(day => (
              <div key={day} className="flex items-center">
                <Checkbox
                  id={day}
                  checked={filters.days.includes(day)}
                  onCheckedChange={() => handleFilter('days', day)}
                />
                <Label htmlFor={day} className="ml-1">{day}</Label>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Search className="hidden sm:block text-[#7047eb]" />
            <Input
              placeholder="Search by name or ID"
              className="w-full md:w-auto bg-transparent border hover:border-[#7047eb] text-white border-gray-700"
              onChange={(e) => handleFilter('search', e.target.value)}
            />
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="w-full md:w-auto bg-[#7047eb] border hover:bg-transparent hover:border-[#7047eb] text-white rounded-lg">
                <Plus className="h-4 w-4 mr-2" />
                Add Doctor
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black text-white border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#7047eb] mb-4">Add New Doctor</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddDoctor} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <User className="text-[#7047eb]" />
                      <Input name="name" placeholder="Name" className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="text-[#7047eb]" />
                      <Input name="experience" type="number" placeholder="Experience (years)" className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <UserCog className="text-[#7047eb]" />
                      <Select name="specialty">
                        <SelectTrigger className="w-full bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200">
                          <SelectValue placeholder="Select Specialty" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200">
                          {specialties.map(specialty => (
                            <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="text-[#7047eb]" />
                      <Input name="mobile" placeholder="Mobile No." className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label className="text-[#7047eb] mb-2 block">Days Available</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {days.map(day => (
                          <div key={day} className="flex items-center">
                            <Checkbox id={`day-${day}`} name={day} />
                            <Label htmlFor={`day-${day}`} className="ml-2">{day}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="text-[#7047eb]" />
                      <Input name="dutyStart" type="time" placeholder="Duty Start Time" className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="text-[#7047eb]" />
                      <Input name="dutyEnd" type="time" placeholder="Duty End Time" className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="text-[#7047eb]" />
                      <Input name="qualification" placeholder="Qualification" className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="text-[#7047eb]" />
                      <Input name="opdFees" type="number" placeholder="OPD Fees" className="flex-grow bg-black border hover:bg-transparent hover:border-[#7047eb] transiton duration-200" />
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full border bg-[#7047eb] hover:bg-[#000] hover:border-[#7047eb] text-white">
                  Add Doctor
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
          <div className="bg-n-8/[0.5] rounded-lg p-4 overflow-x-auto shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="border-r border-transparent rounded-lg">
                  <TableHead className="text-[#7047eb] border-r">ID</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Name</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Specialty</TableHead>
                  <TableHead className="text-[#7047eb] border-r">Days Available</TableHead>
                  <TableHead className="text-[#7047eb] ">Duty Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array(itemsPerPage).fill(0).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    </TableRow>
                  ))
                ) : (
                  paginatedDoctors.map((doctor) => (
                    <TableRow 
                      key={doctor.id} 
                      className="border-b border-transparent hover:bg-[#7047eb20] transition-colors duration-200 rounded-lg"
                    >
                      <TableCell>{doctor.id}</TableCell>
                      <TableCell>{doctor.name}</TableCell>
                      <TableCell>{doctor.specialty}</TableCell>
                      <TableCell>{doctor.daysAvailable.join(', ')}</TableCell>
                      <TableCell className='border-transparent'>{`${doctor.dutyStart} - ${doctor.dutyEnd}`}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">
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
              className="bg-black border hover:bg-transparent hover:border-[#7047eb] hover:scale-95 transition duration-300 text-white rounded-lg"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span className='text-slate-400'>Page {currentPage} of {totalPages}</span>
            <Button 
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
                simulateLoading()
              }}
              disabled={currentPage === totalPages || isLoading}
              className="bg-black border hover:bg-transparent hover:border-[#7047eb] hover:scale-95 transition duration-300 text-white rounded-lg"
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