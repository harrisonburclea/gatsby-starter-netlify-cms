import React, { FunctionComponent } from 'react'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

interface AboutPageTemplateProps {
  title?: string,
  content?: string,
  contentComponent?: typeof Content,
}

export const AboutPageTemplate: FunctionComponent<AboutPageTemplateProps> = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

interface AboutPageProps {
  data: {
    markdownRemark: any
  }
}

const AboutPage: FunctionComponent<AboutPageProps> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
};

export default AboutPage
