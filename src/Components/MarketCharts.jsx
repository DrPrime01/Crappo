import React from "react";

import Chart from "../assets/Images/Chart.png";
import Statistic from "../assets/Images/Statistic.png";
import Table from "../assets/Images/Table.png";

function MarketChart() {
  return (
    <div className="bg-secondary w-full px-6">
      <div className="mx-auto md:container">
        <div className="mx-auto max-w-6xl container md:py-24 py-20 relative">
          <div className="flex flex-col justify-between space-y-12 items-center">
            <p className="text-center text-2xl md:text-3xl leading-tight md:leading-[36px] font-bold text-white mb-3 md:mb-6 max-w-xl ">
              Market sentiments, portfolio, and run the infrastructure of your
              choice
            </p>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-8 md:mt-24 space-y-10">
              <div
                className="flex items-center justify-center md:w-1/2"
                id="hero-img"
              >
                <img
                  src={Chart}
                  alt="Chart illustration"
                  className="h-auto w-full max-w-[650px]"
                />
              </div>
              <div id="feat-texts" className="md:w-1/2">
                <div
                  className="flex flex-col justify-between"
                  id="hero-text-container"
                >
                  <div className="flex flex-col space-y-6" id="hero-texts">
                    <p className="text-2xl md:text-3xl leading-tight md:leading-10 font-bold text-white">
                      Invest Smart
                    </p>
                    <p className="text-neutral font-normal text-base md:text-lg max-w-md">
                      Get full statistic information about the behaviour of
                      buyers and sellers will help you to make the decision.
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
            <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-24 space-y-10 md:space-x-8">
              <div
                className="flex items-center justify-center md:w-1/2"
                id="hero-img"
              >
                <img
                  src={Statistic}
                  alt="Chart illustration"
                  className="h-auto w-full max-w-[650px]"
                />
              </div>
              <div id="feat-texts" className="md:w-1/2">
                <div
                  className="flex flex-col justify-between"
                  id="hero-text-container"
                >
                  <div className="flex flex-col space-y-6" id="hero-texts">
                    <p className="text-2xl md:text-3xl leading-tight md:leading-10 font-bold text-white">
                    Detailed Statistics
                    </p>
                    <p className="text-neutral font-normal text-base md:text-lg max-w-md">
                    View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
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
            <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-8 md:mt-24 space-y-10">
              <div
                className="flex items-center justify-center md:w-1/2"
                id="hero-img"
              >
                <img
                  src={Table}
                  alt="Chart illustration"
                  className="h-auto w-full max-w-[650px]"
                />
              </div>
              <div id="feat-texts" className="md:w-1/2">
                <div
                  className="flex flex-col justify-between"
                  id="hero-text-container"
                >
                  <div className="flex flex-col space-y-6" id="hero-texts">
                    <p className="text-2xl md:text-3xl leading-tight md:leading-10 font-bold text-white">
                      Grow your profit and track your investments
                    </p>
                    <p className="text-neutral font-normal text-base md:text-lg max-w-md">
                      Use advanced analytical tools. Clear TradingView charts
                      let you track current and historical profit investments.
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
    </div>
  );
}

export default MarketChart;
