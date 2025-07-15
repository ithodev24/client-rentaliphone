"use client";
import React, { useState, useEffect } from "react";

const locations = [
  {
    kota: "Jakarta",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.374460300056!2d106.8536393!3d-6.2114259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3021a5e5031%3A0x1c839aa7466a2bc4!2sJl.%20Kayu%20Manis%20Timur%20II%20No.53%2C%20Matraman%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1721021520070!5m2!1sid!2sid",
    alamat: "Jl. Kayu Manis Timur II No.53, Matraman, Kota Jakarta Timur, Jakarta",
    link: "https://maps.app.goo.gl/jfrzkvbYfkLzwYAN9?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Bekasi",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4163041348991!2d106.9594571!3d-6.2463269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d0a0e96d26d%3A0xc8a2ff0489301e1b!2sJl.%20Kedung%20Waringin%20No.8%2C%20Bekasi%20Timur!5e0!3m2!1sid!2sid!4v1721021582746!5m2!1sid!2sid",
    alamat: "Jl. Kedung Waringin No.8, Bekasi Timur, Bekasi",
    link: "https://maps.app.goo.gl/1WEKERBsTM7RcuAt8?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Bandung",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.826265905271!2d107.60074937588963!3d-6.910238967589021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6201f5c09c1%3A0x1a2e3e63c527336b!2sRentalday%20Cab%202!5e0!3m2!1sid!2sid!4v1687582111111!5m2!1sid!2sid",
    alamat: "Jalan PSM Dalam, Jl PSM No.63, RW15, Kebon Jayanti, Kota Bandung, Jawa Barat",
    link: "https://maps.app.goo.gl/8AmPdyHtvEVhTRdm7?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Bali",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3491861587963!2d115.20369237591102!3d-8.642910187465966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24719e1165f97%3A0x7f055c3e50f62f6c!2sBali%20Rider!5e0!3m2!1sid!2sid!4v1687582123456!5m2!1sid!2sid",
    alamat: "Jl. Raya Pupuan, Dauh Puri, Kec. Denpasar Barat, Kota Denpasar, Bali",
    link: "https://maps.app.goo.gl/ceWTHE1Wm2zQ7dU59?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Surabaya",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.663733666318!2d112.7354067759023!3d-7.391934172922382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb4cb1a92b65%3A0xd002d29e96491af8!2sJl.%20Jimbar%20Ngawinan%20I%20No.31%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1721021605541!5m2!1sid!2sid",
    alamat: "Jl. Jimbar Ngawinan I No.31, Wonosobo, Surabaya, Jawa Timur",
    link: "https://maps.app.goo.gl/vQ5wS9MzWDg6fgzY9?g_st=com.google.maps.preview.copy"
  },
  {
    kota: "Purwokerto",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9280737757423!2d109.23359187590778!3d-7.796427792214827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ef6c37970d3%3A0x3e7ad1a5c2c1bc12!2sJl.%20Jenderal%20Sudirman%20No.100%2C%20Purwokerto!5e0!3m2!1sid!2sid!4v1721021635379!5m2!1sid!2sid",
    alamat: "Jl. Jenderal Sudirman No.100, Purwokerto, Banyumas, Jawa Tengah",
    link: "https://maps.app.goo.gl/AUQEj9toeZMrs74o8?g_st=ic"
  },
  {
    kota: "Malang",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.202782857075!2d112.62660357591018!3d-7.977671692064582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78828e465b0501%3A0x6bc573ff630d0f07!2sJl.%20Ijen%20No.50%2C%20Malang!5e0!3m2!1sid!2sid!4v1721021674047!5m2!1sid!2sid",
    alamat: "Jl. Ijen No.50, Klojen, Malang, Jawa Timur",
    link: "https://maps.app.goo.gl/example-malang" //malang menyusul
  }
];

export default function MapsKontak() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(4);
      }
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    if (startIndex + itemsPerView < locations.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visible = locations.slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`grid gap-8 transition-all duration-300 ${
            itemsPerView === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          }`}
        >
          {visible.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="relative w-full h-52 sm:h-60">
                <iframe
                  src={loc.embedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-2 bg-yellow-300 text-black font-bold px-4 py-1 rounded-r-full text-sm shadow-md">
                  {loc.kota}
                </div>
              </div>
              <div className="p-4 text-sm text-gray-800">
                <a
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  {loc.alamat}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="bg-yellow-300 rounded-full px-5 py-2 shadow-md flex gap-4">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className={`text-blue-800 text-3xl font-bold ${
                startIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              &lt;
            </button>
            <button
              onClick={next}
              disabled={startIndex + itemsPerView >= locations.length}
              className={`text-blue-800 text-3xl font-bold ${
                startIndex + itemsPerView >= locations.length
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
