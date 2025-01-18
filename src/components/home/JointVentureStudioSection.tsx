import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import moneyloyal from "@/assets/images/moneyloyal.png"
import partnership from "@/assets/images/partnership.jpeg"

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
    image: moneyloyal,
    title: "From Concept to",
    subtitle: "Market Success"
  },
  {
    image: partnership,
    title: "Building Lasting",
    subtitle: "Strategic Partnerships"
  },
  
];

const JointVentureStudioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="joint-venture-studio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Venture Studio</h2>
          <p className="text-gray-600">
            We turn ideas into reality by incubating and launching innovative ventures,<br />
            partnering with entrepreneurs to create scalable and impactful businesses
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
                    className="w-full h-full"
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

        <div className="bg-white rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-8">Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <CapabilityItem
              title="Venture Incubation & Development"
              description="We provide comprehensive support from ideation to launch, including market validation, business planning, technical development, and go-to-market strategy execution."
            />
            <CapabilityItem
              title="Strategic Growth Partnerships"
              description="We collaborate with entrepreneurs and businesses to accelerate growth through strategic partnerships, resource optimization, and scalable business models."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JointVentureStudioSection