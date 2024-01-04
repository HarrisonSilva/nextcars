"use client"
import React, { useState } from 'react'
import { createContext } from 'react'

export const CarContext = createContext([])

export default function CarProvider({ children }) {
    const [name, setName] = useState('')
    const [index, setIndex] = useState(0)
    const [trackIndex, setTrackIndex] = useState(0)
    const hundleChange = (event) => {
    const { value } = event.target
    setName(value)
   }
const nextCar = () => {
    setIndex(index + 1)
    if (index > 3) {
        setIndex(0)
    }
}
const previourCar = () => {
    setIndex(index - 1)
    if (index === 0) {
        setIndex(4)
    }
}

const nextTrack = () => {
    setTrackIndex(trackIndex + 1)
    if (trackIndex > 11) {
        setTrackIndex(0)
    } 
}
const previourTrack = () => {
    setTrackIndex(trackIndex - 1)
    if (trackIndex === 0) {
        setTrackIndex(12)
    }
}

const selectCarStorage = () => {
    localStorage.setItem('car', index.toString())
    localStorage.setItem('name', name)
    localStorage.setItem('track', trackIndex)
    localStorage.setItem('carSelected', Math.floor(Math.random() * 12))
}

  return (
   <CarContext.Provider value={{ hundleChange, name, nextCar, previourCar, index, selectCarStorage, nextTrack, previourTrack, trackIndex }}>
    {children}
   </CarContext.Provider>
  )
}
