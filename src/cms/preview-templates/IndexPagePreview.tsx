import React, { FunctionComponent } from 'react'
import { IDict } from '../../interfaces/dict.interface';
import { IndexPageTemplate } from '../../templates/index-page'
import IPreviewProps from './interfaces/preview-props.interface';

interface IndexPagePreviewProps extends IPreviewProps {
  getAsset: (image: string) => any;
}

const IndexPagePreview: FunctionComponent<IndexPagePreviewProps> = ({ entry, getAsset }) => {
  const data = entry.getIn<IDict<any>>(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
};

export default IndexPagePreview
