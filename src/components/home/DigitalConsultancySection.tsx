import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ritz from "@/assets/images/ritz.png"
import miraculousmvp from "@/assets/images/miraculousmvp.png"
import usa_auto from "@/assets/images/usa_auto.jpg"


function CapabilityItem({ title, description }: { title: string; description: string }) {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

const cards = [
  {
    image: miraculousmvp,
    title: "Miraculous MVP",
    subtitle: "Digital Innovation Hub"
  },
  {
    image: ritz,
    title: "Ritz Hair Salon",
    subtitle: "Premium Beauty Experience"
  },
  {
    image: usa_auto,
    title: "USA Auto",
    subtitle: "Automotive Excellence"
  },

];

const DigitalConsultancySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20" id="digital-consultancy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Digital Consultancy & Digital Marketing</h2>
          <p className="text-gray-600">
            Creating superior experiences and enabling greater business impact through<br />
            strategically integrated digital and AI offerings
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
                <div className="rounded-2xl overflow-hidden h-full">
                  <img 
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].title}
                    className="w-full h-full "
                  />
                  <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {cards[currentIndex].title}<br />{cards[currentIndex].subtitle}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-8">Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <CapabilityItem
              title="Digital Product Development"
              description="From concept to launch, we create innovative digital solutions that solve real business problems. Our rapid development approach ensures quick market validation and iterative improvements."
            />
            <CapabilityItem
              title="Customer Loyalty Programs"
              description="Design and implementation of sophisticated reward systems that drive customer retention and increase lifetime value through personalized experiences and meaningful incentives."
            />
            <CapabilityItem
              title="Digital Transformation"
              description="We help businesses modernize their operations through strategic digital initiatives, custom software solutions, and integration of cutting-edge technologies."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalConsultancySection