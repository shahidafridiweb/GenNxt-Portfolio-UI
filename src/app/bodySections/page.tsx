'use client'

import React from 'react'
import UnderConstructionBanner from '../components/UnderConstructionBanner'
import Layout from './Layout'
import Hero from './Hero'
import Details from './About'
import Projects from './Projects'
import Contact from './Contact'

const Page = () => {
  return (
    <div>
      {/* <UnderConstructionBanner /> */}
      <div>
        <Layout>
          <Hero />
          <Details />
          <Projects />
          <Contact />
        </Layout>
      </div>
    </div>
  )
}

export default Page