import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">ABC Company</h1>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-blue-500 p-4 space-y-2">
          <Link to="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
