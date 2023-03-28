import React from 'react'

import Header from '../Components/Header'
import Features from '../Components/Features'
import CoinSection from '../Components/CoinSection'
import MarketCharts from '../Components/MarketCharts'
import CallToAction from '../Components/CallToAction'
import Footer from '../Components/Footer'

function LandingPage() {
  return (
    <div>
      <Header />
      <Features />
      <CoinSection />
      <MarketCharts />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default LandingPage
