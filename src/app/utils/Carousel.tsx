import React from 'react';
import '../css/carousel.css'; // You can add additional custom styles here
import portfolioData from '@/data/portfolio.json';

const Carousel: React.FC = () => {
  const { companies } = portfolioData;

  return (
    <div className="relative w-4/5 overflow-hidden" style={{
      justifySelf: 'center'
    }}>
      <div className="flex animate-marquee">
        {companies.map((company, index) => (
          <div key={index} className="flex-none w-1/6 p-4 transition-transform duration-500">
            <img
              style={{
                borderRadius: "10px",
                width: "150px",
                height: "150px"
              }}
              src={company.logo}
              alt={company.name}
              className="mx-auto block opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};

export default Carousel;

