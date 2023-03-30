import React from "react";
import ArrowRight from "../assets/Images/ArrowRight.svg";
import BitcoinIllustration from "../assets/Images/BitcoinIllustration.png";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center mt-14 md:container mx-auto">
      <div
        className="flex flex-col justify-between md:w-1/2"
        id="hero-text-container"
      >
        <div className="flex flex-col space-y-6" id="hero-texts">
          <div
            className="bg-white bg-opacity-10 rounded-[32px] p-1 pr-2 flex flex-row items-center gap-2 sm:gap-2.5"
            id="hero-discount-banner"
          >
            <span
              className="block bg-white px-2 sm:px-4 py-0.5 sm:py-1 text-[0.82rem] sm:text-primary rounded-[32px] font-medium"
              id="hero-discount"
            >
              75% SAVE
            </span>
            <span className="block text-white text-[0.82rem] sm:text-base">
              For the Black Friday weekend
            </span>
          </div>

          <p className="text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[56px] lg:leading-[75px] font-bold text-white">
            Fastest & secure platform to invest in crypto
          </p>
          <p className="text-neutral font-normal text-base md:text-lg max-w-md">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <div id="btn" className="">
            <button
              type="button"
              className="btn rounded-[32px] shadow-md focus:ring-2 focus:ring-opacity-75 py-4 pr-4 pl-5 bg-accent text-white"
            >
              Try for FREE
              <img
                src={ArrowRight}
                className="h-6 inline ml-2"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2" id="hero-img">
        <img
          src={BitcoinIllustration}
          alt="bitcoin illustration"
          className="h-auto w-full max-w-[650px]"
        />
      </div>
    </div>
  );
}

export default Hero;
