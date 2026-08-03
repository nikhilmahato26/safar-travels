import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function NewsletterContact() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image with Parallax effect feeling */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Beautiful Landscape" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Get Your Travel Inspiration Straight to Your Inbox
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg mb-12 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter for exclusive promotions, luxury travel deals, and destination guides tailored just for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4"
          >
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow px-8 py-4 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold shadow-lg"
            />
            <button className="bg-luxury-gold text-white px-10 py-4 rounded-full font-semibold hover:bg-luxury-gold/90 transition-colors shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <p className="text-white font-medium text-lg">Prefer to talk?</p>
            <div className="flex gap-4">
              <a href="tel:7977348842" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-3 rounded-full transition-all border border-white/30">
                <Phone size={20} />
                <span className="font-semibold">Call Now</span>
              </a>
              <a href="https://wa.me/917977348842" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-6 py-3 rounded-full transition-all shadow-lg">
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
