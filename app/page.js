import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <Navbar />

{/* Hero Section */}
<section className="relative bg-black text-white flex flex-col justify-between min-h-[700px] md:min-h-[600px] px-4 md:px-10 pt-10 pb-32 md:pb-10">
  <img
    src="/images/rentaiphone_bg.png"
    alt="Scooter Hero"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
    {/* Gambar iPhone */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
      <img
        src="/images/iphone2+bayangan.png"
        alt="Iphone dengan Bayangan"
        className="w-[180px] sm:w-[280px] md:w-[400px] lg:w-[500px]"
      />
    </div>

    {/* Teks dan tombol */}
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
        <a
          href="/DaftarUnit"
          className="bg-yellow-300 text-black px-6 py-2 rounded-l-full shadow hover:bg-gray-100"
        >
          Lihat Daftar Iphone
        </a>
        <a
          href="/Kontak"
          className="bg-yellow-300 text-black px-6 py-2 rounded-r-full shadow hover:bg-gray-100 text-md text-center"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  </div>

        <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              ['icon_pelayanan.png', 'Pelayanan Terbaik'],
              ['icon_keamanan.png', 'Keamanan Terjaga'],
              ['icon_perawatan.png', 'Perawatan Rutin'],
              ['icon_truk.png', 'Cash On Delivery']
            ].map(([icon, label], i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <img src={`/images/${icon}`} className="w-10 h-10" />
                <p className="text-sm md:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Highlight */}
      <section className="bg-yellow-300 py-10 px-6 md:px-20 text-black">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Pixelnesia</h2>
            <h3 className="text-xl font-semibold mb-3">Rental Iphone Indonesia</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Sebagai bagian dari ekosistem layanan PT Dahlia Global Indo, Pixelnesia hadir untuk menjawab kebutuhan masyarakat modern yang menginginkan akses mudah terhadap perangkat teknologi tanpa harus membeli. Pixelnesia menyediakan layanan rental Iphone yang fleksibel, ekonomis, dan terpercaya, cocok untuk berbagai kebutuhan pribadi maupun profesional.
              <br></br><br></br>
              Melalui Pixelnesia, pelanggan dapat menikmati kemudahan dalam menyewa Iphone, mulai dari proses pemesanan yang cepat, pilihan perangkat terbaru yang terawat, hingga dukungan layanan pelanggan yang sigap dan informatif. Komitmen PT Dahlia Global Indo dalam menghadirkan layanan unggulan tercermin dalam setiap aspek Pixelnesia, menjadikannya solusi cerdas untuk gaya hidup digital masa kini.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/image1+border.png"
              alt="Produk Iphone"
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
          ['icon-syarat.png', 'Syarat Sewa yang Ringan dan Tidak Ribet'],
          ['icon-kualitas.png', 'Kualitas iPhone Terjamin dan Sudah Legal'],
          ['icon-pembayaran.png', 'Metode Pembayaran Aman dan Profesional'],
        ].map(([icon, text], i) => (
          <div
            key={i}
            className="bg-black text-white p-4 rounded shadow flex items-center gap-4 h-[110px] w-full max-w-[520px]"
          >
            <img src={`/images/${icon}`} className="w-12 h-12 object-contain" />
            <p className="text-lg sm:text-xl md:text-2xl leading-snug">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-4">
      {[
        ['icon-verif.png', 'Verifikasi Data Cepat dan Mudah'],
        ['icon-terbuka.png', 'Terbuka untuk Semua Kalangan'],
        ['icon-cod.png', 'Layanan Antar Jemput Fleksibel (COD)'],
        ['icon-data.png', 'Data Pribadi Pelanggan Terjamin Aman'],
      ].map(([icon, text], i) => (
        <div
          key={i}
          className="bg-black text-white p-4 rounded shadow flex items-center gap-4 h-[110px] w-full max-w-[520px]"
        >
          <img src={`/images/${icon}`} className="w-12 h-12 object-contain" />
          <p className="text-lg sm:text-xl md:text-2xl leading-snug">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Komitmen & Showcase Iphone */}
      <section className="bg-gray-900 text-white text-center py-14 px-4 sm:px-6">
        {/* Animasi */}
        <style>{`
          @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <p className="text-xl sm:text-2xl mb-5">
          Kami berkomitmen untuk menyediakan unit iPhone terbaik bagi setiap penyewa, <br>
          </br>karena kenyamanan, kepuasan, dan keamanan Anda adalah prioritas utama kami.
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          NIKMATI PERJALANANMU
        </h1>

        <div className="overflow-hidden w-full mb-8">
          <div
            className="flex gap-6 w-max"
            style={{ animation: 'scroll-loop 20s linear infinite' }}
          >
          {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((n, i) => (
            <img
              key={i}
              src={`/images/handphone${n}.png`}
              alt={`handphone ${n}`}
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
