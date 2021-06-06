import React, { FunctionComponent } from 'react'
import { CLINIC_BUSINESS_IDS } from '../../constants/ClinicBusinessIds.constant';
import BookingPage from '../../templates/booking-page';

interface Props {}

const BookOnline: FunctionComponent<Props> = () => (
  <BookingPage businessId={CLINIC_BUSINESS_IDS.MAPPERLEY_PARK} />
);

export default BookOnline
