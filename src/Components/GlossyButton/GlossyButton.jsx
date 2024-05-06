import './GlossyButton.scss';

function GlossyButton() {
  return (
    <button className='group p-1 backdrop-blur-md bg-neutral-800/50 border border-solid border-neutral-700 text-neutral-100 rounded-full leading-none font-medium relative'>
      <span className='absolute h-[1px]  w-[40%] block -top-[1px] left-1/2 -translate-x-1/2 bg-gradient-to-l from-transparent via-blue-200 to-transparent  opacity-0 group-hover:opacity-100 transition-all'></span>
      <span className='absolute h-[3px]  w-[50%] block -top-[1px] left-1/2 -translate-x-1/2 bg-blue-100 blur-md opacity-0 group-hover:opacity-100 transition-all'></span>
      <span className='py-3 px-6 bg-neutral-800/20 bg-gradient-to-b from-transparent group-hover:from-blue-500/10 to-transparent backdrop-blur-md rounded-full block'>
        Work
      </span>
    </button>
  );
}

export default GlossyButton;
