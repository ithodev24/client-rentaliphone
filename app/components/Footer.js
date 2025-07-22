"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Ornamen kiri atas */}
      <img
        src="/images/logo_footer1.png"
        alt="Ornamen Kiri"
        className="absolute top-[-1px] left-0 w-40 md:w-[400px] z-0"
      />
      {/* Ornamen kanan atas */}
      <img
        src="/images/logo_footer.png"
        alt="Ornamen Kanan"
        className="absolute top-0 right-0 w-32 md:w-44 lg:w-52 mb-6 z-0"
      />

      {/* Isi utama */}
      <div className="relative z-10 container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1 */}
        <div className="flex flex-col items-start gap-6">
          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/rentalday.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon_fb.png" alt="Facebook" className="w-7 h-7" />
            </a>
            <a
              href="https://tiktok.com/@rentalday.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon_tt.png" alt="TikTok" className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icon_wa.png" alt="WhatsApp" className="w-7 h-7" />
            </a>
          </div>

          {/* Logo Bank */}
          <div className="-ml-10 md:-ml-20 bg-yellow-300 rounded-full px-6 py-2 shadow-md flex flex-wrap items-center space-x-4">
            <img src="/images/pm_bni.png" alt="BNI" className="h-8" />
            <img src="/images/pm_bca.png" alt="BCA" className="h-8" />
            <img src="/images/pm_mandiri.png" alt="Mandiri" className="h-8" />
            <img src="/images/pm_qris.png" alt="QRIS" className="h-8" />
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li><Link href="/"><span className="hover:text-yellow-500 cursor-pointer">Beranda</span></Link></li>
              <li><Link href="/DaftarUnit"><span className="hover:text-yellow-500 cursor-pointer">Daftar Motor</span></Link></li>
              <li><Link href="/Testimoni"><span className="hover:text-yellow-500 cursor-pointer">Testimoni</span></Link></li>
              <li><Link href="/Kontak"><span className="hover:text-yellow-500 cursor-pointer">Kontak</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="mt-1">
              <a href="mailto:ptdahliglobalindo@gmail.com" className="hover:text-yellow-500">ptdahliglobalindo@gmail.com</a>
            </p>
            <p>
              <a href="https://wa.me/628153135669" className="hover:text-yellow-500">(+62) 815 3135 669 (Jakarta) </a>
            </p>
            {/* <p>Jakarta, Bekasi & Bandung</p> */}
            <Link href="/Kontak">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition mt-2 text-sm font-medium px-4 py-2 rounded-full">
              Lihat Kontak Lainnya
            </button>
            </Link>
          </div>
        </div>

        {/* Kolom 3 */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
          <p>
            <a
              href="https://www.google.com/maps?q=Jl.+PSM+RW+No.36,+Kebun+Jayanti,+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Jl. Kayu Manis Timur II No.53, Matraman, Kota Jakarta Timur, Jakarta (Jakarta)
            </a>
          </p>
          {/* <p className="mt-1">Bandung</p> */}
          <Link href="/Kontak">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition mt-2 text-sm font-medium px-4 py-2 rounded-full">
            Lihat Alamat Lainnya
          </button>
          </Link>
        </div>
      </div>

      {/* Footer bawah */}
      {/* <div className="bg-yellow-400 py-2 text-center text-xs text-black">
        ©Riyadatunnisa. Hak Cipta Dilindungi oleh undang-undang. |{" "}
        <a href="https://goent.id" target="_blank" rel="noopener noreferrer" className="underline">
          Powered by GoEnt
        </a>
      </div> */}
    </footer>
  );
}
