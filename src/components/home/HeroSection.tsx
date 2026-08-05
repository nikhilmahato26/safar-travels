import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Plane, ArrowUpDown } from 'lucide-react'

export default function HeroSection() {
  const [tripType, setTripType] = useState('One Way')
  const [from, setFrom] = useState('DEL, Delhi')
  const [to, setTo] = useState('BOM, Mumbai')
  const [departDate, setDepartDate] = useState('2026-08-04')

  const handleSwap = () => {
    setFrom(to)
    setTo(from)
  }

  const handleWhatsAppBook = () => {
    const phoneNumber = '917977348842'
    const message = `Hello, I would like to book a flight:%0A%0ATrip Type: ${tripType}%0AFrom: ${from}%0ATo: ${to}%0ADepart Date: ${departDate}`
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

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
                <img src="/images/dubai_skyline.png" alt="Dubai" className="w-full h-full object-cover" />
              </div>
              
              {/* Top Right Image */}
              <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10">
                <img src="/images/bangkok_temple.png" alt="Thailand" className="w-full h-full object-cover" />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-12 right-[5%] w-[45%] h-[45%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-30">
                <img src="/images/vietnam_golden_bridge.png" alt="Vietnam" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Flight Booking Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="relative mt-20 md:mt-24 z-30 max-w-lg mx-auto md:max-w-4xl w-full px-2 md:px-0"
        >
          {/* Top Tab - Protruding */}
          <div className="absolute -top-[52px] left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 bg-royal-blue text-white rounded-t-lg md:rounded-lg shadow-md w-[80px] h-[80px] flex flex-col items-center justify-center z-40">
            <Plane className="w-8 h-8 mb-1 stroke-[1.5]" />
            <span className="text-[13px] font-medium">Flights</span>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 md:p-8 relative z-30 pt-10 md:pt-8">
            
            {/* Trip Type Radio Buttons */}
            <div className="flex items-center gap-4 md:gap-6 mb-6 overflow-x-auto whitespace-nowrap pb-2 text-[15px] pt-2 md:pt-0">
              {['One Way', 'Round Trip', 'Multi City'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer" onClick={() => setTripType(type)}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-white transition-all ${tripType === type ? 'border-[6px] border-royal-blue shadow-sm' : 'border border-gray-300'}`}>
                  </div>
                  <span className={`font-medium ${tripType === type ? 'text-gray-900' : 'text-gray-600'}`}>{type}</span>
                </label>
              ))}
            </div>

            {/* Input Fields */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative">
              <div className="flex-1 flex flex-col relative gap-0">
                {/* From Field */}
                <div className="border border-gray-300 rounded-t-lg p-2 md:p-3 flex justify-between items-center bg-white z-10 focus-within:border-royal-blue focus-within:ring-1 focus-within:ring-royal-blue transition-all">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-medium px-1 mb-0.5">From</div>
                    <input 
                      type="text" 
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="w-full text-[15px] font-medium text-gray-900 outline-none placeholder-gray-400 bg-transparent px-1"
                      placeholder="City or Airport"
                    />
                  </div>
                  <MapPin className="text-gray-400 w-5 h-5 stroke-[2] mr-2" />
                </div>
                
                {/* Swap Button */}
                <div 
                  onClick={handleSwap}
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-50 hover:border-royal-blue transition-all md:rotate-90"
                >
                  <ArrowUpDown className="w-4 h-4 text-gray-500 stroke-[2]" />
                </div>
                
                {/* To Field */}
                <div className="border border-gray-300 border-t-0 rounded-b-lg p-2 md:p-3 flex justify-between items-center bg-white z-10 focus-within:border-royal-blue focus-within:ring-1 focus-within:ring-royal-blue transition-all">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-medium px-1 mb-0.5">To</div>
                    <input 
                      type="text" 
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="w-full text-[15px] font-medium text-gray-900 outline-none placeholder-gray-400 bg-transparent px-1"
                      placeholder="City or Airport"
                    />
                  </div>
                  <MapPin className="text-gray-400 w-5 h-5 stroke-[2] mr-2" />
                </div>
              </div>

              {/* Depart Date */}
              <div className="border border-gray-300 rounded-lg p-2 md:p-3 flex justify-between items-center flex-1 md:h-auto focus-within:border-royal-blue focus-within:ring-1 focus-within:ring-royal-blue transition-all">
                <div className="flex-1 w-full h-full">
                  <div className="text-xs text-gray-500 font-medium px-1 mb-0.5">Depart Date</div>
                  <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full text-[15px] font-medium text-gray-900 outline-none bg-transparent px-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* WhatsApp Booking Button */}
            <div className="mt-6 flex justify-center md:justify-end">
              <button 
                onClick={handleWhatsAppBook}
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3.5 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>Book via WhatsApp</span>
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
