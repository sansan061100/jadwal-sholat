import { memo } from "react";
import Time from "src/components/time";
import BottomNav from "src/components/layout/bottomNav";

const Home = () => {
  const date = new Date();
  const hours = date.getHours();

  return (
    <div className="flex flex-col text-center h-screen justify-center items-center gap-3 px-8">
      <div className="flex justify-center items-center flex-col">
        {/* Sedikit catatan 
           -> buat nampilin waktu pagi, siang, sore, dan malam
                - jika hours >= 12 dan hours < 15, maka yang ditampilkan siang
                - jika hours >= 15 dan hours < 18, maka yang ditampilkan sore
                - jika hours >= 18 dan hours < 0, maka yang ditampilkan malam
                - setelah itu atau selain itu, akan menampilkan pagi
        */}
        <h1 className="sm:text-4xl text-3xl font-bold">{`Selamat ${
          hours >= 12 && hours < 15
            ? "siang"
            : hours >= 15 && hours < 18
            ? "sore"
            : hours >= 18 && hours < 24
            ? "malam"
            : "pagi"
        }`}</h1>
        <p className="text-lg md:text-xl font-medium">
          &#34;Demi masa, sesungguhnya manusia itu benar-benar berada dalam
          kerugian&#34;
        </p>
        <Time />
      </div>
      <BottomNav />
    </div>
  );
};

export default memo(Home);
