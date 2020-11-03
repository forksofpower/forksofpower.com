import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import tw from "twin.macro"
import Image from "../components/image"

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
      {/* <h1 className="text-pink">Hello</h1> */}
      {/* <p className="text-3xl font-semibold mb-3">This is Patrick Jones.</p> */}
     </div>
     <div className="lg:w-1/2 w-full self-end">
      {/* <Image /> */}
     </div>
   </IndexWrapper>
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query IndexPageQuery {
//     allDevArticles {
//       edges {
//         node {
//           article {
//             id
//             path
    
//             title
//             slug
//             tag_list
//             # flare_tag {
//             #   name
//             # }
//             readable_publish_date
//             positive_reactions_count
//             comments_count
//             social_image
//           }
//         }
//       }
//     }
//   }
// `