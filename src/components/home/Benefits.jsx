import React from "react";
import BenefitsCard from "../BenefitsCard";
import MainTitle from "../MainTitle";

function Benefits() {
  return (
    <div className="py-16">
      <MainTitle head="Benifits" link="/about" />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BenefitsCard />
      </div>
    </div>
  );
}

export default Benefits;
