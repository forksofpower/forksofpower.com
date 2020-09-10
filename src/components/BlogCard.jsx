import React from 'react'
import { Link } from "gatsby";

// import styled from "@emotion/styled";

// import Card from './Card'
import is from "is_js"

// const BlogCardStyle = styled.div`
//   margin: -20px 0;
//   h3 {
//     margin: 0px;
//     font-size: 27px;
//     line-height: 32px;
//   }
//   h4 {
//     margin: 0;
//     font-size: 17px;
//   }
//   a {
//     color: #0a0a0a;
//   }
//   .tags {
//     font-size: 16px;
//     a {
//       margin-right: 8px;
//     }
//     text-overflow: ellipsis;
//     color: #0a0a0a;
//     overflow: hidden;
//     white-space: nowrap;
//   }
//   .article-engagement-count {
//     font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
//       'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
//       'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
//       'HelveticaNeue', 'Helvetica Neue', 'TeXGyreHerosCnBold', 'Helvetica',
//       'Tahoma', 'Geneva', 'Arial Narrow', 'Arial', sans-serif;
//     display: inline-block;
//     margin-right: 20px;
//     margin-top: 10px;
//     color: #666;
//     img {
//       height: 20px;
//       min-width: 26px;
//       vertical-align: -5px;
//       margin-right: 7px;
//     }
//     .engagement-count-number {
//       font-size: 15px;
//       font-weight: 400;
//     }
//   }
// `

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
  {/* vvvvv This is ugly and I hate it vvvvv */}
  <div class={`
    ${(!post.cover_image) ? "border-t rounded-t" : ""}
    border-r border-b border-l
    lg:border-l lg:border-t lg:border-gray-400
    border-gray-400
    bg-white
    rounded-b
    lg:rounded-tr
    lg:rounded-bl-none
    p-4 flex flex-col justify-between leading-normal 
  `}>
    {/* Article Title */}
    <div class="text-gray-900 font-bold text-xl mb-2">
      <Link to={`/article/${post.slug}`}>
        {post.title}
      </Link>
    </div>
    {/* Article Description */}
    <p class="text-gray-700 text-base mb-0">{post.description}</p>
    {/* Article Tags */}
    <ArticleCardTags tags={post.tag_list_array} />
  </div>
</div>
)
export default BlogCard
  
  // <Card padding={30}>
  //   <BlogCardStyle>
  //     <Link to={`/article/${post.slug}`}>
  //       <div className="content">
  //         <h3>{post.title}</h3>
  //       </div>
  //     </Link>
  //     <h4>
  //       <Link to="/">{post.readable_publish_date}</Link>
  //     </h4>
  //     <div className="tags">
  //       {post.tag_list_array.map((tag, key) => (
  //         <a key={key} href={`/tag/${tag}`}>
  //           <span className="tag">{`#${tag}`}</span>
  //         </a>
  //       ))}
  //     </div>
  //     <div className="article-engagement-count reactions-count">
  //       <Link to={`/article/${post.slug}`}>
  //         <img src="/assets/reactions-stack.svg" alt="Reactions" />
  //         <span
  //           id={`engagement-count-number-${post.id}`}
  //           className="engagement-count-number"
  //         >
  //           {post.positive_reactions_count}
  //         </span>
  //       </Link>
  //     </div>
  //     {post.comments_count ? (
  //       <div className="article-engagement-count comments-count">
  //         <Link to={`/article/${post.slug}`}>
  //           <img src="/assets/comments-bubble.svg" alt="chat" />
  //           <span className="engagement-count-number">
  //             {post.comments_count}
  //           </span>
  //         </Link>
  //       </div>
  //     ) : (
  //       ''
  //     )}
  //   </BlogCardStyle>
  // </Card>