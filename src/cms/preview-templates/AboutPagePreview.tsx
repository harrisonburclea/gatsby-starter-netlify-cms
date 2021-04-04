import React, { FunctionComponent } from 'react'
import { AboutPageTemplate } from '../../templates/about-page'
import IPreviewProps from './interfaces/preview-props.interface';

const AboutPagePreview: FunctionComponent<IPreviewProps> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn<string>(['data', 'title'])}
    content={widgetFor('body')}
  />
);

export default AboutPagePreview
