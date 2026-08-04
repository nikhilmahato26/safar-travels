import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Domestic Tours', path: '/domestic' },
  { name: 'International Tours', path: '/international' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className={cn(
            "text-2xl font-heading font-bold tracking-wider",
            isScrolled ? "text-royal-blue" : "text-royal-blue" // Adjusted for the light bg hero
          )}>
            SAFAR TRAVELS <span className="text-luxury-gold">ONLINE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium hover:text-luxury-gold transition-colors",
                isScrolled ? "text-gray-700" : "text-gray-800"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search size={20} className={isScrolled ? "text-gray-700" : "text-gray-800"} />
          </button>
          <Link
            to="/contact"
            className="bg-royal-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-royal-blue/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className={isScrolled ? "text-gray-800" : "text-gray-800"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 lg:hidden flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-800 text-lg font-medium py-2 border-b border-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-royal-blue text-white px-6 py-3 rounded-full text-center font-semibold mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Your Trip
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
