'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type FilterType = 'All Services' | 'Gutter Cleaning' | 'Roof Cleaning' | 'Repairs';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All Services');

  const projects = [
    {
      title: 'Full Clearance',
      location: 'Manchester',
      propertyType: 'Terraced House',
      date: '2 days ago',
      category: 'Gutter Cleaning',
      badge: 'Before & After',
      badgeColor: 'bg-white',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      description: 'Complete gutter clearance with full vacuum system. Removed years of built-up debris.'
    },
    {
      title: 'Bristol Commercial',
      location: 'Bristol',
      propertyType: 'Commercial',
      date: '3 days ago',
      category: 'Roof Cleaning',
      badge: 'Result',
      badgeColor: 'bg-linear-to-r from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
      description: 'Large commercial property roof and gutter maintenance project.'
    },
    {
      title: 'Roof Clean',
      location: 'London',
      propertyType: 'Roof Clean',
      date: '4 days ago',
      category: 'Roof Cleaning',
      badge: 'Clean',
      badgeColor: 'bg-white',
      image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80',
      description: 'Professional roof cleaning service restoring tiles to original condition.'
    },
    {
      title: 'Leak Fix',
      location: 'Liverpool',
      propertyType: 'Leak Fix',
      date: '5 days ago',
      category: 'Repairs',
      badge: 'Fixed',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
      description: 'Emergency leak repair with joint resealing and clip replacement.'
    },
    {
      title: 'Maintenance',
      location: 'Sheffield',
      propertyType: 'Full Service',
      date: '1 week ago',
      category: 'Gutter Cleaning',
      badge: 'Maint.',
      badgeColor: 'bg-white',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      description: 'Scheduled maintenance service including full cleaning and inspection.'
    },
    {
      title: 'Semi-Detached',
      location: 'Manchester',
      propertyType: 'Semi-Detached',
      date: '1 week ago',
      category: 'Gutter Cleaning',
      badge: 'Done',
      badgeColor: 'bg-linear-to-r from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
      description: 'Complete gutter and downpipe cleaning for semi-detached property.'
    },
    {
      title: 'Commercial Unit',
      location: 'Birmingham',
      propertyType: 'Warehouse',
      date: '2 weeks ago',
      category: 'Gutter Cleaning',
      badge: 'Commercial',
      badgeColor: 'bg-white',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      description: 'Large warehouse gutter cleaning with high-reach access equipment.'
    },
    {
      title: 'Fascia Restoration',
      location: 'Leeds',
      propertyType: 'Detached',
      date: '2 weeks ago',
      category: 'Roof Cleaning',
      badge: 'Restored',
      badgeColor: 'bg-white',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      description: 'UPVC fascia and soffit cleaning and restoration service.'
    },
    {
      title: 'Emergency Repair',
      location: 'Newcastle',
      propertyType: 'Terraced',
      date: '3 weeks ago',
      category: 'Repairs',
      badge: 'Urgent',
      badgeColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1622401792190-c6ec84e43e33?w=600&q=80',
      description: 'Same-day emergency repair service for storm-damaged guttering.'
    }
  ];

  const filters: FilterType[] = ['All Services', 'Gutter Cleaning', 'Roof Cleaning', 'Repairs'];

  const filteredProjects = activeFilter === 'All Services' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative pt-16 lg:pt-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Work
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-4">
              See the ClearFlow difference
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl">
              Browse our latest gutter cleaning and repair projects across the UK. Tap any project to see the transformation.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                    activeFilter === filter
                      ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 lg:py-16 bg-linear-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <div className={`absolute top-4 left-4 z-20 ${project.badgeColor} ${project.badgeColor.includes('gradient') ? 'text-white' : 'text-gray-900'} px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1.5`}>
                      {project.badge === 'Before & After' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {project.badge === 'Result' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {project.badge === 'Fixed' && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {project.badge}
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl lg:text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.propertyType}</p>
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                      <span className="text-gray-500">{project.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different filter</p>
              </div>
            )}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 lg:py-16 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-lg font-semibold text-gray-700">Trustpilot</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold text-gray-700">Checkatrade</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-linear-to-r from-cyan-500 to-blue-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote today
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Bottom Navigation - Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
          <div className="grid grid-cols-4 h-16">
            <Link href="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-cyan-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/services" className="flex flex-col items-center justify-center text-gray-600 hover:text-cyan-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span className="text-xs mt-1">Services</span>
            </Link>
            <Link href="/work" className="flex flex-col items-center justify-center text-cyan-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs mt-1 font-semibold">Bookings</span>
            </Link>
            <Link href="/quote" className="flex flex-col items-center justify-center text-gray-600 hover:text-cyan-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

