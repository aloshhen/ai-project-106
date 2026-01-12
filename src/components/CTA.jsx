import React from 'react'

function CTA() {
  return (
    <section className="bg-orange/10 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-6">Ready to Experience Coffee Differently?</h2>
        <p className="text-white/80 mb-8">Join our coffee ecosystem and transform your daily brew</p>
        <button className="bg-orange text-white px-8 py-4 rounded-lg hover:bg-orange/80 transition text-lg">
          Get Started Now
        </button>
      </div>
    </section>
  )
}

export default CTA