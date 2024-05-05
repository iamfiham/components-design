import arc from './assets/arc.svg';

function NextJsCard() {
  return (
    <div className='border group border-solid cursor-pointer bg-neutral-900 border-neutral-700 p-[5px] rounded-xl w-96 relative group-[new]:'>
      <div className='w-[30%] h-[1px] absolute -top-[1px] left-1/2 -translate-x-1/2 bg-gradient-to-l from-transparent via-sky-400 to-transparent'></div>
      <div className='p-5 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg group-hover:to-neutral-950 transition-all'>
        <img src={arc} alt='' className='h-10 mb-14' />
        <h2 className='text-xl text-white font-bold tracking-tighter leading-none mb-3'>Arc Browser</h2>
        <p className='text-sm  text-neutral-500'>
          The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.
        </p>
      </div>
    </div>
  );
}

export default NextJsCard;
