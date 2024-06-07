import { HiOutlineUserCircle } from "react-icons/hi";

function ZoomUi() {
  return (
    <div className="flex min-h-[360px] w-[640px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white">
      <span className="relative z-0 mb-12 mt-12">
        <HiOutlineUserCircle className=" relative z-30 text-3xl" />
        {/* <span className=" clip-animation absolute left-1/2 top-1/2 z-20 aspect-square w-56 -translate-x-1/2 -translate-y-1/2 bg-blue-400" /> */}
        <span className=" bg-whiteoverlay absolute left-1/2 top-1/2 z-10 aspect-square w-56 -translate-x-1/2 -translate-y-1/2 " />
        <span className="animate-border absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-neutral-300" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-neutral-300" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-neutral-300" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-neutral-300" />
      </span>
      <h2 className="relative z-10 mb-3 text-base/none font-bold text-neutral-900">
        Share link to start a meeting
      </h2>
      <p className="relative z-10 mb-6 text-center text-sm text-neutral-500">
        This space is unlocked. Anyone with the link <br />
        can enter unlocked spaces.
      </p>
      <div className="relative z-10 flex items-center  rounded-lg border border-solid border-neutral-300">
        <p className="w-48 truncate p-2 text-center text-sm/none font-medium text-neutral-900">
          [BrandName].com/usefirstone.google.lk
        </p>
        <p className="cursor-pointer border-0 border-l border-solid border-neutral-300 p-2 text-center text-sm/none text-neutral-500">
          Copy link
        </p>
      </div>
    </div>
  );
}

export default ZoomUi;
