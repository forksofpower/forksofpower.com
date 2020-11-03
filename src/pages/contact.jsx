import React from "react"

import Layout from "../components/layout"
import tw from "twin.macro"

const IndexWrapper = tw.div`
  lg:flex lg:h-screen pt-16 lg:pt-0
`
const Paragraph = tw.p`
  text-2xl font-light mb-3
`

const IndexPage = () => (
  <Layout>
   <IndexWrapper>
     <div className="p-6 lg:w-1/2 w-full self-center">
        <p>patrickjones.pmj [at] gmail.com</p>
     </div>
   </IndexWrapper>
  </Layout>
)
