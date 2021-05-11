import React, { Component } from 'react';
// @ts-ignore
import helpImage from '../img/physio-direct-here-to-help.jpg';

export class CtaSplitImage extends Component {
  render() {
    return (
      <div className="relative bg-gray-800 mt-10">
        <div className="h-56 bg-primary sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-primary opacity-40"></div>
          <img className="w-full h-full object-cover"
               src={helpImage}
               alt="PhysioDirect - here to help"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              We’re here to help
            </p>
            <p className="mt-3 text-lg text-gray-300">
              <span className="color-primary">PhysioDirect</span> - a leading private physiotherapy practice situated in easily accessible locations, providing
              a range of 'Hands-On' therapies including orthodox complimentary disciplines. You can be confident that
              you're safe in our hands!
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md flex items-center">
                <a href="tel:01159691528"
                   className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Call to arrange an appointment
                  <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 ml-3 h-5 w-5 text-gray-400" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
              </div>
              <span className="text-lg mt-5 ml-1 block text-white font-bold text-3x1">0115 969 1528</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
