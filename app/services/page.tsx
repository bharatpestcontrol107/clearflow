import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PHONE_NUMBER_LINK } from '../constants';

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Vacuum removal of moss, leaves, and debris.',
      details: 'Professional gutter cleaning for homes of all sizes. We use specialist vacuum equipment to safely remove all debris without making a mess. Perfect for terraced, semi-detached, and detached properties.',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
      features: ['Full vacuum cleaning', 'Downpipe check', 'Photo report', 'No mess guarantee']
    },
    {
      title: 'Commercial Cleaning',
      description: 'High-reach solutions for offices and warehouses.',
      details: 'Specialist commercial gutter cleaning services for businesses, offices, warehouses, and industrial units. We have the equipment and expertise to handle high-reach and complex roofline systems.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80',
      features: ['High-reach access', 'Minimal disruption', 'Scheduled maintenance', 'Health & safety certified']
    },
    {
      title: 'Gutter Repairs',
      description: 'Fixing leaks, clips, and alignment issues.',
      details: 'Expert gutter repair services including leak fixes, clip replacements, joint sealing, and realignment. We can repair most gutter types including UPVC, cast iron, and aluminum systems.',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      features: ['Leak detection', 'Clip & bracket replacement', 'Joint sealing', '12-month warranty']
    },
    {
      title: 'Fascia & Soffit Wash',
      description: 'Restoring the shine to your roofline plastics.',
      details: 'Professional cleaning of fascia boards, soffits, and UPVC roofline. We use eco-friendly cleaning solutions to remove dirt, algae, and stains, restoring your roofline to like-new condition.',
      icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2',
      image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80',
      features: ['Eco-friendly products', 'Stain removal', 'Algae treatment', 'UPVC restoration']
    },
    {
      title: 'Downpipe Unblocking',
      description: 'Clearing blockages to ensure proper water flow.',
      details: 'Fast and effective downpipe unblocking service. We use specialist tools to clear blockages and ensure proper drainage, preventing water damage and overflow issues.',
      icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      features: ['Same-day service', 'High-pressure clearing', 'Camera inspection', 'Flow testing']
    },
    {
      title: 'Maintenance Plans',
      description: 'Regular scheduled cleaning to prevent issues.',
      details: 'Save money with our maintenance plans. Regular gutter cleaning prevents costly repairs and water damage. Choose from quarterly, bi-annual, or annual service plans.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      features: ['Priority booking', 'Discounted rates', 'Scheduled visits', 'Annual report']
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-16 lg:pt-20 bg-linear-to-br from-cyan-500 to-blue-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Our Services
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Keep your home dry & safe.
                </h2>
                <p className="text-lg text-blue-100">
                  Professional gutter maintenance for UK homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Select a Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive gutter services to keep your property protected
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-gray-700 mb-6">{service.details}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-cyan-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose ClearFlow?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best gutter services in the UK
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-600">£5 million public liability insurance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
                <p className="text-gray-600">Thousands of happy customers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Fast response for urgent needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Guarantee</h3>
                <p className="text-gray-600">Satisfaction guaranteed or money back</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Don't see what you need?{' '}
                <a href={PHONE_NUMBER_LINK} className="text-cyan-600 font-semibold hover:underline">
                  Contact us
                </a>
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Book a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
          <div className="grid grid-cols-4 h-16">
            <Link href="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-cyan-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/services" className="flex flex-col items-center justify-center text-cyan-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span className="text-xs mt-1 font-semibold">Services</span>
            </Link>
            <Link href="/work" className="flex flex-col items-center justify-center text-gray-600 hover:text-cyan-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs mt-1">Bookings</span>
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

