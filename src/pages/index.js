import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import tw from "twin.macro"
import Image from "../components/image"
// import SEO from "../components/seo"
// import BlogCard from "../components/BlogCard"

const IndexWrapper = tw.div`
  lg:flex lg:h-screen pt-16 lg:pt-0
`
const P = tw.p`
  text-2xl font-light mb-3
`

const IndexPage = ({data}) => (
  <Layout>
   <IndexWrapper>
     <div className="p-6 lg:w-1/2 w-full self-center">
      <h1 className="text-pink">Hello</h1>
      <p className="text-3xl font-semibold mb-3">This is Patrick Jones.</p>
      <P>I'm a 22-year-old product designer, specialized in digital solutions. I can read and write code. I am passionate about building scalable digital solutions that can translate into great and useful user experiences. I am also enthusiastic about responsible AI and the future of the web.</P>
      <P>I co-founded and run Symbl, a technology company based in Dhaka. I make premium courses for 10 Minute School, the largest online education platform in Bangladesh. I also actively contribute and collaborate on a few pet projects.</P>
      <P>Beside code and work, I'm a film buff and a semi-bookworm. Pink Floyd is my spiritual fuel. I'm an indoor cat. And, I love black and white a bit too much.</P>
     </div>
     <div className="lg:w-1/2 w-full self-end">
      <Image />
     </div>
   </IndexWrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allDevArticles {
      edges {
        node {
          article {
            id
            path
            # cover_image
            title
            slug
            tag_list
            # flare_tag {
            #   name
            # }
            readable_publish_date
            positive_reactions_count
            comments_count
            social_image
          }
        }
      }
    }
  }
`