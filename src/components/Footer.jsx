import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark/50 py-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gold text-xl font-bold">Coffee Ecosystem</div>
        <div className="flex space-x-6 text-white/70">
          <a href="#" className="hover:text-orange">Privacy</a>
          <a href="#" className="hover:text-orange">Terms</a>
          <a href="#" className="hover:text-orange">Contact</a>
        </div>
        <div className="text-white/50">© 2024 Coffee Ecosystem</div>
      </div>
    </footer>
  )
}

export default Footer