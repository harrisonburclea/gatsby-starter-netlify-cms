import React, { FunctionComponent } from 'react'
import ContactSimpleFourCol from '../components/contact-simple-four-col';
import CtaFeatureContent from '../components/CtaFeatureContent';
import { CtaSplitImage } from '../components/CtaSplitImage';
import HeroAngleImage from '../components/HeroAngleImage';
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials';

interface IndexPageTemplateProps {
}

export const IndexPageTemplate: FunctionComponent<IndexPageTemplateProps> = () => {
  const testimonials = [
    {
      name: 'Deborah N',
      review: `I'm not one for emotional outpourings but since visiting PhysioDirect, I wanted to let people know how
                      positive my experience has been. You can rely on them to help. I have been sent to loads of places before and this
                      is the first time that they set out what I needed to do to resolve my problem. Tim got to the root of the
                      problem very quickly. I just wish I hadn't been so resistant and disbelieving at the beginning. They
                      treat you as a person not a problem and it was this that convinced me to start listening!`
    },
    {
      name: 'Deborah',
      review: `I'm not one for emotional outpourings but since visiting PhysioDirect, I wanted to let people know how
                      positive my experience has been. You can rely on them to help. I have been sent to loads of places before and this
                      is the first time that they set out what I needed to do to resolve my problem. Tim got to the root of the
                      problem very quickly. I just wish I hadn't been so resistant and disbelieving at the beginning. They
                      treat you as a person not a problem and it was this that convinced me to start listening!`
    },
    {
      name: 'Deborah',
      review: `I'm not one for emotional outpourings but since visiting PhysioDirect, I wanted to let people know how
                      positive my experience has been. You can rely on them to help. I have been sent to loads of places before and this
                      is the first time that they set out what I needed to do to resolve my problem. Tim got to the root of the
                      problem very quickly. I just wish I hadn't been so resistant and disbelieving at the beginning. They
                      treat you as a person not a problem and it was this that convinced me to start listening!`
    }
  ];

  return (
    <div>
      <HeroAngleImage/>
      <CtaFeatureContent/>
      <Testimonials testimonials={testimonials}/>
      <CtaSplitImage/>
      <ContactSimpleFourCol/>
    </div>
  );
};

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  )
};

export default IndexPage
