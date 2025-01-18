import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import moneyloyal from "@/assets/images/moneyloyal.png"
import partnership from "@/assets/images/partnership.jpeg"

const cards = [
  {
    image: moneyloyal,
    title: "Next-Gen Rewards Program",
    subtitle: "Platform",
    description: "Revolutionizing customer loyalty and engagement",
    bgColor: "bg-[#1A1A2E]",
    textColor: "text-white",
    descriptionColor: "text-white/80"
  },
  {
    image: partnership,
    title: "Your Next Venture",
    subtitle: "Starts Here",
    description: "Partner with us to bring your innovative ideas to life",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColor: "text-white",
    descriptionColor: "text-white/90"
  }
];

export default function JointVentureStudioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-16 pb-16" id="what-we-do">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <div className="text-center mb-16 mt-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Venture Studio
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building and scaling innovative ventures that solve real-world problems
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
  
  