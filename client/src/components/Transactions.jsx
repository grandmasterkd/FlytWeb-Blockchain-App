import React, { useContext } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start shadow-xl rounded-xl p-4 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-xl font-medium ">{title}</h3>
      <p className="mt-1 text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Transactions = () => {
  return (
    <>
      <div className="flex w-full justify-center ">
        <div className="flex mf:flex-row flex-col  md:w-3/4 mb-20 ">
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl sm:text-5xl font-medium text-gradientservices  ">
              Services That We
              <br />
              Continue To Improve
            </h1>
            <p className="text-left my-2 font-light md:w-9/12 w-11/12 text-base">
              The best choice for buying and selling your crypto assets, with
              the various super friendly services we offer
            </p>
          </div>

          <div className="flex-1 flex flex-col ">
            <ServiceCard
              color="bg-[blue]"
              title="Security gurantee"
              icon={
                <BsShieldFillCheck fontSize={21} className="text-[white]" />
              }
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
            <ServiceCard
              color="bg-[blue]"
              title="Best exchange rates"
              icon={<BiSearchAlt fontSize={21} className="text-[white]" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
            <ServiceCard
              color="bg-[blue]"
              title="Fastest transactions"
              icon={<RiHeart2Fill fontSize={21} className="text-white" />}
              subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;

{
  /* 
import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;

*/
}
