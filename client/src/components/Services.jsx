import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-lg p-6 bg-transparent text-[#000000] border-[1px] border-[#abbace] text-sm"
  />
);

const Services = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <>
      <div className="p-48 flex items-center">
        <div className="bg-[#efefef] flex items-center p-20 justify-around rounded-xl w-full h-full">
          <div className="">
            <div className="mb-7">
              <h4 className="bg-[#3780e0] rounded-md p-3 text-white inline-block">
                Transactions
              </h4>
            </div>

            <div className="mb-7">
              <h2
                style={{ width: "fit-content" }}
                className="font-medium text-5xl text-gradientservices"
              >
                Send Crypto <br></br>Across The World
              </h2>
              <p>
                Explore the crypto world, buy and sell cryptocurrencies{" "}
                <br></br> easily on flytweb
              </p>
            </div>

            <div className=" sm:w-96 w-full flex flex-col justify-start items-center">
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-5  p-5 bg-[#3780e0] hover:bg-[#016fff] rounded-lg cursor-pointer uppercase"
                >
                  Send now
                </button>
              )}
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-80">
            <img className="" src="/images/iphone14-transactions.png" />
          </div>

          {/* 
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex  flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </>
  );
};

{
  /* 




;

const Services = () => (
  
);
*/
}

export default Services;
