"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setIsVisible(false), 500)
      return () => clearTimeout(timer)
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 30
        return Math.min(prev + increment, 99)
      })
    }, 300)

    return () => clearInterval(timer)
  }, [progress])

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setProgress(100)
    }, 2000)

    return () => clearTimeout(completeTimer)
  }, [])

  if (!isVisible) return null

  const circumference = 2 * Math.PI * 55
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br 
from-slate-900 
via-[#1c160a] 
to-black
">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Circular Progress */}
        <div className="relative w-56 h-56">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke="rgba(148, 163, 184, 0.1)"
              strokeWidth="2.5"
            />

            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            {/* Logo */}
            <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center shadow-lg shadow-amber-400/40">
              <Image
                src="/logo.png"   // 🔁 Change if needed
                alt="Company Logo"
                width={56}
                height={56}
                priority
                className="object-contain"
              />
            </div>

            {/* Percentage */}
            <div className="text-center">
              <div className="text-4xl font-bold text-white">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
