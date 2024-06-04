import laptop from './laptop.jpg';
import phone from './phone.jpg';
import meeting from './meeting.jpg';

function ImageGrid() {
  return (
    <div className='w-[800px] h-[450px]  gap-4 grid grid-cols-[3fr_4fr]'>
      <div className='relative flex items-end row-span-2 p-6 overflow-hidden text-white  rounded-xl'>
        <h2 className='relative z-20 w-2/3 text-sm'>Social media revolutionizes global communication</h2>
        <span className='bg-gradient-to-t from-[rgba(0,0,0,0.85)] top-0 left-0 to-transparent to-80% z-10 absolute w-full h-full block'></span>
        <img src={phone} alt='' className='absolute top-0 left-0 z-0 object-cover w-full h-full rounded-xl' />
      </div>
      <div className='relative flex items-end p-6 overflow-hidden text-white  rounded-xl'>
        <h2 className='relative z-20 w-2/3 text-sm'>Technology continuously evolves, shaping our lives, industries, and global connectivity.</h2>
        <span className=' block bg-gradient-to-t from-[rgba(0,0,0,0.85)]  to-transparent to-80% z-10 top-0 left-0 absolute w-full h-full'></span>
        <img src={laptop} alt='' className='absolute top-0 left-0 z-0 object-cover w-full h-full' />
      </div>
      <div className='relative flex items-end p-6 overflow-hidden text-white  rounded-xl'>
        <h2 className='relative z-20 w-2/3 text-sm'>The meeting provided a collaborative platform for exchanging ideas and fostering teamwork.</h2>
        <span className='block bg-gradient-to-t from-[rgba(0,0,0,0.85)]  to-transparent to-80% z-10 top-0 left-0 absolute w-full h-full'></span>
        <img src={meeting} alt='' className='absolute top-0 left-0 z-0 object-cover w-full h-full' />
      </div>
    </div>
  );
}

export default ImageGrid;
