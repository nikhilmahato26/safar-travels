import { motion } from 'framer-motion'
import { Plane, Building, Map, FileText, BookOpen, Train } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Flight Booking',
    description: 'Domestic and international flight tickets with the best available deals.',
    icon: <Plane size={32} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: 'Hotel Booking',
    description: 'From budget stays to luxury resorts, find your perfect accommodation.',
    icon: <Building size={32} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: 'Holiday Packages',
    description: 'Curated domestic and international tours tailored to your preferences.',
    icon: <Map size={32} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: 'Visa Services',
    description: 'Hassle-free tourist and business visa assistance and consultation.',
    icon: <FileText size={32} strokeWidth={1.5} />,
  },
  {
    id: 5,
    title: 'Passport Assistance',
    description: 'Expert guidance for new passport applications and renewals.',
    icon: <BookOpen size={32} strokeWidth={1.5} />,
  },
  {
    id: 6,
    title: 'Train & Bus Tickets',
    description: 'Convenient booking for trains and luxury coaches across the country.',
    icon: <Train size={32} strokeWidth={1.5} />,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Complete Travel Solutions</h2>
          <p className="text-gray-600 text-lg">
            We are your one-stop travel partner. From planning your itinerary to bringing you back safely, we handle every detail so you can focus on making memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
