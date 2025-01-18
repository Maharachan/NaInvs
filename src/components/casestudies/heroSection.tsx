import { motion } from "framer-motion"



const HeroSection = () => {

  return (
    <header className="hero-bg pt-32 pb-48" id="home">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl text-center font-bold text-white mb-6 leading-tight ">
              Case Studies
            </h1>
          </motion.div>
        </div>
      </header>
  )
}

export default HeroSection