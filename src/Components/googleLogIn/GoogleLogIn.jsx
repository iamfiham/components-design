import {FaGoogle, FaBell} from 'react-icons/fa';
import {IoLogoXbox} from 'react-icons/io';

function GoogleLogIn() {
  return (
    <section className='bg-neutral-100 p-16 w-[500px] rounded-lg flex flex-col gap-3'>
      <IoLogoXbox className='text-7xl self-center mb-4' />
      <h2 className='text-3xl font-semibold text-neutral-800 text-center mb-4'>
        <span className='text-neutral-500'>Joyful and productive collaboration. </span>All in one.
      </h2>
      <div className='px-4 p-2 bg-white rounded-lg shadow-n1 flex items-center gap-3'>
        <FaBell className='text-xs' />
        <div>
          <p className='text-sm/none  text-neutral-950 font-bold mb-[6px]'>We need access to Google Calender</p>
          <p className='text-xs/none  text-neutral-600'>Please tick all boxes in permission step</p>
        </div>
      </div>
      <button className='shadow-inner shadow-neutral-700 w-full py-4 bg-neutral-800 rounded-lg text-neutral-300 flex gap-4 items-center justify-center text-[0.95rem]/none tracking-tight mb-3'>
        <FaGoogle className='fill-neutral-300' /> Continue with Google
      </button>
      <p className='text-xs'>
        These <span className='text-blue-700 cursor-pointer'>Terms of Service</span> reflect the way Google’s business works and certain things we’ve
        always believed to be true.
      </p>
    </section>
  );
}

export default GoogleLogIn;
