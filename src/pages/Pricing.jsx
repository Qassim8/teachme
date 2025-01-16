import React, { Fragment } from 'react'
import AltTitle from '../components/AltTitle'
import PricingCard from '../components/PricingCard';
import FAQ from '../components/home/FAQ';

function Pricing() {
  const arr = [1, 4];
  return (
    <Fragment>
      <AltTitle
        title="Our Pricings"
        desc="Welcome to Academy's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro.
         We believe in providing flexible and affordable pricing options for our services. 
         Whether you're an individual looking to enhance your skills or a business seeking professional development solutions,
         we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <section className="py-16">
        <div className="mx-auto w-[220px] flex items-center justify-center gap-3 p-2 md:p-4 mb-5 bg-white rounded-md">
          <button className="py-1 md:py-3 px-3 md:px-5 text-[13px] md:text-[16px] text-white bg-amber-500 rounded-md cursor-pointer outline-none">
            Monthly
          </button>
          <button className="py-1 md:py-3 px-3 md:px-5 text-[13px] md:text-[16px] text-slate-700 rounded-md cursor-pointer outline-none">
            Yearly
          </button>
        </div>
        <div className="mt-5 p-3 md:p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-5">
          {arr.map((e, id) => (
            <PricingCard key={id} />
          ))}
        </div>
      </section>
      <FAQ/>
    </Fragment>
  );
}

export default Pricing