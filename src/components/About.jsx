import React from 'react'

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-12">
          <h2 className="text-3xl font-bold text-gold mb-6">How It Works</h2>
          <p className="text-white/80 mb-4">Our coffee ecosystem combines technology and passion to deliver exceptional coffee experiences.</p>
          <ul className="space-y-3 text-white/70">
            <li>✓ Browse our digital menu</li>
            <li>✓ Order with one click</li>
            <li>✓ Customize your coffee</li>
          </ul>
        </div>
        <div className="w-1/2">
          {/* Placeholder for image or illustration */}
          <div className="bg-dark/30 h-96 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
}

export default About