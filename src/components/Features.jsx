import React from 'react'

function Features() {
  const features = [
    { title: 'Premium Coffee', description: 'Carefully selected beans from around the world' },
    { title: 'Smart Ordering', description: 'Easy online menu and instant booking' },
    { title: 'Custom Experience', description: 'Personalized coffee recommendations' }
  ]

  return (
    <section id="features" className="py-20 bg-dark/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark/30 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-orange mb-4">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features