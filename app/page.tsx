import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import hero from "../public/images/hero.webp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section (like screenshot) */}
        <section className="relative h-[80vh] min-h-[600px]">
          <Image src={hero} alt="Gutter cleaning hero" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight">
                  YOUR LOCAL GUTTER CLEANING & REPAIR SERVICE
                </h1>
                <p className="mt-4 text-blue-100 text-lg md:text-xl font-medium">
                  A local, Independently owned and operated franchise
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Range Of Gutter Services */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            {/* Heading with side lines */}
            <div className="flex items-center gap-6 mb-10">
              <span className="hidden sm:block h-px bg-gray-300 flex-1" />
              <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-gray-900">
                Our Range Of Gutter Services
              </h2>
              <span className="hidden sm:block h-px bg-gray-300 flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Top row */}
              <div>
                <h3 className="text-xl font-bold mb-3">Gutter Cleaning</h3>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow">
                  <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Gutter Cleaning" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  Gutter Cleaning using the <span className="font-semibold">best, most powerful</span> gutter cleaning equipment available. Guaranteed results that no other gutter cleaning machine can keep up with. Lightweight carbon fibre poles allow us to clean gutters up-to 4 stories high, difficult gutters over conservatories.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Roof Cleaning & Moss Removal</h3>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow">
                  <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" alt="Roof Cleaning & Moss Removal" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold">Restore your roof</span> with expert roof cleaning and moss removal services. We clean moss off your roof safely using biocide treatment and low‑pressure methods. <span className="font-semibold">Eliminate moss</span>, protect your tiles, and <span className="font-semibold">improve kerb appeal</span>. Safe, effective, and no walking on your roof!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Exterior uPVC Cleaning</h3>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow">
                  <Image src="https://images.unsplash.com/photo-1508947434984-4ee00c2eba07?w=800&q=80" alt="Exterior uPVC Cleaning" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  Bring your property back to life with our <span className="font-semibold">AMAZING</span> exterior uPVC cleaning services. We can scrub up your gutters, soffits, fascias, conservatory roof, windows, doors, frames and sills using our onboard HOT, PURIFIED water to remove more dirt!
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Free Gutter Inspection</h3>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow">
                  <Image src="https://images.unsplash.com/photo-1520975913239-4ce0d0a0b2ea?w=800&q=80" alt="Free Gutter Inspection" fill className="object-cover" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Gutter Repairs</h3>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow">
                  <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" alt="Gutter Repairs" fill className="object-cover" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Gutter Installation</h3>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow">
                  <Image src="https://images.unsplash.com/photo-1502767089025-6572583495b0?w=800&q=80" alt="Gutter Installation" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Intro */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-gray-900">
              Professional Gutter Services
            </h2>
            <div className="mt-6 max-w-4xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Welcome to ClearFlow Gutter Cleaning your <span className="font-semibold">local</span> gutter cleaning and repair service. We are a hugely popular gutter maintenance company,
                known for our <span className="font-semibold">extremely high standard</span> of work at <span className="font-semibold">surprisingly low prices</span>, that beat many of our competitors. We are <span className="font-semibold">highly trained</span>
                and <span className="font-semibold">fully equipped</span>, and take pride in what we do. Due to high demand we continue to extend our <span className="font-semibold">Award Winning</span> gutter services across
                the United Kingdom. Furthermore, our franchise <span className="font-semibold">teams are local</span>, independently owned and operated.
              </p>
              <div className="flex justify-center">
                <Link href="/quote" className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-md shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
                  </svg>
                  Find Your Local Team
                </Link>
              </div>
            </div>
          </div>

          {/* Notch Divider */}
          <div className="relative h-0">
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-white" />
          </div>
        </section>

        {/* Help Cards */}
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
            <h3 className="text-center text-2xl md:text-3xl font-bold">How Can We Help You?</h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Inspect */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Inspect</h4>
                <p className="mt-3 text-center text-sm text-gray-600">Informative roof, gutter and drain inspections to see what’s happening.</p>
              </div>

              {/* Unblock */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Unblock</h4>
                <p className="mt-3 text-center text-sm text-gray-600">PROFESSIONAL gutter cleaning using powerful equipment.</p>
              </div>

              {/* Repair */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Repair</h4>
                <p className="mt-3 text-center text-sm text-gray-600">GUARANTEED gutter repairs completed by trained experts.</p>
              </div>

              {/* Clean */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h4l2 3h7a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Clean</h4>
                <p className="mt-3 text-center text-sm text-gray-600">Incredible exterior cleaning using HOT, PURIFIED water.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blue Feature Strip */}
        <section className="bg-blue-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Low Prices */}
              <div className="flex items-center md:items-start gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <div>
                  <div className="text-lg font-bold">Low-Prices</div>
                  <div className="text-sm text-blue-100">Take advantage of our comprehensive service at industry low prices.</div>
                </div>
              </div>

              {/* Top Rated Service */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-lg font-bold">Top Rated Service</div>
              </div>

              {/* Award Winning */}
              <div className="flex items-start md:items-center gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-2 4 2V5a4 4 0 10-8 0v16z" />
                </svg>
                <div>
                  <div className="text-lg font-bold">Award Winning</div>
                  <div className="text-sm text-blue-100">SME | Best Gutter Cleaning & Repair Company 2020, 2021 & 2022</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keep Your Home Safe Section */}
        <section className="bg-linear-to-br from-gray-50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Keep Your Home Dry & Safe
              </h2>
              <p className="text-lg lg:text-xl text-gray-600">
                Don't let blocked gutters damage your property. Our reliable, local experts are ready to clear your flow today.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
                <p className="text-gray-600">Same-day service available for urgent repairs and cleaning needs.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fair Pricing</h3>
                <p className="text-gray-600">Transparent quotes with no hidden fees. Get a free estimate today.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Work</h3>
                <p className="text-gray-600">100% satisfaction guarantee on all our gutter services.</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/quote" className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition transform hover:scale-105">
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional gutter maintenance for UK homes and businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Residential Cleaning',
                  desc: 'Vacuum removal of moss, leaves, and debris.',
                  icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                },
                {
                  title: 'Commercial Cleaning',
                  desc: 'High-reach solutions for offices and warehouses.',
                  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                },
                {
                  title: 'Gutter Repairs',
                  desc: 'Fixing leaks, clips, and alignment issues.',
                  icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                },
                {
                  title: 'Fascia & Soffit Wash',
                  desc: 'Restoring the shine to your roofline plastics.',
                  icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
                },
                {
                  title: 'Downpipe Unblocking',
                  desc: 'Clearing blockages to ensure proper water flow.',
                  icon: 'M19 14l-7 7m0 0l-7-7m7 7V3'
                },
                {
                  title: 'Maintenance Plans',
                  desc: 'Regular scheduled cleaning to prevent issues.',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                }
              ].map((service, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-lg hover:gap-3 transition-all">
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Work */}
        <section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Recent Work
                </h2>
                <p className="text-lg text-gray-600">
                  See the ClearFlow difference
                </p>
              </div>
              <Link href="/work" className="hidden lg:inline-flex items-center gap-2 text-cyan-600 font-semibold text-lg hover:gap-3 transition-all">
                See All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                    </svg>
                    Before & After
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                    alt="Full Clearance - Manchester"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Full Clearance</h3>
                <p className="text-gray-600">Manchester • 2 days ago</p>
              </div>
              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <div className="absolute top-4 left-4 z-20 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Result
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80"
                    alt="Commercial Project - Bristol"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Bristol Commercial</h3>
                <p className="text-gray-600">Bristol • 3 days ago</p>
              </div>
              <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <div className="absolute top-4 left-4 z-20 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Fixed
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                    alt="Leak Fix - Liverpool"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Leak Repair</h3>
                <p className="text-gray-600">Liverpool • 5 days ago</p>
              </div>
            </div>
            <div className="mt-8 text-center lg:hidden">
              <Link href="/work" className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-lg hover:gap-3 transition-all">
                See All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Brilliant job, looks brand new! The team was super professional and quick."</p>
                <p className="text-gray-600 font-semibold">- Sarah, Manchester</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Excellent service! Fixed our leak problem and cleaned everything perfectly."</p>
                <p className="text-gray-600 font-semibold">- John, Leeds</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Best gutter cleaning service we've used. Highly recommend for commercial properties."</p>
                <p className="text-gray-600 font-semibold">- Emma, Bristol</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-linear-to-r from-cyan-500 to-blue-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. Our experts are ready to help protect your property.
            </p>
            <Link href="/quote" className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition transform hover:scale-105">
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

