import laptop from './laptop.jpg';
import phone from './phone.jpg';
import meeting from './meeting.jpg';

function ImageGrid() {
  return (
    <div className='w-[800px] h-[450px]  gap-4 grid grid-cols-[3fr_4fr]'>
      <div className=' row-span-2 rounded-xl overflow-hidden relative p-6 text-white flex items-end'>
        <h2 className='z-20 relative text-sm w-2/3'>Social media revolutionizes global communication</h2>
        <div className='bg-gradient-to-t from-[rgba(0,0,0,0.85)] top-0 left-0 to-transparent to-80% z-10 absolute w-full h-full'></div>
        <img src={phone} alt='' className='w-full h-full object-cover top-0 left-0 absolute z-0' />
      </div>
      <div className=' rounded-xl overflow-hidden relative p-6 text-white flex items-end'>
        <h2 className='z-20 relative text-sm w-2/3'>Technology continuously evolves, shaping our lives, industries, and global connectivity.</h2>
        <div className='bg-gradient-to-t from-[rgba(0,0,0,0.85)]  to-transparent to-80% z-10 top-0 left-0 absolute w-full h-full'></div>
        <img src={laptop} alt='' className='w-full h-full object-cover top-0 left-0 absolute z-0' />
      </div>
      <div className=' rounded-xl overflow-hidden relative p-6 text-white flex items-end'>
        <h2 className='z-20 relative text-sm w-2/3'>The meeting provided a collaborative platform for exchanging ideas and fostering teamwork.</h2>
        <div className='bg-gradient-to-t from-[rgba(0,0,0,0.85)]  to-transparent to-80% z-10 top-0 left-0 absolute w-full h-full'></div>
        <img src={meeting} alt='' className='w-full h-full object-cover  z-0 top-0 left-0  absolute' />
      </div>
    </div>
  );
}

export default ImageGrid;
