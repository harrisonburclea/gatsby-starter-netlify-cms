import React, { Component } from 'react'
import HeroAngleImage from '../../components/HeroAngleImage';

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends Component {
  render() {
    return (
      <Layout>
        <HeroAngleImage />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
