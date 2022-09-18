import React from 'react';
import BackgroundImage from '../assets/bg-main-mobile.png';
import BackgroundImageDesk from '../assets/bg-main-desktop.png';
import CardFront from '../assets/bg-card-front.png';
import CardBack from '../assets/bg-card-back.png';
import CardLogo from '../assets/card-logo.svg';
const CardAnimate = ({ cardDetails }) => {
  return (
    <div>
      <div className="relative">
        {/* For Mobile */}
        <div className="w-full lg:hidden">
          <img
            src={BackgroundImage}
            className="w-full h-60"
            alt="background"
          />
        </div>

        {/* For Desktop */}
        <div className="hidden lg:block lg:relative">
          <div className="w-[350px] xl:w-[483px] h-screen">
            <img
              src={BackgroundImageDesk}
              alt="background"
              className="w-[438px h-screen"
            />
          </div>

          {/* Card Front */}

          <div className="absolute -translate-y-1/2 top-1/2 transfrom">
            <div className="relative h-[527px] bg-red-200">
              <div className="w-[447px] h-[245px] absolute left-[50px] xl:left-[164px]">
                <img
                  src={CardFront}
                  alt="card-front"
                  className="w-[447px] h-[245px]"
                />

                <div className="absolute top-[28px] left-[32px]">
                  <img
                    src={CardLogo}
                    alt="card-logo"
                    className="w-[84px] h-[47px]"
                  />
                </div>

                <div className="absolute bottom-[70px] left-8">
                  <p className="text-[28px] font-medium text-white leading-9 tracking-[3.5px]">
                    {cardDetails?.cardNumber
                      ? cardDetails?.cardNumber
                      : '0000 0000 0000 0000'}
                  </p>
                </div>

                <div className="absolute bottom-[26.5px] left-8">
                  <p className="uppercase font-medium text-white text-sm leading-[18px] tracking-[2px]">
                    {cardDetails?.firstName
                      ? cardDetails?.firstName
                      : 'Jane Appleseed'}
                  </p>
                </div>

                <div className="absolute bottom-[26.5px] right-[26.5px] ">
                  <p className="uppercase font-medium text-white text-sm  leading-[18px] tracking-[2px]">
                    {cardDetails?.month ? cardDetails.month : '00'} /{' '}
                    {cardDetails?.year ? cardDetails?.year : '00'}
                  </p>
                </div>
              </div>

              <div className="w-[447px] h-[245px] absolute left-[70px] xl:left-[258px] top-[282px]">
                <img
                  src={CardBack}
                  alt="card-back"
                  className="w-[447px] h-[245px]"
                />

                <span className="text-sm text-white font-semibold tracking-[2px] leading-[18px] absolute top-[111px] right-[57px]">
                  {cardDetails?.cvv ? cardDetails?.cvv : '000'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="absolute top-8 w-[286px] h-[157px] right-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:hidden">
          <div className="">
            <img
              src={CardBack}
              alt="card back"
              className="h-[157px] w-[286px]"
            />
            <span className="absolute text-white top-[73px] right-[37px] tracking-[1.2px] text-[9px] leading-[11px] font-medium">
              {cardDetails?.cvv ? cardDetails?.cvv : '000'}
            </span>
          </div>

          <div className="absolute w-[286px] h-[157px] top-[89px] right-[57px] ">
            <div>
              <img
                src={CardFront}
                alt="card front"
                className="h-[157px] w-[286px]"
              />

              <div className="absolute top-[84px] left-[19px]">
                <p className="text-lg font-medium text-white leading-6 tracking-[2.2px]">
                  {cardDetails?.cardNumber
                    ? cardDetails?.cardNumber
                    : '0000 0000 0000 0000'}
                </p>
              </div>
              <div className="absolute bottom-5 left-[19px]">
                <p className="uppercase font-medium text-white text-[9px] leading-[11px] tracking-[1.2px]">
                  {cardDetails?.firstName
                    ? cardDetails?.firstName
                    : 'Jane Appleseed'}
                </p>
              </div>

              <div className="absolute bottom-5 right-5">
                <p className="uppercase font-medium text-white text-[9px] leading-[11px] tracking-[1.2px]">
                  {cardDetails?.month ? cardDetails.month : '00'} /{' '}
                  {cardDetails?.year ? cardDetails?.year : '00'}
                </p>
              </div>

              <div className="absolute top-[17.5px] left-[19px]">
                <img
                  src={CardLogo}
                  alt="card-logo"
                  className="w-[54px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnimate;
