import ReferralDialog from "./ReferalDIalogue";
import { Button } from "./ui/button";

function HowDoIRefer() {
  return (
    <div className="bg-blue-50 md:min-h-screen min-h-screen  flex flex-col  w-[100%] items-center justify-around md:mt-8 mt-10 pt-8 md:pt-0">
      <h1 className="text-2xl font-semibold text-gray-700 mb-9 ">
        How Do I <span className="text-blue-500">Refer?</span>
      </h1>
      <div className="relative w-full flex flex-col sm:flex-row h-full md:h-auto  sm:justify-around md:gap-1 gap-48 mb-8 mt-20 items-center ">
        {/* Icon 1 */}

        <div className="absolute md:hidden md:top-12 top-[-11rem] md:left-[16rem] left-1/2 md:w-full w-full transform md:translate-x-0 translate-x-[-50%]">
          <img src="/how-vertical.svg" alt="" className="w-full md:w-[80%] " />
        </div>
        <div className="absolute top-1/2 left-1/2 w-4/6 transform translate-x-[-50%] translate-y-[-50%] md:block hidden">
          <img src="/how-do-i-prefer.svg" alt="" className="w-full" />
        </div>
        <div className="flex flex-col items-center text-center p-4 z-10 md:ml-[22.5%] ml-0">
          <img src="/user-plus.svg" alt="" className="w-10" />

          <p className="text-black text-[15px] w-40 mt-3">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>

        {/* Icon 2 */}
        <div className="flex flex-col items-center text-center p-4 z-10">
          <img src="/note.svg" alt="" className="w-10" />
          <p className="text-black text-[15px] w-40 mt-3">
            Earn rewards once your referral joins an Accredited program.
          </p>
        </div>

        {/* Icon 3 */}
        <div className="flex flex-col items-center text-center p-4 z-10 md:mr-[22.5%] mr-0">
          <img src="/pocket.svg" alt="" className="w-10" />
          <p className="text-black text-[15px] w-40 mt-3">
            Referrer receives a bonus 30 days after program enrollment.
          </p>
        </div>
      </div>

      <ReferralDialog
        triggerButton={
          <Button className="bg-blue-600 text-white px-6 md:mb-0 mb-9 py-2 z-40 mt-[135px] rounded-md hover:bg-blue-700">
            Refer Now
          </Button>
        }
      />
    </div>
  );
}

export default HowDoIRefer;
