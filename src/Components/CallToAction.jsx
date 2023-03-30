import React from "react";

function CallToAction() {
  return (
    <div className="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] w-full px-6">
      <div className="mx-auto container">
        <div className="mx-auto max-w-6xl container py-16 flex justify-center items-center">
          <div
            className="flex flex-col bg-accent shadow rounded-md p-10 text-left w-full z-10 md:flex-row justify-between md:items-center"
            id="cta-container"
          >
            <div
              id="cta-texts"
              className="flex flex-col justify-between space-y-2"
            >
              <p className="text-white text-xl md:text-2xl font-bold">
                Start mining now
              </p>
              <p className="text-neutral font-normal text-sm md:text-base max-w-md">
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </div>
            <div
              className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-x-4 mb-6"
              id="inputs"
            >
              <div id="btn" className="flex md:flex-row flex-col justify-between md:items-center md:space-y-6 md:space-x-10">
                <input
                  className="block border-x-0 border-t-0 border-b-[1px] border-neutral pt-3 bg-transparent text-white"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="rounded-[32px] mt-4 font-medium md:mt-0 shadow-md focus:ring-2 focus:ring-opacity-75 py-2 pr-2 pl-3 text-accent bg-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
