import { twJoin } from "tailwind-merge";
import Sebelumnya from "~atoms/Sebelumnya";
import Selanjutnya from "~atoms/Selanjutnya";
import { SuratProps } from "~types";

type PreviousOrNextButtonProps = SuratProps & {};

const PreviousOrNextButton = ({ surat }: PreviousOrNextButtonProps) => {
  return (
    <div
      className={twJoin("flex w-full gap-3", surat.number > 1 ? "justify-between" : "justify-end")}
    >
      <Sebelumnya surat={surat} />
      <Selanjutnya surat={surat} />
    </div>
  );
};

export default PreviousOrNextButton;
