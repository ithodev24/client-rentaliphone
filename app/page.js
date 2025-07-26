"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function formatTanggalIndo(tanggalString) {
  const tanggal = new Date(tanggalString);
  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/article")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.slice(0, 3)); // Ambil 3 artikel pertama
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white flex flex-col justify-between min-h-[700px] md:min-h-[600px] px-4 md:px-10 pt-10 pb-32 md:pb-10">
        <Image
          src="/images/rentaiphone_bg.png"
          alt="Scooter Hero"
          fill
          className="object-cover opacity-30"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
            <Image
              src="/images/iphone2+bayangan.png"
              alt="Iphone dengan Bayangan"
              width={500}
              height={500}
              className="w-[180px] sm:w-[280px] md:w-[400px] lg:w-[500px]"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right px-2 md:px-0 md:pr-28">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold italic leading-tight">
              Pixelnesia
            </h1>
            <p className="mt-4 text-base sm:text-xl md:text-2xl leading-relaxed">
              Nikmati pengalaman menggunakan smartphone <br className="hidden sm:block" />
              terbaru tanpa beban biaya mahal. Sewa mudah, <br className="hidden sm:block" />
              cepat, dan aman
            </p>
            <div className="mt-6 flex justify-end gap-2 flex-wrap">
              <a href="/DaftarUnit" className="bg-yellow-300 text-black px-6 py-2 rounded-l-full shadow hover:bg-gray-100">
                Lihat Daftar Iphone
              </a>
              <a href="/Kontak" className="bg-yellow-300 text-black px-6 py-2 rounded-r-full shadow hover:bg-gray-100 text-md text-center">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              ["icon_pelayanan.png", "Pelayanan Terbaik"],
              ["icon_keamanan.png", "Keamanan Terjaga"],
              ["icon_perawatan.png", "Perawatan Rutin"],
              ["icon_truk.png", "Cash On Delivery"],
            ].map(([icon, label], i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <Image src={`/images/${icon}`} alt={label} width={40} height={40} />
                <p className="text-sm md:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Artikel Terbaru */}
      <section className="bg-[#FFDD00] px-4 sm:px-8 md:px-20 py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
          {articles[0] && (
            <div className="bg-white rounded-xl shadow-lg w-full lg:w-[2100px] h-auto lg:h-[500px] overflow-hidden">
              <div className="w-full h-64 lg:h-80 relative">
                <Image
                  src={`http://localhost:3333/${articles[0].thumbnail}`}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
                <Link
                  href={`/artikel/${articles[0].slug}`}
                  className="absolute bottom-3 right-3 bg-white text-sm text-black px-4 py-1 rounded-full shadow hover:bg-gray-200"
                >
                  Lihat Detail Artikel
                </Link>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-black">{articles[0].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {articles[0].content}
                </p>
              </div>
            </div>
          )}

          <div className="w-full flex flex-col gap-4">
            {[articles[1], articles[2]].map(
              (item, index) =>
                item && (
                  <Link
                    key={index}
                    href={`/artikel/${item.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col w-full"
                  >
                    <div className="w-full h-64 lg:h-30 relative">
                      <Image
                        src={`http://localhost:3333/${item.thumbnail}`}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base lg:text-sm font-semibold text-black line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm lg:text-xs text-gray-600 line-clamp-2">{item.content}</p>
                    </div>
                  </Link>
                )
            )}
            <Link
              href="/artikel"
              className="bg-white text-center text-black font-semibold py-2 rounded-xl shadow hover:bg-yellow-100 mt-2"
            >
              Jelajahi Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Produk Highlight */}
      <section className="bg-white py-10 px-6 md:px-20 text-black">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Pixelnesia</h2>
            <h3 className="text-xl font-semibold mb-3">Rental Iphone Indonesia</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Sebagai bagian dari ekosistem layanan PT Dahlia Global Indo, Pixelnesia hadir untuk menjawab kebutuhan masyarakat modern yang
              menginginkan akses mudah terhadap perangkat teknologi tanpa harus membeli...
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/image1+border.png"
              alt="Produk Iphone"
              width={500}
              height={500}
              className="w-full max-w-sm mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-yellow-300 text-black px-6 py-12 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kenapa Harus Memilih <br /> Pixelnesia?
            </h2>
            <div className="flex flex-col gap-4">
              {[
                ["icon-syarat.png", "Syarat Sewa yang Ringan dan Tidak Ribet"],
                ["icon-kualitas.png", "Kualitas iPhone Terjamin dan Sudah Legal"],
                ["icon-pembayaran.png", "Metode Pembayaran Aman dan Profesional"],
              ].map(([icon, text], i) => (
                <div
                  key={i}
                  className="bg-white text-black p-3 rounded shadow flex items-center gap-3 h-[90px] w-full max-w-full sm:max-w-[480px]"
                >
                  <Image src={`/images/${icon}`} alt={text} width={64} height={64} className="w-16 h-16 object-contain" />
                  <p className="text-base font-semibold sm:text-lg leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              ["icon-verif.png", "Verifikasi Data Cepat dan Mudah"],
              ["icon-terbuka.png", "Terbuka untuk Semua Kalangan"],
              ["icon-cod.png", "Layanan Antar Jemput Fleksibel (COD)"],
              ["icon-data.png", "Data Pribadi Pelanggan Terjamin Aman"],
            ].map(([icon, text], i) => (
              <div
                key={i}
                className="bg-white text-black p-3 rounded shadow flex items-center gap-3 h-[90px] w-full max-w-full sm:max-w-[480px]"
              >
                <Image src={`/images/${icon}`} alt={text} width={64} height={64} className="w-16 h-16 object-contain" />
                <p className="text-base font-semibold sm:text-lg leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komitmen & Showcase */}
      <section className="bg-gray-900 text-white text-center py-14 px-4 sm:px-6">
        <style>{`
          @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <p className="text-xl sm:text-2xl mb-5">
          Kami berkomitmen untuk menyediakan unit iPhone terbaik bagi setiap penyewa, <br />
          karena kenyamanan, kepuasan, dan keamanan Anda adalah prioritas utama kami.
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          NIKMATI PERJALANANMU
        </h1>

        <div className="overflow-hidden w-full mb-8">
          <div className="flex gap-6 w-max" style={{ animation: "scroll-loop 20s linear infinite" }}>
            {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((n, i) => (
              <Image
                key={i}
                src={`/images/handphone${n}.png`}
                alt={`handphone ${n}`}
                width={100}
                height={100}
                className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
              />
            ))}
          </div>
        </div>

        <a
          href="/DaftarUnit"
          className="bg-white text-red-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 text-sm font-semibold"
        >
          Lihat Daftar Iphone Pixelnesia
        </a>
      </section>

      <Footer />
    </div>
  );
}
