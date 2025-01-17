import { SuratProps } from "~types";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
import { twJoin } from "tailwind-merge";

const Selanjutnya = ({ surat }: SuratProps) => {
  return (
    <>
      {surat.number < 114 ? (
        <Link href={`/quran/surah/${surat.number + 1}`} passHref>
          <button
            className={twJoin(
              "flex items-center justify-center gap-1 rounded-md",
              "border-2 border-black px-2 py-1 dark:border-white"
            )}
          >
            <p className="text-md font-semibold">Selanjutnya</p>
            <MdPlayArrow size="25px" />
          </button>
        </Link>
      ) : null}
    </>
  );
};

export default Selanjutnya;
