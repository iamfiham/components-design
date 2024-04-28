import profileImage from './assets/image.png';
import {HiBolt} from 'react-icons/hi2';

function SkeletonProfileCard() {
  return (
    <div className='gap-12 w-[650px] grid grid-cols-[3fr_2fr] bg-white rounded-2xl p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.075)]'>
      <section>
        <div className='flex items-center gap-2 mb-4'>
          <HiBolt className='text-gray-800 ' />
          <h2 className='text-xl text-gray-400 font-medium leading-none tracking-[-0.5px]'>iamfiham,inc.</h2>
        </div>
        <h1 className='mb-8 text-3xl font-semibold leading-none tracking-[-1px] text-gray-800'>Web developer</h1>
        <p className='text-sm font-normal leading-none text-gray-400'>About the job</p>
        <section className='grid gap-1 mt-4 mb-8'>
          <div className='h-[6px] bg-gray-200 rounded-full w-[85%] bg-skeletonGradiant bg-[length:200%_100%]' />
          <div className='h-[6px] bg-gray-200 rounded-full w-[92%]' />
          <div className='h-[6px] bg-gray-200 rounded-full w-[70%]' />
        </section>
        <p className='text-sm font-normal leading-none text-gray-400'>Requirement</p>
        <section className='grid gap-4 mt-4'>
          <div className='grid grid-cols-[23px_1fr]'>
            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
            <div className='grid gap-1'>
              <div className='h-[6px] bg-gray-200 rounded-full w-[75%]' />
              <div className='h-[6px] bg-gray-200 rounded-full w-[60%]' />
            </div>
          </div>
          <div className='grid grid-cols-[23px_1fr]'>
            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
            <div className='grid gap-1'>
              <div className='h-[6px] bg-gray-200 rounded-full w-[85%]' />
              <div className='h-[6px] bg-gray-200 rounded-full w-[65%]' />
            </div>
          </div>
          <div className='grid grid-cols-[23px_1fr]'>
            <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
            <div className='grid gap-1'>
              <div className='h-[6px] bg-gray-200 rounded-full w-[75%]' />
              <div className='h-[6px] bg-gray-200 rounded-full w-[62%]' />
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className='flex gap-3 mb-6'>
          <div className='relative'>
            <img src={profileImage} alt='' className='w-10 h-10 rounded-[50%] object-cover' />
            <div className='absolute w-full  top-0 left-0 h-full bg-skeletonGradiant animate-skeleton bg-[length:200%_100%] z-10'></div>
          </div>
          <div className='self-center'>
            <h2 className='mb-1 text-sm font-semibold leading-none text-gray-800'>Mohamed Fiham</h2>
            <h3 className='text-[0.7rem] font-normal leading-none text-gray-400'>Web Developer</h3>
          </div>
        </div>
        <div className='mb-3'>
          <p className='mb-1 text-[0.7rem] text-gray-400'>Email</p>
          <div className='p-2 bg-gray-100 rounded-[4px]'>
            <div className='h-[6px] bg-gray-300 rounded-full w-[65%]'></div>
          </div>
        </div>
        <div className='mb-4'>
          <p className='mb-1 text-[0.7rem] text-gray-400'>Password</p>
          <div className='p-2 bg-gray-100 rounded-[4px]'>
            <div className='h-[6px] bg-gray-300 rounded-full w-[45%]'></div>
          </div>
        </div>
        <div className='grid mb-6 grid-cols-[15px_1fr] gap-2 '>
          <div className='bg-blue-400 rounded-[4px] aspect-square'></div>
          <div className='grid gap-1'>
            <div className='h-[6px] bg-gray-200 rounded-full w-[80%]' />
            <div className='h-[6px] bg-gray-200 rounded-full w-[65%]' />
          </div>
        </div>
        <div className='flex justify-end gap-3'>
          <button className='text-blue-500 w-full text-[0.7rem] py-[6px] px-3 rounded-[4px] font-medium border border-solid border-blue-500 leading-none '>
            Cancel
          </button>
          <button className='text-white w-full bg-blue-500 text-[0.7rem] py-[6px] px-3 rounded-[4px] font-medium leading-none  border border-solid border-blue-500 bg-skeletonGradiant animate-skeleton bg-[length:200%_100%]'>
            Sign In
          </button>
        </div>
      </section>
    </div>
  );
}

export default SkeletonProfileCard;
