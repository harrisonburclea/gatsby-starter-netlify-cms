import React, { FunctionComponent } from 'react'
import Layout from '../components/Layout'

interface Props {
}

export const BookingPageTemplate: FunctionComponent<Props> = () => {
  return (
    <div>
      <h1>hi!</h1>
    </div>
  );
};

const BookingPage: FunctionComponent<Props> = () => {
  return (
    <Layout>
      <BookingPageTemplate/>
    </Layout>
  )
};

export default BookingPage
