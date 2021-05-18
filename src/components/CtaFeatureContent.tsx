import React from 'react';

export default class CtaFeatureContent extends React.Component {

  render() {
    return (
      <div className="py-12 bg-primary-opaque">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Local clinics with a National Reputation</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Helping you to do a little more of what you love! PhysioDirect makes it easy for you to physically take control. Sometimes all it takes is a word of advice.</p>
            <div className="mt-5 sm:mt-8 sm:flex items-center sm:justify-center lg:justify-center">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10">Start your recovery here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
