import { useKeydown } from "~hooks/useKeydown";
import { memo, useRef } from "react";
import { twJoin } from "tailwind-merge";

type SearchBarProps = {
  setSearchTerm: (value: string) => void;
};

type HandleChangeProps = {
  target: {
    value: string;
  };
};

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const ref = useRef<string | any>("");

  const handleChange = (event: HandleChangeProps) => {
    setSearchTerm(event.target.value);
  };

  useKeydown({ ref: ref, isShiftKey: true, key1: "Enter", key2: "Escape" });

  return (
    <div className="flex flex-col">
      <input
        ref={ref}
        className={twJoin(
          "w-[250px] rounded-md border-2 border-solid border-gray-400 bg-gray-50 bg-clip-padding",
          "px-3 py-1 font-semibold transition ease-in-out",
          "focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600",
          "dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500"
        )}
        type="text"
        placeholder="Search...."
        onChange={handleChange}
      />
      <span className="mt-1.5 hidden md:inline-block">
        <kbd
          className={twJoin(
            "rounded-sm bg-blue-400 px-1.5 py-0.5 text-sm font-semibold",
            "text-black shadow-sm dark:bg-blue-500"
          )}
        >
          Shift
        </kbd>{" "}
        <b>+</b>{" "}
        <kbd
          className={twJoin(
            "rounded-sm bg-blue-400 px-1.5 py-0.5 text-sm font-semibold",
            "text-black shadow-sm dark:bg-blue-500"
          )}
        >
          Enter
        </kbd>
      </span>
    </div>
  );
};

export default memo(SearchBar);
