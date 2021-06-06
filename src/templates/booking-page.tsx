import React, { FunctionComponent } from 'react'
import BasicTopHeader from '../components/BasicTopHeader';
import BookingForm from '../components/BookingForm';
import Layout from '../components/Layout'
import { CLINIC_NAMES_FRIENDLY } from '../constants/ClinicBusinessIds.constant';

interface Props {
  businessId?: string
}

export const BookingPageTemplate: FunctionComponent<Props> = ({ businessId}) => {
  let header: string = 'Book an appointment';

  if (businessId) {
    // @ts-ignore
    header = `Book an appointment at our ${ CLINIC_NAMES_FRIENDLY[businessId] } clinic`;
  }

  return (
    <div>
      <BasicTopHeader mainHeader={header}>
        <p className="mt-6 text-xl text-white max-w-full">Book an appointment online using the booking form below, or call our clinic directly on <a className="underline font-semibold" href="tel:0115 969 1528">0115 969 1528</a>.</p>
      </BasicTopHeader>
      <BookingForm businessId={businessId} />
    </div>
  );
};

const BookingPage: FunctionComponent<Props> = ({ businessId}) => {
  return (
    <Layout>
      <BookingPageTemplate businessId={businessId}/>
    </Layout>
  )
};

export default BookingPage
