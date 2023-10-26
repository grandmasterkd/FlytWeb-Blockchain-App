import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

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
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
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
    <div className="flex flex-col md:flex-row w-full justify-between items-center">
      <div className="flex flex-col items-start justify-between py-12 md:py-24 ">
        <div className="flex flex-1 flex-col pl-4 md:pl-48  ">
          <h1 className="text-3xl md:text-6xl text-white text-gradient uppercase font-semibold py-1">
            Welcome to the <br></br>future of online <br></br> transactions
          </h1>

          <div className="flex flex-col md:flex-row  gap-x-4 ">
            <button
              type="button"
              className="flex items-center border-2 my-5 rounded-lg px-4 py-2 md:px-5 cursor-pointer"
            >
              <p className="text-white" style={{ marginRight: "80px" }}>
                Enter Address
              </p>
            </button>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-4 rounded-xl cursor-pointer hover:bg-[#2546bd]"
              >
                <p className="text-white text-base ">Connect Wallet</p>
              </button>
            )}
          </div>
        </div>

        <a href="https://www.blockchain.com/explorer/prices/">
          <div className="flex flex-col sm:flex-row gap-x-5 relative left-1/3 top-44 ">
            <div className="bg-[#ffffff] w-60 h-36 p-5 rounded-md shadow-lg">
              <div className="flex justify-between items-start">
                <img className="w-10 mb-4" src="/images/bitcoinicon.png" />
                <h4 className="bg-[#104260] text-[#48e7ff] font-semibold p-2 text-sm rounded-md inline-block">
                  Trade
                </h4>
              </div>
              <div className="flex gap-x-5  ">
                <h4 className="font-semibold ">Bitcoin</h4>
                <p className="text-[grey]">BTC</p>
              </div>

              <div className="flex gap-x-3 ">
                <h4>$34,450.00</h4>
                <h4 className="text-[green] font-semibold ">+3.38%</h4>
              </div>
            </div>

            <div className="bg-[#ffffff] w-60 h-36 p-5 rounded-md shadow-lg">
              <div className="flex justify-between items-start">
                <img className="w-10 mb-4" src="/images/ethereumicon.png" />
                <h4 className="bg-[#104260] text-[#48e7ff] font-semibold p-2 text-sm rounded-md inline-block">
                  Trade
                </h4>
              </div>
              <div className="flex gap-x-5  ">
                <h4 className="font-semibold ">Ethereum</h4>
                <p className="text-[grey]">ETH</p>
              </div>

              <div className="flex gap-x-3 ">
                <h4>$1,791.15</h4>
                <h4 className="text-[green] font-semibold ">+1.11%</h4>
              </div>
            </div>

            <div className="bg-[#ffffff] w-60 h-36 p-5 rounded-md shadow-lg">
              <div className="flex justify-between items-start">
                <img className="w-10 mb-4" src="/images/stellaricon.png" />
                <h4 className="bg-[#104260] text-[#48e7ff]  font-semibold p-2 text-sm rounded-md inline-block">
                  Trade
                </h4>
              </div>
              <div className="flex gap-x-5  ">
                <h4 className="font-semibold ">Stellar</h4>
                <p className="text-[grey]">XLM</p>
              </div>

              <div className="flex gap-x-3 ">
                <h4>$0.11</h4>
                <h4 className="text-[#f44848] font-semibold ">-0.52%</h4>
              </div>
            </div>
            <div className="bg-[#ffffff] w-60 h-36 p-5 rounded-md shadow-lg">
              <div className="flex justify-between items-start">
                <img className="w-10 mb-4" src="/images/solanaicon.png" />
                <h4 className="bg-[#104260] text-[#48e7ff] font-semibold p-2 text-sm rounded-md inline-block">
                  Trade
                </h4>
              </div>
              <div className="flex gap-x-5  ">
                <h4 className="font-semibold ">Solana</h4>
                <p className="text-[grey]">SOL</p>
              </div>

              <div className="flex gap-x-3 ">
                <h4>$32.07</h4>
                <h4 className="text-[#e95050] font-semibold ">-3.20%</h4>
              </div>
            </div>
          </div>
        </a>

        {/*
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
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

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
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

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
         */}
      </div>
    </div>
  );
};

export default Welcome;
