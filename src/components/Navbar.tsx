import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass rounded-none">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="StayHub logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-semibold text-white">StayHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-primary transition-colors">
              Home
            </a>
            <a href="#homestays" className="text-white hover:text-primary transition-colors">
              Homestays
            </a>
            <a href="#reviews" className="text-white hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => navigate('/signin')}
              className="rounded-full bg-background/90 text-foreground hover:bg-background"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href="#" className="block text-white hover:text-primary transition-colors">
              Home
            </a>
            <a href="#homestays" className="block text-white hover:text-primary transition-colors">
              Homestays
            </a>
            <a href="#reviews" className="block text-white hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="block text-white hover:text-primary transition-colors">
              Contact
            </a>
            <Button 
              onClick={() => navigate('/signin')}
              className="w-full rounded-full bg-background/90 text-foreground hover:bg-background"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
