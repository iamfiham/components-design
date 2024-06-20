import note from "./assets/note.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProjectCard() {
  return (
    <div className="group/card w-[400px] overflow-hidden rounded-lg bg-white shadow-[0px_10px_18px_-5px_rgba(0,0,0,0.08)]">
      <div className="relative z-40 p-10 pb-0">
        <h1 className="mb-4 text-2xl/none font-semibold tracking-tight text-neutral-900">
          Note Taking App
        </h1>
        <p className="mb-8 text-base/snug text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit
          ipsa perferendis a eos placeat ipsum vitae nemo excepturi commodi!
        </p>
        <button className="flex items-center gap-2 text-xs text-blue-400">
          View Site <IoIosArrowRoundForward className="scale-150" />
        </button>
      </div>
      <div className="relative z-30 grid place-items-center overflow-hidden p-10 pb-0">
        <div className="pointer-events-none absolute z-20 h-full w-full bg-gradient-to-t from-white to-transparent to-40%" />
        <img
          src={note}
          alt=""
          className="group-hover/card:shadow-top3 z-10 aspect-[3/2]  w-full rounded-xl  rounded-b-none  border-4 border-b-0 border-solid  border-neutral-800 object-contain object-top shadow-top2 transition-all"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
