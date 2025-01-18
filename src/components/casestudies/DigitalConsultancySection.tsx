import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ritz from "@/assets/images/ritz.png"
import miraculousmvp from "@/assets/images/miraculousmvp.png"
import usa_auto from "@/assets/images/usa_auto.jpg"

const cards = [
  {
    image: miraculousmvp,
    title: "Digital Innovation Hub",
    subtitle: "for Modern Businesses",
    description: "Empowering businesses with cutting-edge digital solutions",
    bgColor: "bg-[#2C3E50]",
    textColor: "text-white",
    descriptionColor: "text-white/80"
  },
  {
    image: ritz,
    title: "Premium Beauty Experience",
    subtitle: "Platform",
    description: "Digital transformation for luxury salon services",
    bgColor: "bg-[#F5E6E8]",
    textColor: "text-gray-900",
    descriptionColor: "text-gray-700"
  },
  {
    image: usa_auto,
    title: "Automotive Excellence",
    subtitle: "Platform",
    description: "Digital solutions for automotive industry",
    bgColor: "bg-[#1A1A2E]",
    textColor: "text-white",
    descriptionColor: "text-white/80"
  }
];

export default function DigitalConsultancySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="-mt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 mt-16">
              Digital Consultancy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming businesses through innovative digital solutions and strategic consulting
            </p>
          </div>

          <div className="relative mb-20 overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[21/9] max-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`rounded-2xl overflow-hidden h-full ${cards[currentIndex].bgColor}`}>
                    <img 
                      src={cards[currentIndex].image}
                      alt={cards[currentIndex].title}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className={`text-2xl md:text-3xl font-semibold ${cards[currentIndex].textColor}`}>
                        {cards[currentIndex].title}<br />{cards[currentIndex].subtitle}
                      </h2>
                      <p className={`mt-2 ${cards[currentIndex].descriptionColor}`}>
                        {cards[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
  