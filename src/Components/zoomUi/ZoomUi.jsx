import { HiOutlineUserCircle } from "react-icons/hi2";

function ZoomUi() {
  const textToCopy = "https://iamfiham.github.io/components-design/";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div className="flex min-h-[360px] w-[640px] flex-col items-center justify-center overflow-hidden rounded-xl bg-white">
      <span className="pointer-events-none relative z-0 mb-12 mt-12">
        <HiOutlineUserCircle className=" relative z-30 stroke-neutral-900 text-4xl" />
        {/* <span className=" absolute left-1/2 top-1/2 z-10 aspect-square w-56 -translate-x-1/2 -translate-y-1/2 bg-whiteoverlay " /> */}
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-700" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-1400" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-2100" />
        <span className="absolute left-1/2 top-1/2 z-0 aspect-square w-16 -translate-x-1/2 -translate-y-1/2 animate-border rounded-full border border-solid border-neutral-300/0 animation-delay-2800" />
      </span>
      <h2 className="relative z-10 mb-2 text-base/none font-bold text-neutral-900">
        Share link to start a meeting
      </h2>
      <p className="relative z-10 mb-4 text-center text-sm/snug text-neutral-500">
        This space is unlocked. Anyone with the link <br />
        can enter unlocked spaces.
      </p>
      <div className="relative z-10 flex  overflow-hidden rounded-lg border border-solid border-neutral-300 bg-white">
        <p className="w-56 truncate p-2 text-center text-sm/none font-medium text-neutral-900">
          https://iamfiham.github.io/components-design/
        </p>
        <p
          onClick={handleCopy}
          title="Copy the provided link"
          className="cursor-pointer border-0 border-l  border-solid  border-neutral-300 p-2 text-center text-sm/none  text-neutral-500 active:bg-neutral-100 "
        >
          Copy link
        </p>
      </div>
    </div>
  );
}

export default ZoomUi;
