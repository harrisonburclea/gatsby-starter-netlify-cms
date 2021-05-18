import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import FiveStars from './five-stars';

interface Props {
  testimonials: Array<{
    name: string,
    review: string
  }>
}

const Testimonials: FunctionComponent<Props> = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="py-10 my-10">
      <div className="flex max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-left text-primary mb-20 relative w-1/3">
          <svg className="absolute -top-6 -left-4 transform -translate-x-3 -translate-y-2 h-16 w-16 text-primary-half-opaque"
               fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          What our customers say
        </h2>
        <div className="w-2/3">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
                <div className="px-3">
                  <FiveStars/>
                  <div className="relative text-lg md:flex-grow my-3">
                    <p className="relative leading-7">{testimonial.review}</p>
                  </div>
                  <div className="text-primary font-medium text-xl leading-7 mb-5">{testimonial.name}</div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials
