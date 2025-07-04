"use client";

import { useParams } from "next/navigation";
import { iphoneUnits } from "../../../data/units";
import Footer from "../../components/Footer";
import BackButton from '../../components/BackButton';

export default function DetailUnit() {
  const { id } = useParams();
  const unit = iphoneUnits.find((item) => item.id === parseInt(id));

  if (!unit) return <div className="p-10">Unit tidak ditemukan.</div>;

  return (
    <div className="w-full font-sans">
      {/* Header */}
      <div
        className="relative w-full h-30 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/RD-topdetailunit.png)' }}
      >
        <BackButton />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 px-10 py-10 bg-white">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img src={unit.image} alt={unit.name} className="w-full max-w-md object-contain" />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold">{unit.name}</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{unit.description}</p>

          <hr className="my-2 border-black" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-sm">
            {unit.weight && <span className="border border-yellow-500 px-4 py-1 rounded-full">{unit.weight}</span>}
            {unit.daerah && <span className="border border-yellow-500 px-4 py-1 rounded-full">{unit.daerah}</span>}
            {unit.role && <span className="border border-yellow-500 px-4 py-1 rounded-full">{unit.role}</span>}
          </div>

          {/* Harga */}
          <div className="mt-4 flex items-center gap-20">
            <span className="font-semibold text-black text-2xl w-38">Harga Sewa</span>
            <div className="flex items-end gap-6 text-red-600 font-bold text-xl">
              <div className="flex flex-col leading-none">
                <span>Rp {unit.weekdayPrice}</span>
                <span className="text-xs font-normal text-red">Weekday</span>
              </div>
              <span className="text-red-600 text-xl font-bold">|</span>
              <div className="flex flex-col leading-none">
                <span>Rp {unit.weekendPrice}</span>
                <span className="text-xs font-normal text-red">Weekend</span>
              </div>
            </div>
          </div>

          {/* Fasilitas */}
          {unit.facilities && (
             <div className="mt-4 flex flex-col md:flex-row md:items-start gap-4 md:gap-32">
              <span className="font-semibold text-black text-2xl">Fasilitas</span>
              <div className="grid grid-cols-2 text-sm gap-x-6 gap-y-1 text-red-700 font-semibold mt-2">
                {unit.facilities.map((fasilitas, idx) => (
                  <div className="flex items-center gap-2" key={idx}>
                    <span>•</span>
                    <p>{fasilitas}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

           {/* Tombol Sewa */}
          <div className="pt-2">
            <a
              href="https://wa.me/6285829764860"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 w-full rounded-full shadow">
                Sewa Sekarang
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Info bawah */}
      <div className="bg-yellow-300 text-black px-10 py-8 grid md:grid-cols-2 gap-10 text-base">
        {/* Text */}
        <div className="space-y-4 leading-relaxed">
          <p>
           Unit iPhone yang kami sediakan hadir dengan kondisi fisik mulus dan performa optimal. Semua perangkat menggunakan baterai yang sehat, respons layar yang baik, serta siap digunakan kapan saja.
          </p>
          <p>
            Semua unit sudah dilengkapi dengan surat-surat resmi dan rutin diservis agar aman dan nyaman digunakan.
          </p>
          <p>
            Sangat cocok untuk mobilitas harian, perjalanan, maupun kebutuhan kerja.
          </p>
        </div>

        {/* Tabel */}
        <div className="flex justify-center items-start">
          <div className="bg-white text-black rounded-md px-6 py-4 text-sm w-full max-w-md shadow-md">
            <table className="w-full table-fixed">
              <tbody>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Warna/Penyimpanan</td>
                  <td className="py-3 text-right">{unit.Penyimpanan}</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 pr-4 font-semibold">Warna</td>
                  <td className="py-3 text-right">{unit.Warna}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Jaringan</td>
                  <td className="py-3 text-right">{unit.jaringan}</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 pr-4 font-semibold">Baterai</td>
                  <td className="py-3 text-right">{unit.baterai}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Kamera</td>
                  <td className="py-3 text-right">{unit.kamera}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
