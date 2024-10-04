import React from "react";
const page = () => {
  return (
    <>
      <div>
        <section className="mt-10 md:px-[150px]">
          <div class="flex items-start gap-x-[100px]  ">
            <div className="flex flex-col gap-y-[30px] w-[60%] ">
              <h2 class="text-white font-work-sans text-[51px] font-semibold leading-[1.1] capitalize">
                Manu
              </h2>
            </div>
            <div className="w-[40%]">
              <button className="shadow-[inset_0_0_0_2px_#616467]  px-6 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200">
              0xc0E3...B79C

              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
