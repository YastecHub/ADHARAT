import React from 'react';

const HiringAnnouncement = () => {
  return (
    <div className="bg-gradient-to-r from-law-primary/10 to-law-light p-8 rounded-xl border-2 border-law-gold/30 mb-10 shadow-lg">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-law-primary mb-3">
          We Are HIRING
        </h2>
        <h3 className="text-2xl lg:text-3xl text-law-secondary font-semibold mb-2">
          Join Our Team
        </h3>
        <p className="text-lg text-law-dark/80 font-medium italic">
          "Where justice meets professionalism"
        </p>
        <p className="text-lg text-law-dark/80 font-medium mt-2">
          Immediate Vacancy Available
        </p>
      </div>
    </div>
  );
};

export default HiringAnnouncement;