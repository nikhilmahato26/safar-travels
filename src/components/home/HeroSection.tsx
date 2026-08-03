import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light-bg">
      {/* Decorative Background Map / Shapes could go here */}
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Discover Your Next <br />
              <span className="text-royal-blue relative inline-block">
                Dream Destination
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C65.5 -1.5 136.5 -1.5 198 6" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-600 text-lg mb-10 leading-relaxed"
            >
              Flights • Hotels • Visa • Passport • Domestic & International Holiday Packages. 
              We help you uncover the spark that turns every trip into a cherished story.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-royal-blue text-white px-8 py-3.5 rounded-full font-semibold hover:bg-royal-blue/90 hover:shadow-xl transition-all hover:-translate-y-1">
                Book Your Tour
              </button>
              <button className="bg-white text-royal-blue border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all">
                Explore Packages
              </button>
            </motion.div>
          </div>

          {/* Right Images (Collage matching reference) */}
          <div className="relative h-[500px] lg:h-[600px] w-full z-10 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[500px] h-full"
            >
              {/* Main Large Image (Left) */}
              <div className="absolute top-10 left-0 w-[55%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" alt="Dubai" className="w-full h-full object-cover" />
              </div>
              
              {/* Top Right Image */}
              <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10">
                <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop" alt="Thailand" className="w-full h-full object-cover" />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-12 right-[5%] w-[45%] h-[45%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-30">
                <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop" alt="Vietnam" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating Booking/Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="relative mt-16 md:mt-24 z-30 bg-white rounded-full shadow-2xl p-3 max-w-4xl mx-auto border border-gray-100 hidden md:flex items-center"
        >
          <div className="flex-1 flex items-center px-6 border-r border-gray-200">
            <MapPin className="text-luxury-gold mr-3" size={24} />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Destination</span>
              <input type="text" placeholder="Where are you going?" className="outline-none text-gray-900 font-medium bg-transparent" />
            </div>
          </div>
          <div className="flex-1 flex items-center px-6 border-r border-gray-200">
            <Calendar className="text-luxury-gold mr-3" size={24} />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Date</span>
              <input type="text" placeholder="Add dates" className="outline-none text-gray-900 font-medium bg-transparent" />
            </div>
          </div>
          <div className="flex-1 flex items-center px-6">
            <Users className="text-luxury-gold mr-3" size={24} />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">Travelers</span>
              <input type="text" placeholder="Add guests" className="outline-none text-gray-900 font-medium bg-transparent" />
            </div>
          </div>
          <button className="bg-royal-blue text-white p-4 rounded-full hover:bg-royal-blue/90 transition-colors shadow-lg hover:shadow-xl">
            <Search size={24} />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
