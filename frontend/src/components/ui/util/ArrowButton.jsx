// import { CgChevronRight as RightArrow } from "react-icons/cg";
// import { CgChevronLeft as LeftArrow } from "react-icons/cg";
import {
  ChevronLeft as LeftArrow,
  ChevronRight as RightArrow,
} from "lucide-react";

function ArrowButton({ direction, handleScroll }) {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      onClick={() => handleScroll(isLeft ? "prev" : "next")}
      className={`
        flex items-center justify-center cursor-pointer
        absolute top-1/2 -translate-y-1/2 z-10
        size-10 rounded-full bg-white/80 shadow-md border border-neutral-200 hover:bg-white hover:shadow-xl
        ${isLeft ? "left-1" : "right-1"}
      `}
    >
      {isLeft ? (
        <LeftArrow className="size-7 flex items-center justify-center" />
      ) : (
        <RightArrow className="size-7 flex items-center justify-center" />
      )}
    </button>
  );
}

export default ArrowButton;
