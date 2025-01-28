import { Button } from '@/components/home/Button'
import { useState } from 'react'
import ModalForm from '@/components/ModalForm'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <nav className="fixed w-full bg-white z-50 border-b py-2  px-4">
        <div className="container mx-auto  flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">Tarainvy</a>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm hover:text-[#0A74DA]">Home</Link>
            <Link to="/who-we-are" className="text-sm hover:text-[#0A74DA]">Who We Are</Link>
            <Link to="/what-we-do" className="text-sm hover:text-[#0A74DA]">What We Do</Link>
            <Link to="/case-studies" className="text-sm hover:text-[#0A74DA]">Case Studies</Link>
          </div>
          <Button onClick={openModal} size="sm" variant="outline">Get in touch</Button>   
        </div>
        <ModalForm isOpen={isOpen} onClose={closeModal} />
      </nav>
  )
}

export default Navbar