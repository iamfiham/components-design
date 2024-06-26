import {HiMiniChartPie} from 'react-icons/hi2';

export function Label() {
  return (
    <div className='w-full relative'>
      <div className='grid grid-cols-2 h-2/5 absolute w-full -bottom-2 left-0 z-0 rounded-xl overflow-hidden'>
        <div className='bg-red-400 h-full'></div>
        <div className='bg-blue-400 h-full'></div>
      </div>
      <div className='grid grid-cols-2 h-2/5 absolute w-full -bottom-2 left-0 z-10 rounded-lg overflow-hidden blur-md opacity-50'>
        <div className='bg-red-400 h-full'></div>
        <div className='bg-blue-400 h-full'></div>
      </div>
      <div className='z-20 relative flex items-center justify-between p-4 bg-neutral-800/70 rounded-xl backdrop-blur-xl'>
        <div>
          <h2 className='text-lg text-white font-semibold leading-none mb-1'>$ 4 800, 34</h2>
          <p className='text-xs text-neutral-500 leading-none'>October</p>
        </div>
        <span className='bg-neutral-700/50 px-3 py-1 rounded-lg backdrop-blur-xl'>
          <HiMiniChartPie className='text-blue-400 text-xl' />
        </span>
      </div>
    </div>
  );
}
