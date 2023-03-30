import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'

function Header() {
  return (
    <div className='bg-primary min-h-screen w-full px-6 md:min-h-0'>
      <div className='mx-auto max-w-5xl container'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Header
