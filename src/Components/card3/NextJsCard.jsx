import arc from './assets/arc.svg';

function NextJsCard() {
  return (
    <div className='border group border-solid cursor-pointer bg-neutral-900 border-neutral-700 p-[5px] rounded-xl w-96 relative'>
      <span className='block w-[40%] h-[1px] absolute -top-[1px] left-1/2 -translate-x-1/2 bg-gradient-to-l from-transparent via-sky-400 to-transparent'></span>
      <div className='p-5 transition-all rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-950/50 group-hover:to-neutral-950'>
        <img src={arc} alt='' className='h-10 mb-14' />
        <h2 className='mb-3 text-xl font-bold leading-none tracking-tighter text-white'>AIR Table</h2>
        <p className='text-sm text-neutral-500'>
          The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.
        </p>
      </div>
    </div>
  );
}

export default NextJsCard;
