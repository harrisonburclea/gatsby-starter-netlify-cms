import { graphql, Link, StaticQuery } from 'gatsby'
import React, { Component } from 'react'
// @ts-ignore
import github from '../img/github-icon.svg'
// @ts-ignore
import logo from '../img/logo.svg'
import { IQueryData } from '../interfaces/page-data.interface';

interface MenuItem {
  title: string;
  link: string;
}

interface State {
  active: boolean;
  navBarActiveClass: string;
}

class Navbar extends Component<IQueryData<MenuItem, 'menuItems'>, State> {
  constructor(props: IQueryData<MenuItem, 'menuItems'>) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  private toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  };

  public render() {
    return (
      <nav
        className="navbar is-transparent p-10"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container mx-auto">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }}/>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span/>
              <span/>
              <span/>
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu flex items-center justify-between ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start flex-start has-text-centered">
              {/*{this.props.data.allMarkdownRemark.menuItems.map((item) => {*/}

              {/*  return (*/}
              {/*    <Link className="navbar-item" to={item.node.link}>*/}
              {/*      {item.node.title}*/}
              {/*    </Link>*/}
              {/*  );*/}
              {/*})}*/}
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end self-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} className="h-12 w-12" alt="Github"/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;

// export default () => {
//   return (
//     <StaticQuery
//       query={graphql`
//       query MainNavQuery {
//         allMarkdownRemark(
//           filter: { frontmatter: { templateKey: { eq: "menu-item" } } }
//         ) {
//           menuItems {
//             node {
//               fields {
//                 title
//                 link
//               }
//             }
//           }
//         }
//       }
//     `}
//       // @ts-ignore
//       render={(data: IQueryData<BlogPost>['data'], count: number) => <Navbar data={data} count={count}/>}
//     />
//   )
// }
