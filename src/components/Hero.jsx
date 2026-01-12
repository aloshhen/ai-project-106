import React from 'react'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Coffee Ecosystem</h1>
        <p className="text-xl text-white/80 mb-8">Innovative coffee experience at your fingertips</p>
        <div className="space-x-4">
          <button className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange/80 transition">
            Explore Menu
          </button>
          <button className="border border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold/10 transition">
            Book Table
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero