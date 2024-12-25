import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-law-light to-white p-8 rounded-xl shadow-sm border border-law-primary/10">
      <h3 className="text-2xl font-serif font-bold text-law-primary mb-6">
        Contact Information
      </h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">Phone: 08063765401</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">Email: ahdaratlegalservices@gmail.com</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">
            Address: No 25, Yisa street, off Ayo Afolabi Bus stop, Aboru, Iyana ipaja, Lagos
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;