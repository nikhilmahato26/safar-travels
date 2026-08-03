import { motion } from 'framer-motion'
import { Clock, CheckCircle2 } from 'lucide-react'

const packages = [
  {
    id: 1,
    title: 'Bangkok Tour Package',
    duration: '4 Nights / 5 Days',
    image: '/images/bangkok_temple.png',
    highlights: ['Bangkok City Tour', 'Safari World', 'Floating Market', 'Luxury Hotel Stay'],
    type: 'International',
  },
  {
    id: 2,
    title: 'Dubai Tour Package',
    duration: '6 Nights / 7 Days',
    image: '/images/dubai_skyline.png',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Marina Cruise', 'Museum of the Future'],
    type: 'International',
  },
  {
    id: 3,
    title: 'Vietnam Discovery',
    duration: '6 Nights / 7 Days',
    image: '/images/vietnam_golden_bridge.png',
    highlights: ['Halong Bay Cruise', 'Golden Bridge', 'Ba Na Hills', 'Hanoi City Tour'],
    type: 'International',
  },
  {
    id: 4,
    title: 'Kashmir Paradise',
    duration: '4 Nights / 5 Days',
    image: '/images/kashmir_valley.png',
    highlights: ['Srinagar & Dal Lake', 'Gulmarg Gondola', 'Sonmarg', 'Shikara Ride'],
    type: 'Domestic',
  },
  {
    id: 5,
    title: 'Shimla Manali Package',
    duration: '5 Nights / 6 Days',
    image: '/images/shimla_snow.png',
    highlights: ['Shimla & Kufri', 'Solang Valley', 'Atal Tunnel', 'Hidimba Temple'],
    type: 'Domestic',
  },
]

export default function FeaturedPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Featured Packages</h2>
            <p className="text-gray-600 text-lg">
              Explore our handpicked domestic and international holiday packages designed to offer you the ultimate luxury and comfort.
            </p>
          </div>
          <button className="hidden md:block mt-6 md:mt-0 border border-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            View All Packages
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-royal-blue shadow-sm">
                  {pkg.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-luxury-gold text-sm font-medium mb-3">
                  <Clock size={16} />
                  <span>{pkg.duration}</span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 line-clamp-1">{pkg.title}</h3>
                
                <div className="space-y-2 mb-8 flex-grow">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 size={18} className="text-royal-blue shrink-0 mt-0.5" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <div>
                    <span className="text-xs text-gray-500 block">Pricing</span>
                    <span className="text-gray-900 font-semibold text-sm">Contact for Price</span>
                  </div>
                  <button className="bg-royal-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-royal-blue/90 transition-all shadow-md hover:shadow-lg">
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
