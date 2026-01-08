'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-gray-900">ClearFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-500 font-medium transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-cyan-500 font-medium transition">
              Services
            </Link>
            <Link href="/work" className="text-gray-700 hover:text-cyan-500 font-medium transition">
              Our Work
            </Link>
            <Link href="/quote" className="bg-linear-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="/" className="text-gray-700 hover:text-cyan-500 font-medium py-2">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-cyan-500 font-medium py-2">
              Services
            </Link>
            <Link href="/work" className="text-gray-700 hover:text-cyan-500 font-medium py-2">
              Our Work
            </Link>
            <Link href="/quote" className="bg-linear-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

