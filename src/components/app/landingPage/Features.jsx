import React from 'react';

const Features = () => {
  return (
    <div className='flex justify-center'>
    <div className="flex  flex-col justify-center items-center align-middle ">
      {/* Feature 1 */}
      <div className="group w-[70%] ">
        <h2 className="text-2xl text-white  group-hover:text-white cursor-pointer transition-colors duration-200">
          Data Labeling Marketplace
        </h2>
        <p className="text-lg text-white group-hover:text-white cursor-pointer transition-colors duration-200  pt-5">
          A platform where users can upload raw datasets and connect with skilled labelers who can annotate data in return for incentives, ensuring high-quality labeled data for AI models.
        </p>
        <div className="border-t border-gray-300 my-6 "></div>
      </div>

      {/* Feature 2 */}
      <div className="group w-[70%]">
        <h2 className="text-2xl text-white  group-hover:text-white cursor-pointer transition-colors duration-200">
          Incentive-Based Labeling
        </h2>
        <p className="text-lg text-white group-hover:text-white cursor-pointer transition-colors duration-200 pt-5">
          Labelers are rewarded with tokens or other incentives for accurately tagging datasets, motivating high-performance and quick turnaround for dataset owners.
        </p>
        <div className="border-t border-gray-300 my-6 "></div>
      </div>

      {/* Feature 3 */}
      <div className="group w-[70%]">
        <h2 className="text-2xl text-white group-hover:text-white cursor-pointer transition-colors duration-200">
          AI-Ready Datasets
        </h2>
        <p className="text-lg  text-white group-hover:text-white cursor-pointer transition-colors duration-200 pt-5">
          Enable the creation of AI-ready datasets through collaborative labeling, making it easy for businesses and researchers to obtain clean, annotated data for training their machine learning models.
        </p>
        <div className="border-t border-gray-300 my-6 "></div>

      </div>
    </div>
    </div>
  );
};

export default Features;
