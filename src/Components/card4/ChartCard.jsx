import {Label} from './Label';

function ChartCard() {
  return (
    <div className='p-12 rounded-lg flex flex-col items-center gap-8  w-[500px] overflow-hidden bg-gradient-to-t from-neutral-950/50 to-transparent bg-neutral-900'>
      <span className='w-full translate-x-2/3'>
        <Label />
      </span>
      <h2 className='text-3xl font-semibold  tracking-tight'>
        <span className='block bg-gradient-to-tr from-white from-40% to-white/20 bg-clip-text text-transparent '>
          Scalability without <br />
          compromise. <br />
        </span>
        <span className=' bg-gradient-to-r from-sky-400 from-40% to-sky-400/20 bg-clip-text text-transparent'>Design System</span>
      </h2>
      <span className='w-full -translate-x-2/3'>
        <Label />
      </span>
    </div>
  );
}

export default ChartCard;
