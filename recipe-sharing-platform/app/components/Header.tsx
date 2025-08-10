'use client'

import { useState } from 'react'

export default function SimpleHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">PlatePal</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Recipes</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2">
              Sign In
            </button>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 p-2"
          >
            {isMobileMenuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">Recipes</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2">
                <button className="w-full text-left py-2 text-gray-600 hover:text-gray-900">
                  Sign In
                </button>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}