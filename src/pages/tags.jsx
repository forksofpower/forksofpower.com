import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Link, graphql } from "gatsby";

const TagsPage = ({
    data: {
        allTags: { group },
        site: {
            siteMetadata: { title }
        }
    } 
}) => {
    return (
        <Layout>
            <SEO title={title} />
            <div>
                <h1>Tags</h1>
                <ul>
                    {group.map(tag => (
                        <li key={tag.name}>
                            <Link to={`/tags/${tag.name}/`}>
                                {tag.name} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default TagsPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allTags: allDevArticles {
            group(field: article___tags) {
                name: fieldValue,
                totalCount
            }
        }
    }
`;