import React from 'react'

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-dark/50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gold">Coffee Ecosystem</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-orange">Home</a></li>
          <li><a href="#features" className="hover:text-orange">Features</a></li>
          <li><a href="#about" className="hover:text-orange">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation