import React from 'react';
import Complete from '../assets/icon-complete.svg';
import Button from './Button';
const ThankYou = ({ setShowThankYou }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <img src={Complete} alt="complete" />
      </div>
      <div className="mt-[35px]">
        <h2 className="uppercase text-deep-violet-300 text-[28px] font-medium leading-9 tracking-[3.5px]">
          thank you!
        </h2>

        <h6 className="mt-4 mb-12 text-lg font-medium leading-6 text-polish-grey">
          We've added your card details
        </h6>

        <Button
          title="Continue"
          onClick={() => {
            setShowThankYou(false);
          }}
        />
      </div>
    </div>
  );
};

export default ThankYou;
