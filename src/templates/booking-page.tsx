import React, { FunctionComponent } from 'react'
import BookingForm from '../components/BookingForm';
import Layout from '../components/Layout'

interface Props {
}

export const BookingPageTemplate: FunctionComponent<Props> = () => {
  return (
    <div>
      <BookingForm businessId="300360632799073285" />
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
