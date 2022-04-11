import React from 'react'

import { Intro, About, Contact, Projects, Skills } from 'components/landing'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)
