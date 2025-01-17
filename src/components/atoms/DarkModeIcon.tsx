import { useTheme } from "~hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { twJoin } from "tailwind-merge";

const DarkModeIcon = ({
  flexDir,
  isHidden,
  justifyItems,
  isMarginLeft,
}: {
  flexDir: string;
  isHidden?: boolean;
  justifyItems: string;
  isMarginLeft: boolean;
}) => {
  const [theme, setTheme] = useTheme();

  return (
    <div
      className={twJoin(
        `w-full items-center justify-${justifyItems}`,
        isHidden ? "hidden md:flex" : "flex"
      )}
    >
      <button
        className={twJoin(
          `flex flex-${flexDir} cursor-pointer items-center justify-center`,
          "px-4 text-gray-500 dark:text-gray-400"
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
        <p className={twJoin("hidden text-sm font-semibold md:block", isMarginLeft ? "ml-2" : "")}>
          {theme === "light" ? "Dark" : "Light"}
        </p>
      </button>
    </div>
  );
};

export default DarkModeIcon;
