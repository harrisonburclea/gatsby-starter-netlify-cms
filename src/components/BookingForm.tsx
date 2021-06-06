import React from 'react';

interface BookingProps {
  businessId?: string
}

class BookingForm extends React.Component<BookingProps> {
  componentDidMount() {
    window.addEventListener('message', function handleIFrameMessage(e) {
      var clinikoBookings = document.getElementById('cliniko-67293054');
      if (typeof e.data !== 'string') return;
      if (e.data.search('cliniko-bookings-resize') > -1) {
        var height = Number(e.data.split(':')[1]);
        clinikoBookings.style.height = height + 'px';
      }
      e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
    });
  }

  render() {
    let bookingLink: string = 'https://physiodirect.uk1.cliniko.com/bookings?embedded=true';

    if (this.props.businessId) {
      bookingLink += `&business_id=${this.props.businessId}`;
    }

    return (
      <div className="flex justify-center w-full p-10">
        <iframe className="max-w-screen-lg min-h-screen" id='cliniko-67293054' src={bookingLink} frameBorder='0'
                scrolling='auto' width='100%' height='1000'/>
      </div>
    );
  }
}

export default BookingForm;
