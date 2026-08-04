import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-heading font-bold tracking-wider text-white">
                SAFAR TRAVELS <span className="text-luxury-gold">ONLINE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted travel partner providing complete travel solutions including flights, hotels, visas, passports, and curated domestic and international holidays.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-luxury-gold transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-luxury-gold transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-luxury-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-luxury-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Top Destinations</h4>
            <ul className="space-y-3">
              <li><Link to="/international" className="hover:text-luxury-gold transition-colors">Bangkok, Thailand</Link></li>
              <li><Link to="/international" className="hover:text-luxury-gold transition-colors">Dubai, UAE</Link></li>
              <li><Link to="/international" className="hover:text-luxury-gold transition-colors">Vietnam</Link></li>
              <li><Link to="/domestic" className="hover:text-luxury-gold transition-colors">Kashmir Valley</Link></li>
              <li><Link to="/domestic" className="hover:text-luxury-gold transition-colors">Shimla & Manali</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-luxury-gold shrink-0 mt-1" size={20} />
                <span className="text-sm">
                  Unit No. 4, Ganraj Complex,<br />
                  Dombivli East,<br />
                  Mumbai – 421201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-luxury-gold shrink-0" size={20} />
                <span className="text-sm">7977348842</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-luxury-gold shrink-0" size={20} />
                <span className="text-sm">info2021Sto@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Safar Travels Online. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
