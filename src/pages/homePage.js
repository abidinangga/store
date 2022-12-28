import React from 'react'
import Header from 'parts/headers'
import Hero from 'parts/hero'
import Just from'parts/HomePage/JustArrived'
import BrowserRoom from'parts/HomePage/BrowseRoom'
import Client from'parts/Clients'
import Sitemap from'parts/Sitemap'
import Footer from'parts/Footer'

import UseScrollAnchor from 'helpers/hooks/useScrollAnchor'
import UseModalDOM from 'helpers/hooks/useModalDOM'

export default function homePage() {
  UseScrollAnchor()
  UseModalDOM()
  return (
      <>
      <Header theme="white" position="absolute"></Header>
      <Hero></Hero>
      <BrowserRoom></BrowserRoom>
      <Just></Just>
      <Client></Client>
      <Sitemap></Sitemap>
      <Footer></Footer>
      </>
  )
}
