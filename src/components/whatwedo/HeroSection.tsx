import { motion } from "framer-motion"
import { Button } from "@/components/home/Button"
import ModalForm from '@/components/ModalForm'
import { useState } from "react"


const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <header className="hero-bg pt-32 pb-48" id="home">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* show in small screen */}
            <h1 className="text-3xl font-bold text-white mb-6 leading-tight md:hidden">
            We are Building the Next Generation Companies.
            </h1>
           
            {/* show in large screen */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight hidden md:block">
            We are Building the Next Generation Companies.
            </h1>
            <p className="text-xl text-white mb-8">
            At Naviny, our mission is to transform the marketplace by  helping start-ups <br /> and SME's be faster, better, and more scalable.
            </p>
            <Button onClick={openModal} size="lg" variant="primary">
              Partner with us
            </Button>
          </motion.div>
        </div>
        <ModalForm isOpen={isOpen} onClose={closeModal} />
      </header>
  )
}

export default HeroSection