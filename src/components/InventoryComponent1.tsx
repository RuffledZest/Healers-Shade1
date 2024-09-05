'use client'

import React, { useState } from 'react'
import { FileText, UserCog, Calendar, Package, Minus, Plus, Syringe, Pill, Droplet } from 'lucide-react'
import { Button } from "./ui/button"
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MouseParallax } from "react-just-parallax"
import { gradient } from '../assets'

type InventoryItem = {
  name: string
  count: number
  icon: React.ElementType
}

type InventorySection = {
  name: string
  items: InventoryItem[]
}

export default function Inventory1() {
  const [inventory, setInventory] = useState<InventorySection[]>([
    {
      name: "Medical Supplies and Consumables",
      items: [
        { name: "Masks", count: 150, icon: Package },
        { name: "Gloves", count: 150, icon: Package },
        { name: "Gowns", count: 150, icon: Package },
        { name: "Paracetamol", count: 150, icon: Pill },
        { name: "Painkiller", count: 150, icon: Pill },
        { name: "Cough Syrup", count: 150, icon: Droplet },
      ]
    },
    {
      name: "Stock For Emergency",
      items: [
        { name: "Oxygen Cylinder", count: 150, icon: Package },
        { name: "EHR Machine", count: 150, icon: Package },
        { name: "Defibrillator", count: 150, icon: Package },
      ]
    }
  ])

  const handleCountChange = (sectionIndex: number, itemIndex: number, change: number) => {
    setInventory(prevInventory => {
      const newInventory = [...prevInventory]
      newInventory[sectionIndex].items[itemIndex].count += change
      return newInventory
    })
  }

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
        <h1 className="text-3xl font-bold mb-8 text-[#7047eb]">Inventory</h1>
        
        <div className='relative'>
          <MouseParallax className="relative z-10">
            <div className="hidden sm:block inset-0 left-90 w-[56.625rem] opacity-10 mix-blend-color-dodge pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                <img className="w-full" src={gradient} width={942} height={942} alt="" />
              </div>
            </div>
          </MouseParallax>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inventory.map((section, sectionIndex) => (
              <Card key={section.name} className="bg-n-8/[0.5] rounded-lg shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#7047eb]">{section.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={item.name} className="flex items-center justify-between p-4 bg-n-8 rounded-lg">
                        <div className="flex items-center">
                          <item.icon className="h-6 w-6 mr-2 text-[#7047eb]" />
                          <span>{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            onClick={() => handleCountChange(sectionIndex, itemIndex, -1)}
                            className="bg-[#7047eb] hover:bg-[#5f3cc4] text-white rounded-full w-8 h-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{item.count}</span>
                          <Button 
                            onClick={() => handleCountChange(sectionIndex, itemIndex, 1)}
                            className="bg-[#7047eb] hover:bg-[#5f3cc4] text-white rounded-full w-8 h-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}