import React, { FunctionComponent } from 'react'
import { IDict } from '../../interfaces/dict.interface';
import { ProductPageTemplate } from '../../templates/product-page'
import IPreviewProps from './interfaces/preview-props.interface';

const ProductPagePreview: FunctionComponent<IPreviewProps> = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn<IDict<any>>(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryTestimonials = entry.getIn<IDict<any>>(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entryPricingPlans = entry.getIn<IDict<any>>(['data', 'pricing', 'plans']);
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

  return (
    <ProductPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
    />
  )
};

export default ProductPagePreview