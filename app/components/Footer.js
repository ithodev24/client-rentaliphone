"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Ornamen kiri atas */}
      <Image
        src="/images/logo_footer1.png"
        alt="Ornamen Kiri"
        width={400}
        height={200}
        className="absolute top-[10px] left-0 w-40 md:w-[400px] z-0"
      />
      {/* Ornamen kanan atas */}
      <Image
        src="/images/logo_footer.png"
        alt="Ornamen Kanan"
        width={200}
        height={200}
        className="absolute top-0 right-0 w-32 md:w-44 lg:w-52 mb-6 z-0"
      />

      {/* Isi utama */}
      <div className="relative z-10 container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1: Media Sosial & Bank */}
        <div className="flex flex-col items-start gap-6">
          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">
            <a
              href="https://www.tiktok.com/@perfectrooms.id?_t=ZS-8yJQHyTqH7i&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/icon_tt.png" alt="TikTok" width={32} height={32} className="w-8 h-8" />
            </a>

            <a
              href="https://wa.me/6281280007220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/icon_wa.png" alt="WhatsApp" width={28} height={28} className="w-7 h-7" />
            </a>
          </div>

          {/* Logo Bank */}
          <div className="-ml-10 md:-ml-20 self-start bg-[#FFDD00] rounded-full px-6 py-2 shadow-md flex items-center space-x-6">
            <Image src="/images/pm_bni.png" alt="BNI" width={64} height={32} className="h-8" />
            <Image src="/images/pm_bca.png" alt="BCA" width={64} height={32} className="h-8" />
            <Image src="/images/pm_mandiri.png" alt="Mandiri" width={64} height={32} className="h-8" />
            <Image src="/images/pm_qris.png" alt="QRIS" width={64} height={32} className="h-8" />
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/">
                  <span className="hover:text-yellow-500 cursor-pointer">Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/DaftarUnit">
                  <span className="hover:text-yellow-500 cursor-pointer">Artikel</span>
                </Link>
              </li>
              <li>
                <Link href="/DaftarUnit">
                  <span className="hover:text-yellow-500 cursor-pointer">Daftar Iphone</span>
                </Link>
              </li>
              <li>
                <Link href="/Testimoni">
                  <span className="hover:text-yellow-500 cursor-pointer">Testimoni</span>
                </Link>
              </li>
              <li>
                <Link href="/Kontak">
                  <span className="hover:text-yellow-500 cursor-pointer">Kontak</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="mt-1">
              <a href="mailto:ptdahliglobalindo@gmail.com" className="hover:text-yellow-500">
                ptdahliglobalindo@gmail.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/628153135669" className="hover:text-yellow-500">
                (+62) 815 3135 669 (Jakarta)
              </a>
            </p>
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
              Jl. Paseban Raya No.83, RT.1/RW.7, Paseban, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10440 (Jakarta)
            </a>
          </p>
          <Link href="/Kontak">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition mt-2 text-sm font-medium px-4 py-2 rounded-full">
              Lihat Alamat Lainnya
            </button>
          </Link>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="bg-[#FFDD00] py-3 text-center text-xs text-black font-medium">
        © 2025 PT Dahlia Global Indo. Seluruh hak cipta dilindungi undang-undang.
      </div>
    </footer>
  );
}
