import React, { FunctionComponent } from 'react';

interface BasicTopHeaderProps {
  topHeader?: string;
  mainHeader?: string;
  description?: string
}

const BasicTopHeader: FunctionComponent<BasicTopHeaderProps> = ({ topHeader, mainHeader, description, children }) => {
  let topHeaderContent,
      mainHeaderContent,
      descriptionContent;

  if (topHeader) {
    topHeaderContent = (<h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">{topHeader}</h2>);
  }

  if (mainHeader) {
    mainHeaderContent = (<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">{mainHeader}</h1>);
  }

  if (description) {
    descriptionContent = (<p className="mt-6 text-xl text-white max-w-full">{description}</p>);
  }

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:py-32 sm:px-6 lg:px-8">
        {topHeaderContent}
        {mainHeaderContent}
        {descriptionContent}
        {children}
      </div>
    </div>
  )
}

export default BasicTopHeader;
