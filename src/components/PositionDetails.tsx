import React from "react";

const PositionDetails = () => {
  return (
    <div className="bg-gradient-to-br from-law-light to-white p-8 rounded-xl shadow-sm border border-law-primary/10">
      <h3 className="text-2xl font-serif font-bold text-law-primary mb-6">
        Position: Secretary/Typist
      </h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">Nature of Company: Law Firm</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">
            Gender Requirement: Female Only
          </span>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">
            Preferred Residence Location of the Applicant : Aboru/Agbele/Iyana
            ipaja/Ipaja
          </span>
        </li>
        <li className="flex items-center gap-4">
          <span className="w-2 h-2 bg-law-accent rounded-full"></span>
          <span className="text-law-dark/90">
            Prior law firm experience is an added advantage
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PositionDetails;
