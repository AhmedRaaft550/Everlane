import React from "react";
import PartnerCards from "./PartnerCards";

const Partner = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container  px-4">
        <h2 className="text-2xl opacity-60 font-mono  font-bold text-amber-900 mb-8 text-center underline ">
          Our Partners
        </h2>

        <PartnerCards />
      </div>
    </section>
  );
};

const MemoPartner = React.memo(Partner);

export default MemoPartner;
