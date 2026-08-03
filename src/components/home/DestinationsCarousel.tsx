import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Bangkok',
    country: 'Thailand',
    image: '/images/bangkok_temple.png',
  },
  {
    id: 2,
    name: 'Dubai',
    country: 'UAE',
    image: '/images/dubai_skyline.png',
  },
  {
    id: 3,
    name: 'Ha Long Bay',
    country: 'Vietnam',
    image: '/images/vietnam_golden_bridge.png',
  },
  {
    id: 4,
    name: 'Bali',
    country: 'Indonesia',
    image: '/images/bali_beach.png',
  },
  {
    id: 5,
    name: 'Kashmir',
    country: 'India',
    image: '/images/kashmir_valley.png',
  },
  {
    id: 6,
    name: 'Shimla',
    country: 'India',
    image: '/images/shimla_snow.png',
  }
]

export default function DestinationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps'
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">Top Destinations</h2>
            <div className="flex gap-4 items-center">
              <span className="text-royal-blue font-medium cursor-pointer border-b-2 border-royal-blue pb-1">Popular</span>
              <span className="text-gray-500 font-medium cursor-pointer hover:text-royal-blue transition-colors pb-1">Domestic</span>
              <span className="text-gray-500 font-medium cursor-pointer hover:text-royal-blue transition-colors pb-1">International</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex -ml-4">
            {destinations.map((dest) => (
              <motion.div 
                key={dest.id}
                whileHover={{ y: -10 }}
                className="embla__slide pl-4 min-w-[280px] md:min-w-[320px] lg:min-w-[400px]"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-2 text-luxury-gold mb-2">
                      <MapPin size={16} />
                      <span className="text-sm font-medium tracking-wider uppercase">{dest.country}</span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">{dest.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Explore all destinations
          </button>
        </div>
      </div>
    </section>
  )
}
