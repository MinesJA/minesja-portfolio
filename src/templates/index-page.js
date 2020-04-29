import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ItemGrid from '../components/ItemGrid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  heading,
  blurb,
  image,
  projects
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
        projects={frontmatter.projects}
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
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}, projects: {elemMatch: {}}}) {
    frontmatter {
      title
      templateKey
      heading
      image {
        childImageSharp {
         fluid(maxWidth: 240, quality: 64) {
           ...GatsbyImageSharpFluid
          }
        }
      }
      blurb
      projects {
        description
        github
        title
        url
        image {
          childImageSharp {
           fluid(maxWidth: 240, quality: 64) {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`
