import React from 'react'
import { Link } from "gatsby";

import styled from "@emotion/styled";

// import Card from './Card'
import is, { not } from "is_js"
import tw from 'twin.macro';

const CardBody = ({ hasImage }) => styled.div`
  ${tw`
    border-r border-b border-l
    lg:border-l lg:border-t lg:border-gray-400
    border-gray-400
    bg-white
    rounded-b
    lg:rounded-tr
    lg:rounded-bl-none
    p-4 flex flex-col justify-between leading-normal 
  `}
  ${not(hasImage) ? "border-t rounded-t" : ""}
  border-top
`

const ArticleCardImage = ({src, alt}) => (
  <div 
    class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
    style={{background: `url('${src}') no-repeat center`, backgroundSize: 'cover'}} 
    title={alt}
  />
)

const ArticleCardTags = ({tags}) => (
  is.not.empty(tags) &&
    <div class="pt-4 pb-2">
      {tags.filter(tag => is.not.empty(tag)).map(tag => (
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link to={`/tag/${tag}`}>#{tag}</Link>
        </span>
      ))}
    </div>
)

const BlogCard = ({ post }) => (
  <div class="lg:flex pb-4">
  {post.cover_image && 
  <ArticleCardImage src={post.cover_image} alt="TEST" />}
  <CardBody hasImage={post.cover_image}>
    <div class="text-gray-900 font-bold text-xl mb-2">
      <Link to={`/article/${post.slug}`}>
        {post.title}
      </Link>
    </div>
    <p class="text-gray-700 text-base mb-0">{post.description}</p>
    <ArticleCardTags tags={post.tag_list_array} />
  </CardBody>
</div>
)
export default BlogCard