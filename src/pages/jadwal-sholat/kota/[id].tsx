import { NextRouter, useRouter } from "next/router";
import Loading from "~atoms/Loading";
import { useFetch } from "~hooks/useFetch";
import { bulan, currentDate, hari, tahun } from "~lib/helpers/formatDate";
import { JADWAL_SHOLAT_API } from "~lib/utils/api";
import TableJadwalSholat from "~organisms/TableJadwalSholat";
import Layout from "~templates/Layout";

const KotaId = () => {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const formatDate: string = `${tahun}/${bulan}`;

  const { data, isLoading, isError } = useFetch(
    id ? `${JADWAL_SHOLAT_API}/jadwal/${id}/${formatDate}` : ""
  );

  if (isLoading) return <Loading />;
  if (isError) return <p>Error!</p>;

  const waktu = data.data;

  return (
    <Layout title={`Jadwal Sholat ${waktu.lokasi}`}>
      <div className="flex flex-col items-center justify-center">
        <h1>{waktu.lokasi}</h1>
        <p className="text-lg font-medium">
          PROVINSI {waktu.daerah}, {currentDate.toUpperCase()}
        </p>
      </div>
      <div className="flex w-full items-center gap-7 overflow-x-auto text-center lg:justify-center">
        <TableJadwalSholat tanggal={hari} tahun={tahun} bulan={bulan} waktu={waktu} />
      </div>
    </Layout>
  );
};

export default KotaId;
