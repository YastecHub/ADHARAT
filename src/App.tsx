import React from 'react';
import Header from './components/Header';
import HiringAnnouncement from './components/HiringAnnouncement';
import PositionDetails from './components/PositionDetails';
import ContactInfo from './components/ContactInfo';

const App = () => {
  return (
    <div className="min-h-screen bg-law-light flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-law-primary to-law-primary/90 rounded-r-[100px]"></div>
          <div className="absolute top-0 left-[28%] w-8 h-full bg-law-gold opacity-90"></div>
          
          {/* Main content */}
          <div className="relative p-8 lg:p-12">
            <Header />
            <HiringAnnouncement />
            <div className="space-y-6">
              <PositionDetails />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;