import { graphql, StaticQuery, withPrefix } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "tailwindcss/tailwind.css"
import './all.css'
import { IQueryMenuData } from '../interfaces/page-data.interface';
import useSiteMetadata from './SiteMetadata'

interface Props extends IQueryMenuData {
  children?: JSX.Element | JSX.Element[];
}

const TemplateWrapper: FunctionComponent<Props> = ({ data, children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="overflow-hidden">
      <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:type" content="business.business"/>
        <meta property="og:title" content={title}/>
        <meta property="og:url" content="/"/>
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar data={data}/>
      <div>{children}</div>
      <Footer data={data}/>
    </div>
  )
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <StaticQuery
      query={
        graphql`
          query MenuQuery {
            allMenuJson {
              nodes {
                menuItems {
                  title
                  link
                }
              }
            }
          }
        `
      }
      // @ts-ignore
      render={(data: IQueryMenuData) => <TemplateWrapper data={data} children={children} />}
    />
  )
};

export default Layout
