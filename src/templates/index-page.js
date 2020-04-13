import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  blurb
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">

          <div className="columns">

            {/* Image */}
            <div className="column is-4">
              <PreviewCompatibleImage imageInfo={image} />
            </div>


            <div className="column">
              <div className="content">
                
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{blurb}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="section">
          <div className="tile is-ancestor">
            
            
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  blurb: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        blurb={frontmatter.blurb}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage


export const pageQuery = graphql`query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 240, quality: 64) {
           ...GatsbyImageSharpFluid
          }
        }
      }
      heading
      blurb
    }
  }
}`
