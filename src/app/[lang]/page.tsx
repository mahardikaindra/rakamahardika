import React from "react";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Code,
  Globe,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import LinkedIn from "@/components/icons/svg/LinkedIn";

export default function Home() {
  return (
    <div className="font-inter antialiased bg-gray-50 text-gray-800">
      {/* Navbar - Navigasi tetap di bagian atas */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm p-4 md:p-6 flex justify-center rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          {/* Nama di navigasi, berfungsi sebagai link ke bagian atas halaman */}
          <a
            href="#"
            className="font-bold text-xl text-blue-600 rounded-md p-2 hover:bg-blue-50 transition-colors"
          >
            Raka Mahardika
          </a>
          {/* Link navigasi untuk desktop */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Tentang Saya
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Keahlian
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Pengalaman
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Pendidikan
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Kontak
            </a>
          </div>
          {/* Tombol menu mobile (hamburger) - bisa diimplementasikan dengan state untuk membuka/menutup menu */}
          <button className="md:hidden text-gray-600 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Konten utama halaman */}
      <main className="container mx-auto px-4 py-8 pt-20 md:py-12 md:pt-24">
        {/* Bagian Hero - Pengenalan utama */}
        <section
          id="hero"
          className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 md:py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg mb-12 md:mb-16 p-8"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            {/* Judul utama dengan animasi fade-in */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
              RAKA MAHARDIKA
            </h1>
            {/* Sub-judul dengan animasi fade-in */}
            <p className="text-xl md:text-2xl font-semibold mb-6 animate-fade-in-down delay-100">
              Senior Frontend & Mobile Developer
            </p>
            {/* Deskripsi singkat dengan animasi fade-in */}
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-down delay-200">
              Berpengalaman 7+ tahun dalam membangun aplikasi lintas platform.
              Spesialisasi di React Native, Flutter, dan implementasi CI/CD.
            </p>
            {/* Tombol Call to Action dengan animasi fade-in */}
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-down delay-300">
              <a
                href="#experience"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-100 transition-all transform hover:scale-105 flex items-center"
              >
                Lihat Portofolio <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
          {/* Placeholder untuk gambar profil atau ilustrasi */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="https://placehold.co/400x400/60A5FA/FFFFFF.png?text=Raka" // Placeholder image
              alt="Ilustrasi Profil Raka Mahardika"
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl animate-fade-in-right"
              priority
            />
          </div>
        </section>

        {/* Bagian Tentang Saya */}
        <section
          id="about"
          className="bg-white p-8 md:p-12 rounded-xl shadow-md mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={32} /> Tentang Saya
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Saya adalah seorang Mobile dan Web Developer berpengalaman dengan
            lebih dari 7 tahun keahlian dalam membangun aplikasi lintas
            platform. Saya telah berhasil meluncurkan lebih dari 10 aplikasi di
            App Store dan Play Store, dengan spesialisasi di React Native dan
            Flutter. Saya terampil dalam mengimplementasikan pipeline CI/CD,
            integrasi Firebase, dan Clean Architecture untuk memberikan solusi
            yang ramah pengguna dan scalable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Selain itu, saya juga berpengalaman dalam Analisis Data dan Business
            Intelligence, dengan pemahaman yang kuat tentang pengambilan
            keputusan berbasis data, pembuatan dashboard, dan integrasi analitik
            untuk mendukung tujuan produk dan bisnis.
          </p>
          {/* Informasi kontak cepat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center">
              <Mail className="mr-2 text-blue-600" size={20} />
              <span className="font-semibold">Email:</span>{" "}
              rakamahardika22@gmail.com
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-blue-600" size={20} />
              <span className="font-semibold">Telepon:</span> +62 822 4007 2717
            </div>
            <div className="flex items-center">
              <LinkedIn className="mr-2 text-blue-600" size={20} />
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/raka-mahardika-792462121/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/rakamahardika
              </a>
            </div>
            <div className="flex items-center">
              <Globe className="mr-2 text-blue-600" size={20} />
              <span className="font-semibold">Website:</span>{" "}
              <a
                href="https://www.rakamahardika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.rakamahardika.com
              </a>
            </div>
          </div>
        </section>

        {/* Bagian Keahlian & Teknologi */}
        <section
          id="skills"
          className="bg-white p-8 md:p-12 rounded-xl shadow-md mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <Code className="mr-3 text-blue-600" size={32} /> Keahlian &
            Teknologi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kategori Mobile Frameworks */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">📱</span> Mobile Frameworks
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>React Native</li>
                <li>Flutter</li>
              </ul>
            </div>
            {/* Kategori Frontend Frameworks & Libraries */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">💻</span> Frontend
                Frameworks & Libraries
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Redux</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            {/* Kategori Database Management */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">🗄️</span> Database
                Management
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Firebase</li>
                <li>MySQL</li>
                <li>Database Design</li>
              </ul>
            </div>
            {/* Kategori Tools */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">🛠️</span> Tools
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Git</li>
                <li>Firebase</li>
                <li>Jest</li>
                <li>Scrum</li>
                <li>CI/CD Pipelines</li>
                <li>Power BI</li>
                <li>Tableau</li>
              </ul>
            </div>
            {/* Kategori Languages */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2">💬</span> Languages
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Dart</li>
                <li>Kotlin</li>
                <li>Java</li>
                <li>Python</li>
                <li>NodeJs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bagian Pengalaman Kerja */}
        <section
          id="experience"
          className="bg-white p-8 md:p-12 rounded-xl shadow-md mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={32} /> Pengalaman
            Kerja
          </h2>

          {/* Pengalaman: PT IDStar Cipta Teknologi */}
          <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Mobile & Frontend Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              PT IDStar Cipta Teknologi
            </p>
            <p className="text-gray-600 text-sm mb-4">
              September 2023 - Maret 2025
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> React Native, Redux,
              Android, ReactJS, Tailwindcss, Typescript, CI/CD
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mendesain dan mengirimkan fitur pembiayaan untuk Octo Smart CNAF
                menggunakan React Native dan Redux, berdampak pada lebih dari
                10.000 pengguna.
              </li>
              <li>
                Membuat dan memelihara library internal untuk berbagai aplikasi,
                meningkatkan reusabilitas kode.
              </li>
              <li>
                Mengembangkan dan mengirimkan Arjuna, proyek modul perencanaan
                pengembangan menggunakan React.js, TypeScript, dan Redux.
              </li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>
                Bekerja dalam lingkungan pengembangan Agile, menggunakan Taiga
                dan Git.
              </li>
            </ul>
          </div>

          {/* Pengalaman: PT Solusi Konvergen Indonesia */}
          <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              React Native Developer & Frontend Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              PT Solusi Konvergen Indonesia
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Maret 2020 - Desember 2023
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> React Native, Redux,
              Android, iOS, JavaScript, TypeScipt, ReactJS, Firebase, CI/CD,
              NodeJS, Swagger
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mengembangkan dan meluncurkan 3 aplikasi seluler (Bonum,
                MySooltan, Padi UMKM) menggunakan React.js dan Redux.
              </li>
              <li>
                Mengimplementasikan pengujian otomatis menggunakan Jest dan
                Cypress, memastikan cakupan pengujian 80%.
              </li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>Bekerja dalam lingkungan Agile dengan Jira dan Git.</li>
              <li>
                Membimbing 2 developer junior, meningkatkan produktivitas tim
                dan kualitas kode.
              </li>
            </ul>
          </div>

          {/* Pengalaman: PT Qareer Harapan Asia */}
          <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              React Native Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              PT Qareer Harapan Asia
            </p>
            <p className="text-gray-600 text-sm mb-4">
              November 2018 - Maret 2020
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> React Native,
              Android, iOS, Redux, JavaScript, Mobx, Firebase, CI/CD
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mengembangkan dan meluncurkan 3 aplikasi seluler (Qareer, Qerja,
                Karir.com) menggunakan React.js dan Redux.
              </li>
              <li>Mengimplementasikan rilis otomatis menggunakan CodePush.</li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>
                Membuat dan memelihara library internal untuk berbagai aplikasi.
              </li>
              <li>
                Bekerja dalam lingkungan pengembangan Agile, menggunakan Jira
                dan Git.
              </li>
            </ul>
          </div>

          {/* Pengalaman: PT Nuesto Teknologi Indonesia */}
          <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              React Native Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              PT Nuesto Teknologi Indonesia
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Maret 2018 - November 2018
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> React Native, Redux,
              Android, iOS, JavaScript, Jira
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mengembangkan dan meluncurkan aplikasi seluler Qiwii menggunakan
                React.js dan Redux.
              </li>
              <li>Membuat dan memelihara aplikasi produk internal.</li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>
                Bekerja dalam lingkungan pengembangan Agile, menggunakan Jira
                dan Git.
              </li>
            </ul>
          </div>

          {/* Pengalaman: 41Studio */}
          <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              React Native Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">41Studio</p>
            <p className="text-gray-600 text-sm mb-4">Juli 2017 - Maret 2018</p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> React Native, Swift,
              Java, Apiary
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mengembangkan aplikasi wardrobe menggunakan React Native dan
                Redux.
              </li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>
                Bekerja dalam lingkungan pengembangan Agile, menggunakan Jira
                dan Git.
              </li>
            </ul>
          </div>

          {/* Pengalaman: PT Algoritma Solusi Nusantara */}
          <div className="mb-10 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Android Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              PT Algoritma Solusi Nusantara
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Januari 2017 - Mei 2017
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> Java, Android Studio
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mengembangkan proyek klien menggunakan Java Android,
                mengoptimalkan kinerja dan memastikan kode yang mudah
                dipelihara.
              </li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>
                Bekerja dalam lingkungan pengembangan Agile, menggunakan Jira
                dan Git.
              </li>
            </ul>
          </div>

          {/* Pengalaman: PT Distribusi Indonesia */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Android Developer
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              PT Distribusi Indonesia
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Agustus 2016 - Desember 2016
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Tools:</span> Java Android,
              Android Studio
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Mengembangkan proyek internal menggunakan Java Android,
                mengoptimalkan kinerja dan memastikan kode yang mudah
                dipelihara.
              </li>
              <li>
                Berkomunikasi dan berkolaborasi dengan tim lintas fungsi untuk
                mengintegrasikan API dan mengirimkan fitur-fitur utama.
              </li>
              <li>
                Bekerja dalam lingkungan pengembangan Agile, menggunakan Jira
                dan Git.
              </li>
            </ul>
          </div>
        </section>

        {/* Bagian Pendidikan & Sertifikasi */}
        <section
          id="education"
          className="bg-white p-8 md:p-12 rounded-xl shadow-md mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={32} />{" "}
            Pendidikan & Sertifikasi
          </h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pendidikan
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">
                  Sarjana Teknik Informatika
                </span>
                <br />
                Universitas Widyatama, Bandung
              </li>
              <li>
                <span className="font-semibold">
                  Diploma Sekolah Menengah Kejuruan Teknik Komputer dan Jaringan
                </span>
                <br />
                SMK Pasundan 2 Bandung
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sertifikasi
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Google Career Certificates: Data analyst, Business Intelligence,
                UI/UX
              </li>
              <li>
                Dicoding: JavaScript, Backend Developer, Android, Kotlin, NodeJS
              </li>
              <li>Ekipa: Scrum Master Fundamental, Scrum Master</li>
            </ul>
          </div>
        </section>

        {/* Bagian Bahasa */}
        <section
          id="languages"
          className="bg-white p-8 md:p-12 rounded-xl shadow-md mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <Globe className="mr-3 text-blue-600" size={32} /> Bahasa
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Indonesia: Mahir Berbicara dan Menulis</li>
            <li>English: Mahir Berbicara dan Menulis</li>
          </ul>
        </section>

        {/* Bagian Kontak */}
        <section
          id="contact"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 md:p-12 rounded-xl shadow-lg text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tertarik untuk Berkolaborasi?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Jangan ragu untuk menghubungi saya melalui email atau LinkedIn.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:rakamahardika22@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-100 transition-all transform hover:scale-105 flex items-center"
            >
              <Mail className="mr-2" size={20} /> Email Saya
            </a>
            <a
              href="https://www.linkedin.com/in/raka-mahardika-792462121/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 flex items-center"
            >
              <LinkedIn className="mr-2" size={20} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 rounded-t-xl">
        <p>
          &copy; {new Date().getFullYear()} Raka Mahardika. Hak Cipta
          Dilindungi.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Link media sosial tambahan bisa ditambahkan di sini */}
          <a
            href="https://www.linkedin.com/in/raka-mahardika-792462121/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedIn size={24} />
          </a>
          {/* Contoh: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a> */}
        </div>
      </footer>
    </div>
  );
}
