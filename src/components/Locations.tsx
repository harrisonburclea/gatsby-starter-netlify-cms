import React from 'react';

export default function Locations() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Our clinics</h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl">
          See below a list of our clinics and their locations
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Mapperley Park</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">Address line 1</span>
              <span className="block">Address line 2</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Colwick</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">Address line 1</span>
              <span className="block">Address line 2</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Beeston</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">Address line 1</span>
              <span className="block">Address line 2</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Somewhere else?</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">Address line 1</span>
              <span className="block">Address line 2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
