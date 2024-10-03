import React from "react";
import TaskCardForLabeler from "../../components/app/labelerboard/TaskCardForLabeler";

const page = () => {
  return (
    <>
      <div class="flex flex-col items-center gap-10 py-[60px] self-stretch">
        <div>
          <h2 class="text-white text-center font-work-sans text-[51px] font-semibold leading-[1.1] capitalize">
            Browse Marketplace
          </h2>
          <p class="text-white text-center font-work-sans text-[22px] font-normal leading-[1.6]">
            Empower AI by labeling data, earn rewards, and help build the future
            with precision.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 pb-10">
        <div className="mx-auto">
          <TaskCardForLabeler />
        </div>
        <div className="mx-auto">
          <TaskCardForLabeler />
        </div>
        <div className="mx-auto">
          <TaskCardForLabeler />
        </div>
        <div className="mx-auto">
          <TaskCardForLabeler />
        </div>
      </div>
    </>
  );
};

export default page;
