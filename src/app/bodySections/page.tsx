'use client'

import React from 'react'
import UnderConstructionBanner from '../utils/UnderConstructionBanner'
import Layout from './Layout'
import Hero from './Hero'
import Details from './About'
import MyExperience from './MyExperience'
import Contact from './Contact'

const Page = () => {
  return (
    <div>
      {/* <UnderConstructionBanner /> */}
      <div>
        <Layout>
          <Hero />
          <Details />
          <MyExperience />
          <Contact />
        </Layout>
      </div>
    </div>
  )
}

export default Page