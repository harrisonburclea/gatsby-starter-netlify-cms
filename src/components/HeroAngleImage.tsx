import { Link } from 'gatsby';
import React from 'react';
// @ts-ignore
import heroImage from '../img/hero-image.jpg';
import { Component } from 'react';

export default class HeroAngleImage extends Component {
  render() {
    return (
      <div className="relative bg-white overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                 fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"/>
            </svg>

            <div className="relative pt-1 px-4 sm:px-6 lg:px-8" />

            <main className="mt-3 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-15 lg:mt-18 lg:px-8 xl:mt-25">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  Hands-On <span className="text-primary">Physiotherapy</span> from local experts
                </h1>
                <p
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  PhysioDirect makes it easy for you to physically take control. Sometimes all it takes is a word of advice.
                  Contact us for more information or to arrange a callback from one of our physios.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex items-center sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="book-online"
                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10">
                          Book now!
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
               src={heroImage}
               alt="" />
        </div>
      </div>
    );
  }
}
