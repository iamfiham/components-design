import note from './assets/note.jpg';
import {IoIosArrowRoundForward} from 'react-icons/io';

function ProjectCard() {
  return (
    <div className='bg-white w-[400px] shadow-[0px_10px_18px_-5px_rgba(0,0,0,0.08),inset_0px_0px_50px_50px_rgba(0,0,0,0.01)] rounded-xl overflow-hidden group/card '>
      <div className='p-8 pb-0'>
        <h1 className='text-xl text-neutral-900 font-bold mb-3'>Note Taking App</h1>
        <p className='text-sm text-neutral-400 mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit ipsa perferendis a eos placeat ipsum vitae nemo excepturi commodi!
        </p>
        <button className='text-blue-400 gap-2 text-xs flex items-center'>
          View Site <IoIosArrowRoundForward className='scale-150' />
        </button>
      </div>
      <div className='aspect-[3/2] relative overflow-hidden'>
        <div className='absolute w-full h-full bg-gradient-to-b z-20 from-white to-transparent to-50% pointer-events-none' />
        <img
          src={note}
          alt=''
          className='border border-solid border-neutral-100 w-4/5 z-10 rounded-md object-top  object-cover absolute top-8 left-1/2 -translate-x-1/2 shadow-[-10px_15px_20px_-5px_rgba(0,0,0,0.1)] origin-top  group-hover/card:-translate-y-12 group-hover/card:-translate-x-[calc(50%+12px)] -rotate-[15deg] transition-all '
        />
      </div>
    </div>
  );
}

export default ProjectCard;
