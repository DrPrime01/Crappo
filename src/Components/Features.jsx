import React from "react";

import ChartIcon from "../assets/Images/ChartIcon.svg";
import PersonIcon from "../assets/Images/PersonIcon.svg";
import GlobeIcon from "../assets/Images/GlobeIcon.svg";
import EthIllustration from "../assets/Images/EthIllustration.png";

function Features() {
  return (
    <div className="bg-primary min-h-screen w-full px-6">
      <div className="mx-auto container">
        <div className="mx-auto max-w-5xl container pb-10 pt-0 md:py-14">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
            <div className="flex flex-row space-x-2 items-center self-start md:self-stretch">
              <img src={ChartIcon} className="h-9" alt="chart icon" />
              <div className="stats flex flex-col">
                <span className="font-bold text-2xl md:text-3xl text-white">
                  $30B
                </span>
                <span className="text-sm text-neutral">
                  Digital Currency Exchanged
                </span>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center self-center md:self-stretch">
              <img src={PersonIcon} className="h-9" alt="person icon" />
              <div className="stats flex flex-col">
                <span className="font-bold text-2xl md:text-3xl text-white">
                  10M+
                </span>
                <span className="text-sm text-neutral">
                  Trusted Wallets Investor
                </span>
              </div>
            </div>
            <div className="flex flex-row space-x-4 items-center self-end md:self-stretch">
              <img src={GlobeIcon} className="h-9" alt="globe icon" />
              <div className="stats flex flex-col">
                <span className="font-bold text-2xl md:text-3xl text-white">
                  195
                </span>
                <span className="text-sm text-neutral">
                  Countries Supported
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-24 space-y-8">
            <div
              className="flex items-center justify-center md:w-1/2"
              id="hero-img"
            >
              <img
                src={EthIllustration}
                alt="Ethereum illustration"
                className="h-auto w-full max-w-[650px]"
              />
            </div>
            <div id="feat-texts" className="md:w-1/2">
              <div
                className="flex flex-col justify-between"
                id="hero-text-container"
              >
                <div className="flex flex-col space-y-6" id="hero-texts">
                  <p className="text-3xl md:text-4xl leading-tight md:leading-[48px] font-bold text-white">
                    Why you should choose CRAPPO
                  </p>
                  <p className="text-neutral font-normal text-base md:text-lg max-w-md">
                    Experience the next generation cryptocurrency platform. No
                    financial borders, extra fees, and fake reviews.
                  </p>
                  <div id="btn" className="">
                    <button
                      type="button"
                      className="rounded-[32px] shadow-md focus:ring-2 focus:ring-opacity-75 py-4 pr-4 pl-5 bg-accent text-white"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
