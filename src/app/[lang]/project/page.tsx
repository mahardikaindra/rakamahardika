import React from 'react';
// Mengimpor ikon dari lucide-react untuk mempercantik tampilan
import { FolderGit, ExternalLink } from 'lucide-react';

// Data proyek yang diambil dari resume Anda
const projects = [
  {
    name: "Octo Smart App (CIMB Niaga)",
    company: "PT IDStar Cipta Teknologi",
    period: "September 2023 - Maret 2025",
    tools: ["React Native", "Redux", "Android", "JavaScript", "TypeScript", "Firebase", "CI/CD"],
    description: "Mendesain dan mengirimkan fitur pembiayaan untuk Octo Smart CNAF menggunakan React Native dan Redux, berdampak pada lebih dari 10.000 pengguna. Mengembangkan dan mengirimkan Arjuna, modul perencanaan pengembangan menggunakan React.js, TypeScript, dan Redux.",
    link: "https://play.google.com/store/apps/details?id=com.rm_tools&hl=id" // Ganti dengan link proyek jika ada
  },
  {
    name: "Arjuna",
    company: "PT IDStar Cipta Teknologi",
    period: "September 2023 - Maret 2025",
    tools: ["ReactJS", "Redux", "Android", "TailwindCSS", "TypeScript", "CI/CD"],
    description: "Mendesain dan mengirimkan fitur pembiayaan untuk Octo Smart CNAF menggunakan React Native dan Redux, berdampak pada lebih dari 10.000 pengguna. Mengembangkan dan mengirimkan Arjuna, modul perencanaan pengembangan menggunakan React.js, TypeScript, dan Redux.",
    link: "https://play.google.com/store/apps/details?id=com.cimb.arjuna&hl=id" // Ganti dengan link proyek jika ada
  },
  {
    name: "Padi UMKM",
    company: "PT Solusi Konvergen Indonesia",
    period: "Maret 2020 - Desember 2023",
    tools: ["React Native", "Redux", "Android", "iOS", "JavaScript", "TypeScript", "Firebase", "CI/CD", "NodeJS", "Swagger"],
    description: "Mengembangkan dan meluncurkan 3 aplikasi seluler (Bonum, MySooltan, Padi UMKM) menggunakan React.js dan Redux, memastikan fungsionalitas yang lancar dan pengalaman pengguna yang ramah di berbagai platform.",
    link: "https://play.google.com/store/apps/details?id=com.telkom.padiumkmseller&hl=id&gl=US" // Ganti dengan link proyek jika ada
  },
  {
    name: "MySooltan",
    company: "PT Solusi Konvergen Indonesia",
    period: "Maret 2020 - Desember 2023",
    tools: ["React Native", "Redux", "Android", "iOS", "JavaScript", "TypeScript", "ReactJS", "Firebase", "CI/CD", "NodeJS", "Swagger"],
    description: "Mengembangkan dan meluncurkan 3 aplikasi seluler (Bonum, MySooltan, Padi UMKM) menggunakan React.js dan Redux, memastikan fungsionalitas yang lancar dan pengalaman pengguna yang ramah di berbagai platform.",
    link: "https://leap.digitalbisa.id/uploads/products/files/MySooltan.pdf" // Ganti dengan link proyek jika ada
  },
  {
    name: "Qareer, Qerja, Karir.com",
    company: "PT Qareer Harapan Asia",
    period: "November 2018 - Maret 2020",
    tools: ["React Native", "Android", "iOS", "Redux", "JavaScript", "Mobx", "Firebase", "CI/CD"],
    description: "Mengembangkan dan meluncurkan 3 aplikasi seluler (Qareer, Qerja, Karir.com) menggunakan React.js dan Redux, memastikan fungsionalitas yang lancar dan pengalaman pengguna yang ramah di berbagai platform.",
    link: "https://karir.com/"
  },
  {
    name: "Qiwii",
    company: "PT Nuesto Teknologi Indonesia",
    period: "Maret 2018 - November 2018",
    tools: ["React Native", "Redux", "Android", "iOS", "JavaScript", "Jira"],
    description: "Mengembangkan dan meluncurkan aplikasi seluler Qiwii menggunakan React.js dan Redux.",
    link: "https://play.google.com/store/apps/details?id=com.qiwii&hl=id"
  },
  {
    name: "Wardrobe (unrelease)",
    company: "41Studio",
    period: "Juli 2017 - Maret 2018",
    tools: ["React Native", "Swift", "Java", "Apiary"],
    description: "Mengembangkan aplikasi wardrobe menggunakan React Native dan Redux, memastikan fungsionalitas yang lancar dan pengalaman pengguna yang ramah.",
    link: "#"
  },
];

// Komponen Halaman Proyek
const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-white p-8">
        {/* Grid untuk menampilkan kartu proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
            // Kartu Proyek
            <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-1">{project.company}</p>
            <p className="text-gray-600 text-xs mb-3">{project.period}</p>
            <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>

            {/* Daftar Tools */}
            <div className="mb-4">
                <span className="font-semibold text-gray-800 text-sm">Tools:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, toolIndex) => (
                    <span
                    key={toolIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                    {tool}
                    </span>
                ))}
                </div>
            </div>

            {/* Link Proyek (jika ada) */}
            {project.link && (
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-auto"
                >
                Lihat Proyek <ExternalLink className="ml-1" size={16} />
                </a>
            )}
            </div>
        ))}
        </div>
    </section>
  );
};

export default ProjectsPage;
