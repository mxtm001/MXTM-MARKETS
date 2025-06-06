"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b relative z-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">MXTM INVESTMENTS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
