import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import ContactSimpleFourCol from '../components/contact-simple-four-col';
import { CtaSplitImage } from '../components/CtaSplitImage';
import HeroAngleImage from '../components/HeroAngleImage';
import IconFeature from '../components/IconFeature';

import Layout from '../components/Layout'
import { IDict } from '../interfaces/dict.interface';
import { IQueryMarkdownData } from '../interfaces/page-data.interface';

interface IndexPageTemplateProps {
  image: IDict<any> | string;
  title: string;
  heading: string;
  subheading: string;
  mainpitch: IDict<any>;
  description: string;
  intro: {
    blurbs: Array<{
      image: IDict<any> | string;
      text: string
    }>;
  };
}

export const IndexPageTemplate: FunctionComponent<IndexPageTemplateProps> = (
  {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  }
) => (
  <div>
    <HeroAngleImage />
    <IconFeature />
    <CtaSplitImage />
    <ContactSimpleFourCol/>
  </div>
);

const IndexPage: FunctionComponent<IQueryMarkdownData<{}>> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
};

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
