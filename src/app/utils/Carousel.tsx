import React from 'react';
import '../css/carousel.css'; // You can add additional custom styles here

const companies = [
  { name: 'Adobe', logo: 'brandLogos/Adobe.png' },
  { name: 'Android', logo: 'brandLogos/Android.png' },
  { name: 'Apple', logo: 'brandLogos/Apple.png' },
  { name: 'Dell', logo: 'brandLogos/Dell.png' },
  { name: 'EA', logo: 'brandLogos/EA.png' },
  { name: 'Google', logo: 'brandLogos/Google.png' },
  { name: 'IBM', logo: 'brandLogos/IBM.png' },
  { name: 'Microsoft', logo: 'brandLogos/Microsoft.png' },
  { name: 'NVIDIA', logo: 'brandLogos/NVIDIA.png' },
  { name: 'SAP', logo: 'brandLogos/SAP.jpg' },
  { name: 'Zoom', logo: 'brandLogos/Zoom.png' },
  { name: 'Deloitte', logo: 'brandLogos/deloitte.svg' },
  { name: 'Intel', logo: 'brandLogos/intel.png' },
  { name: 'Oracle', logo: 'brandLogos/oracle.png' },
];

const Carousel: React.FC = () => {
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

