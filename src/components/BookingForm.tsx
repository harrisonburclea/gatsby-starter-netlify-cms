import React from 'react';

class Bookings extends React.Component {
  componentDidMount() {
    window.addEventListener('message', function handleIFrameMessage(e) {
      var clinikoBookings = document.getElementById('cliniko-67293054');
      if (typeof e.data !== 'string') return; if (e.data.search('cliniko-bookings-resize') > -1) { var height = Number(e.data.split(':')[1]); clinikoBookings.style.height = height + 'px';} e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
    });
  }

  render() {
    return (
      <div>
        <iframe id='cliniko-67293054' src='https://physiodirect.uk1.cliniko.com/bookings?embedded=true' frameBorder='0'
                scrolling='auto' width='100%' height='1000'/>
      </div>
    );
  }
}

export default Bookings;
