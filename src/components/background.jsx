import React from 'react'
import Particles from './Particles';

const background = () => {
  return (
    
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Particles
        particleColors={['#ADE7FF', '#ADE7FF']}
        particleCount={500}
        particleSpread={25}
        speed={0.1}
        particleBaseSize={10}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  )
}

export default background
