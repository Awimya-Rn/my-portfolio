import { siteConfig, type SiteConfig } from "@/config/site";

export type Lang = "en" | "id";

/* =========================================================================
   UI strings (labels, buttons, headings)
   English is the source of truth; Indonesian must have the same shape.
   ========================================================================= */
const en = {
  toggleLanguage: "Switch language (EN / ID)",
  toggleTheme: "Toggle light/dark mode",

  nav: {
    about: "about",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    contact: "contact",
  },

  hero: {
    viewProjects: "$ view projects",
    contactMe: "$ contact me",
    downloadCv: "$ download cv",
    nf: {
      role: "Role",
      location: "Location",
      college: "College",
      gpa: "GPA",
      projects: "Projects",
    },
  },

  about: { eyebrow: "# 01 — about", title: "about_me" },

  experience: { eyebrow: "# 02 — experience", title: "work_experience" },

  projects: {
    eyebrow: "# 03 — projects",
    title: "Projects",
    modalTitle: "project",
    techStack: "Tech Stack",
    visit: "$ visit project",
  },

  skills: {
    eyebrow: "# 04 — skills",
    serverName: "Ilham's Tech Stack",
    online: (n: number) => `Online — ${n} skills loaded`,
    channels: "Skill Channels",
    achievements: "Achievements",
    certificationsLower: "certifications",
    technologies: (n: number) => `${n} technologies`,
    certifications: "Certifications",
    viewCertificate: "View certificate",
  },

  contact: {
    eyebrow: "# 05 — contact",
    title: "reach_out",
    name: "name:",
    email: "email:",
    subject: "subject:",
    message: "message:",
    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    placeholderSubject: "What's this about?",
    placeholderMessage: "Your message...",
    sending: "Sending...",
    send: "$ send_message",
    networkError: "Network error. Please try again.",
  },
};

export type UiStrings = typeof en;

const id: UiStrings = {
  toggleLanguage: "Ganti bahasa (EN / ID)",
  toggleTheme: "Ganti mode terang/gelap",

  nav: {
    about: "tentang",
    experience: "pengalaman",
    projects: "proyek",
    skills: "keahlian",
    contact: "kontak",
  },

  hero: {
    viewProjects: "$ lihat proyek",
    contactMe: "$ hubungi saya",
    downloadCv: "$ unduh cv",
    nf: {
      role: "Peran",
      location: "Lokasi",
      college: "Kampus",
      gpa: "IPK",
      projects: "Proyek",
    },
  },

  about: { eyebrow: "# 01 — tentang", title: "tentang_saya" },

  experience: { eyebrow: "# 02 — pengalaman", title: "pengalaman_kerja" },

  projects: {
    eyebrow: "# 03 — proyek",
    title: "Proyek",
    modalTitle: "proyek",
    techStack: "Teknologi yang Digunakan",
    visit: "$ kunjungi proyek",
  },

  skills: {
    eyebrow: "# 04 — keahlian",
    serverName: "Tech Stack Ilham",
    online: (n: number) => `Online — ${n} skill dimuat`,
    channels: "Kanal Skill",
    achievements: "Pencapaian",
    certificationsLower: "sertifikasi",
    technologies: (n: number) => `${n} teknologi`,
    certifications: "Sertifikasi",
    viewCertificate: "Lihat sertifikat",
  },

  contact: {
    eyebrow: "# 05 — kontak",
    title: "hubungi_saya",
    name: "nama:",
    email: "email:",
    subject: "subjek:",
    message: "pesan:",
    placeholderName: "Nama kamu",
    placeholderEmail: "kamu@email.com",
    placeholderSubject: "Tentang apa ini?",
    placeholderMessage: "Pesan kamu...",
    sending: "Mengirim...",
    send: "$ kirim_pesan",
    networkError: "Kesalahan jaringan. Silakan coba lagi.",
  },
};

export const ui: Record<Lang, UiStrings> = { en, id };

/* =========================================================================
   Indonesian overrides for the content in `siteConfig`
   Only text that should change is listed (names, URLs, icons, colors and
   brand/program names stay as defined in config/site.ts).
   ========================================================================= */
const idContent = {
  taglines: [
    'Mahasiswa Teknik Informatika di Politeknik Negeri Malang',
    'Penggemar Machine Learning & AI',
    'Lulusan Distinction — Cohort AI Engineer di Coding Camp 2026',
    'Lulusan Distinction — Cohort ML di Asah × Accenture 2025',
  ],

  neofetch: {
    role: 'AI Engineer / Penggemar ML',
    status: 'Terbuka untuk peluang',
    college: 'Politeknik Negeri Malang',
  },

  about: {
    bio: `Saya mahasiswa D4 Teknik Informatika semester lima di Politeknik Negeri Malang dan lulusan program Asah dan CodingCamp dari Dicoding, dengan spesialisasi Machine Learning dan AI. 

Kuat dalam berpikir analitis dan pemecahan masalah, dengan fokus membangun solusi teknologi yang efisien dan berbasis data.

Aktif memperdalam keahlian di bidang:`,
    expertise: [
      { text: 'Analisis Data & Data Science.' },
      { text: 'Machine Learning & AI Engineering.' },
      { text: 'Data Engineering & Sistem Back-End.' },
    ],
    bioClosing: `Bersemangat membangun sistem yang efisien dan andal serta menerapkan
pendekatan logis berbasis data untuk menghasilkan solusi yang berdampak.`,
    cards: [
      {
        label: 'pendidikan',
        title: 'D4 Teknik Informatika',
        subtitle: 'Politeknik Negeri Malang • Semester 5',
      },
      {
        label: 'lokasi',
        title: 'Malang, Jawa Timur',
        subtitle: 'Indonesia 🇮🇩',
      },
      {
        label: 'fokus',
        title: 'Machine Learning & AI Engineering',
        subtitle: 'Python • JavaScript',
      },
      {
        label: 'status',
        title: 'Terbuka untuk peluang',
        subtitle: 'Magang / Kolaborasi Proyek',
      },
    ],
  },

  experiences: [
    {
      startDate: 'Februari 2026',
      endDate: 'Juli 2026',
      duration: '6 bulan',
      badge: '🏅 Lulus dengan Predikat Distinction',
      description:
        'Studi Independen Bersertifikat Nasional yang diselenggarakan oleh Dicoding yang didukung oleh DBS Foundation. Saya menyelesaikan kurikulum intensif selama 6 bulan yang berfokus pada penerapan kecerdasan buatan (AI) dan machine learning. Selama program, saya menggunakan Python untuk memproses dan menganalisis dataset serta membangun pipeline data yang andal. Selain itu, saya menerapkan algoritma AI dan machine learning untuk menyelesaikan tantangan berdasarkan studi kasus industri nyata.',
      tags: [
        'AI Engineering',
        'Machine Learning',
        'Deep Learning',
        'Python',
        'Data Pipelines',
        'Studi Kasus Industri Nyata',
      ],
    },
    {
      startDate: 'Agustus 2025',
      endDate: 'Januari 2026',
      duration: '6 bulan',
      badge: '🏅 Lulus dengan Predikat Distinction',
      description:
        'Studi Independen Bersertifikat yang diselenggarakan oleh Dicoding bekerja sama dengan Accenture. Program intensif selama 6 bulan ini berfokus pada penerapan kecerdasan buatan (AI) dan machine learning. Saya menggunakan Python untuk memproses dan menyiapkan dataset, serta melakukan pemodelan prediktif dan analisis. Selain itu, dengan studi kasus industri nyata, saya membangun, melatih, dan mengevaluasi model machine learning.',
      tags: [
        'Machine Learning',
        'AI Engineering',
        'Python',
        'Pemrosesan Data',
        'Pemodelan Prediktif',
        'Studi Kasus Industri Nyata',
      ],
    },
    {
      location: 'Malang, Jawa Timur',
      startDate: 'September 2025',
      endDate: 'Juni 2026',
      duration: '10 bulan',
      description:
        'Aktif membimbing mentee dalam memahami dasar-dasar informatika. Memberikan materi Java dan konsep OOP untuk mempersiapkan mentee menghadapi tantangan akademik. Membagikan tips dan trik praktis untuk mengasah logika pemrograman dan kemampuan pemecahan masalah.',
    },
  ],

  projects: [
    {
      description:
        'Ini adalah capstone project dari bootcamp Asah yang dipimpin oleh Dicoding. Proyek ini mengembangkan solusi komprehensif yang dirancang untuk memantau, menganalisis, dan memprediksi kerusakan peralatan sebelum terjadi. Solusi ini memanfaatkan model machine learning yang dilatih dengan data sensor untuk mengidentifikasi pola yang menandakan potensi kerusakan, sehingga memungkinkan penjadwalan perawatan secara proaktif.',
      status: 'selesai',
      tags: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'Machine Learning',
        'Analisis Data',
      ],
    },
    {
      description:
        'Di kehidupan sebelumnya, kamu adalah seorang barista pencinta kopi, tetapi sekarang kamu telah terlempar ke dunia fantasi. Bertekad untuk membawa kopi asli ke dunia yang asing ini, Anda memutuskan untuk membuka kedai kopi sendiri. Game ini ditujukan untuk GameSeed 2025; Memadukan pengalaman nyata menjadi seorang barista dengan nuansa nostalgia game piksel awal tahun 2000-an.',
      status: 'selesai',
      tags: ['Unity', 'C#', 'Pengembangan Game'],
    },
    {
      description:
        'Ini adalah proyek akhir bootcamp yang diselenggarakan oleh Coding Camp, didukung oleh DBS Foundation. Platform ini memantau kualitas air di zona muara secara real-time dengan mengubah data historis menjadi aliran informasi yang dinamis. Platform ini dirancang untuk deteksi dini krisis ekologi dan untuk menguji model deteksi anomali, semuanya tanpa memerlukan perangkat keras fisik.',
      status: 'selesai',
      tags: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'Machine Learning',
        'Analisis Data',
      ],
    },
    {
      description:
        'Pengembangan prototipe berbasis visi komputer untuk deteksi objek dan eksplorasi pengukuran panjang ikan menggunakan referensi visual. Proyek ini berfokus pada pemanfaatan teknologi pengolahan gambar untuk mengidentifikasi objek dan mengeksplorasi estimasi otomatis ukuran ikan. Proses pengembangan saat ini sedang berlangsung, meliputi pengujian berbagai pendekatan, penyempurnaan prototipe, dan evaluasi hasil untuk meningkatkan akurasi dan keandalan sistem.',
      status: 'sedang berlangsung',
      tags: ['Python', 'Data Engineering', 'Computer Vision'],
    },
  ],
}

/** Returns the site content in the requested language. */
export function getContent(lang: Lang): SiteConfig {
  if (lang === "en") return siteConfig;

  return {
    ...siteConfig,
    personal: {
      ...siteConfig.personal,
      taglines: idContent.taglines,
      neofetch: { ...siteConfig.personal.neofetch, ...idContent.neofetch },
    },
    about: {
      ...siteConfig.about,
      bio: idContent.about.bio,
      bioClosing: idContent.about.bioClosing,
      expertise: siteConfig.about.expertise.map((item, i) => ({
        ...item,
        ...idContent.about.expertise[i],
      })),
      cards: siteConfig.about.cards.map((card, i) => ({
        ...card,
        ...idContent.about.cards[i],
      })),
    },
    experiences: siteConfig.experiences.map((exp, i) => ({
      ...exp,
      ...idContent.experiences[i],
    })),
    projects: siteConfig.projects.map((project, i) => ({
      ...project,
      ...idContent.projects[i],
    })),
  };
}
