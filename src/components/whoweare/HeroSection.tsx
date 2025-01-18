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
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Innovation Through Digital Excellence
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-xl mb-8 max-w-3xl"
          >
            At Nainvs, we empower businesses by delivering innovative digital solutions 
            and creating ventures that solve real-world problems. We turn bold ideas 
            into successful businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button onClick={openModal} size="lg" variant="primary">
              Partner with us
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <ModalForm isOpen={isOpen} onClose={closeModal} />
    </header>
  )
}

export default HeroSection