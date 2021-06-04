import React from 'react';

interface BookingProps {
  businessId?: string
}

class BookingForm extends React.Component<BookingProps> {
  componentDidMount() {
    window.addEventListener('message', function handleIFrameMessage(e) {
      var clinikoBookings = document.getElementById('cliniko-67293054');
      if (typeof e.data !== 'string') return; if (e.data.search('cliniko-bookings-resize') > -1) { var height = Number(e.data.split(':')[1]); clinikoBookings.style.height = height + 'px';} e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
    });
  }

  render() {
    let bookingLink: string = 'https://physiodirect.uk1.cliniko.com/bookings?embedded=true';

    if (this.props.businessId) {
      bookingLink += `&business_id=${this.props.businessId}`;
    }

    return (
      <>
        <div className="relative bg-primary">
          <div className="relative max-w-7xl mx-auto py-10 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Book an appointment</h1>
            <p className="mt-6 text-xl text-white max-w-full">
              Book an appointment online using the booking form below, or give us a call on <a className="underline font-semibold" href="tel:0115 969 1528">0115 969 1528</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full p-10">
          <iframe className="max-w-screen-lg min-h-screen" id='cliniko-67293054' src={bookingLink} frameBorder='0'
                  scrolling='auto' width='100%' height='1000'/>
        </div>
      </>
    );
  }
}

export default BookingForm;
