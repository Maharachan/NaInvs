import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="hero-bg border-t border-white/10 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-white block">
              Home
            </Link>
            <Link to="/who-we-are" className="text-white block">
              Who We Are
            </Link>
            <Link to="/what-we-do" className="text-white block">
              What We Do
            </Link>
          </div>
          <div className="space-y-4">
          <Link to="/case-studies" className="text-white block">
              Case Studies
            </Link>
            <Link to="/careers" className="text-white block">
              Careers
            </Link>
            
          </div>
          <div className="space-y-4">
            <p className="text-white">info@Tarainvy.com</p>
            <p className="text-white">careers@Tarainvy.com</p>
          </div>
          <div>
            <h3 className="text-white mb-4">Join our newsletter for updates</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700">Join</Button>
            </div>
            
          </div>
          
        </div>
        <p className="text-white text-center mt-12">© 2025 Tarainvy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer