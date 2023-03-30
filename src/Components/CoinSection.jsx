import React from "react";

import ArrowRight from "../assets/Images/ArrowRight.svg";
import BigArrowRight from "../assets/Images/BigArrowRight.png";
import BitcoinIcon from "../assets/Images/BitcoinIcon.svg";
import EthereumIcon from "../assets/Images/EthereumIcon.svg";
import LitecoinIcon from "../assets/Images/LitecoinIcon.svg";

function CoinSection() {
  return (
    <div className="bg-bg-color-2 w-full px-6">
      <div className="mx-auto container">
        <div className="mx-auto max-w-5xl container pb-24 pt-80 md:pt-64">
        <div className="flex flex-col justify-between space-y-6 md:space-y-12 items-center">
        <p className="text-center text-xl sm:text-2xl md:text-3xl leading-tight md:leading-[36px] font-bold text-primary mb-3 md:mb-6 max-w-xl">
          Trade securely and market the high growth cryptocurrencies.
        </p>
        <div className="coins grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="coin flex flex-col justify-between items-center space-y-8 shadow rounded-md bg-primary p-5 lg:p-8 text-center">
            <img src={BitcoinIcon} className="h-12" alt="chart icon" />
            <p className="text-white text-xl md:text-2xl font-bold">
              Bitcoin{" "}
              <span className="font-medium text-base text-neutral">
                BTC
              </span>
            </p>
            <p className="text-white text-sm font-normal">
              Digital currency in which a record of transactions is
              maintained.
            </p>
            <button
              type="button"
              className="btn rounded-[32px] shadow-md focus:ring-2 focus:ring-opacity-75 py-4 pr-4 pl-5 bg-accent text-white"
            >
              Start mining
              <img
                src={ArrowRight}
                className="h-6 inline ml-2"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="coin flex flex-col justify-between items-center space-y-8 shadow rounded-md bg-white p-5 lg:p-8 text-center">
            <img src={EthereumIcon} className="h-12" alt="chart icon" />
            <p className="text-primary text-xl md:text-2xl font-bold">
              Ethereum{" "}
              <span className="font-medium text-base text-neutral">
                ETH
              </span>
            </p>
            <p className="text-[#828282] text-sm font-normal">
              Blockchain technology to create and run decentralized digital
              applications.
            </p>
            <button
              type="button"
              className="btn rounded-[32px] shadow-md focus:ring-2 focus:ring-opacity-75"
            >
              <img
                src={BigArrowRight}
                className="h-12 inline"
                alt="right arrow"
              />
            </button>
          </div>
          <div className="coin flex flex-col justify-between items-center space-y-8 shadow rounded-md bg-white p-5 lg:p-8 text-center">
            <img src={LitecoinIcon} className="h-12" alt="chart icon" />
            <p className="text-primary text-xl md:text-2xl font-bold">
              Litecoin{" "}
              <span className="font-medium text-base text-neutral">
                LTC
              </span>
            </p>
            <p className="text-[#828282] text-sm font-normal">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
            <button
              type="button"
              className="btn rounded-[32px] shadow-md focus:ring-2 focus:ring-opacity-75"
            >
              <img
                src={BigArrowRight}
                className="h-12 inline"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>      
        </div>
      </div>
    </div>
  );
}

export default CoinSection;
