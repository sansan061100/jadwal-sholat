import { backToTopAnimation } from "~lib/utils/animation";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { twJoin } from "tailwind-merge";
import { useScroll } from "~hooks/useScroll";

const BackToTop = () => {
  const [scroll] = useScroll();

  const handleClick: () => void = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const height: number = 150;

  return (
    <AnimatePresence key={height} mode="wait">
      {scroll >= height ? (
        <motion.div
          {...backToTopAnimation}
          className="fixed bottom-16 right-2.5 md:right-4 md:bottom-4"
        >
          <button
            className={twJoin(
              "rounded-md bg-rose-400 p-1.5 transition ease-in-out",
              "hover:bg-rose-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            )}
            onClick={handleClick}
          >
            <MdKeyboardArrowUp className="text-white" size="32" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default memo(BackToTop);
