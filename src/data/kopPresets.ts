/**
 * Preset KOP Surat Banner untuk E-Voting OSIS / OSIM Sekolah & Madrasah
 * Menggunakan vektor SVG mandiri beresolusi tinggi, siap cetak (A4 printable).
 */

export interface KopPreset {
  id: string;
  name: string;
  subtitle: string;
  category: 'SMK' | 'SMA' | 'MADRASAH' | 'YAYASAN';
  bannerUrl: string;
  defaultHeader1: string;
  defaultHeader2: string;
  defaultContact: string;
}

export const KOP_PRESETS: KopPreset[] = [
  {
    id: 'kop-smk-pgri',
    name: 'KOP Resmi SMK PGRI 2 PALIMANAN',
    subtitle: 'Format resmi YPLP PGRI & Cabang Dinas Pendidikan Jawa Barat',
    category: 'SMK',
    bannerUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 150' width='100%' height='100%'><rect width='1000' height='150' fill='%23ffffff'/><circle cx='80' cy='65' r='45' fill='%231e293b'/><circle cx='80' cy='65' r='38' fill='%230f172a'/><path d='M80 32 L92 46 L108 46 L100 62 L108 78 L92 78 L80 92 L68 78 L52 78 L60 62 L52 46 L68 46 Z' fill='%23f59e0b'/><circle cx='80' cy='62' r='14' fill='%23ffffff'/><circle cx='920' cy='65' r='45' fill='%231d4ed8'/><polygon points='920,32 950,55 938,92 902,92 890,55' fill='%23fbbf24' stroke='%23ffffff' stroke-width='2'/><circle cx='920' cy='60' r='12' fill='%23ffffff'/><text x='500' y='32' text-anchor='middle' fill='%230f172a' font-family='sans-serif' font-weight='800' font-size='15' letter-spacing='1'>YAYASAN PEMBINA LEMBAGA PENDIDIKAN PGRI (YPLP DIKDASMEN PGRI)</text><text x='500' y='52' text-anchor='middle' fill='%231e293b' font-family='sans-serif' font-weight='700' font-size='13' letter-spacing='0.5'>CABANG DINAS PENDIDIKAN WILAYAH X PROVINSI JAWA BARAT</text><text x='500' y='82' text-anchor='middle' fill='%230f172a' font-family='sans-serif' font-weight='900' font-size='24' letter-spacing='1'>SMKS PGRI 2 PALIMANAN</text><text x='500' y='105' text-anchor='middle' fill='%23475569' font-family='sans-serif' font-size='11'>Jl. Pegagan No. 1B, Palimanan, Kab. Cirebon, Jawa Barat 45161 | Telp: (0231) 883921</text><text x='500' y='122' text-anchor='middle' fill='%2364748b' font-family='sans-serif' font-size='10'>Website: www.smkspgri2palimanan.sch.id | Email: smkspgri2palimanan@gmail.com</text><line x1='30' y1='140' x2='970' y2='140' stroke='%230f172a' stroke-width='3'/><line x1='30' y1='145' x2='970' y2='145' stroke='%230f172a' stroke-width='1'/></svg>",
    defaultHeader1: 'YAYASAN PEMBINA LEMBAGA PENDIDIKAN PGRI',
    defaultHeader2: 'CABANG DINAS PENDIDIKAN WILAYAH X PROVINSI JAWA BARAT',
    defaultContact: 'Jl. Pegagan No. 1B, Palimanan, Kab. Cirebon, Jawa Barat 45161 | Telp: (0231) 883921 | Email: smkspgri2palimanan@gmail.com',
  },
  {
    id: 'kop-dinas-provinsi',
    name: 'KOP Dinas Pendidikan Provinsi (SMA/SMK Negeri)',
    subtitle: 'Standar Tata Naskah Dinas Pemerintah Daerah Provinsi & Sekolah Negeri',
    category: 'SMA',
    bannerUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 150' width='100%' height='100%'><rect width='1000' height='150' fill='%23ffffff'/><circle cx='80' cy='65' r='45' fill='%23047857'/><polygon points='80,28 98,42 110,65 98,88 80,102 62,88 50,65 62,42' fill='%23fbbf24'/><circle cx='80' cy='65' r='18' fill='%23ffffff'/><circle cx='920' cy='65' r='45' fill='%231d4ed8'/><polygon points='920,32 950,55 938,92 902,92 890,55' fill='%23fbbf24' stroke='%23ffffff' stroke-width='2'/><circle cx='920' cy='60' r='12' fill='%23ffffff'/><text x='500' y='32' text-anchor='middle' fill='%230f172a' font-family='sans-serif' font-weight='800' font-size='16' letter-spacing='1'>PEMERINTAH DAERAH PROVINSI</text><text x='500' y='52' text-anchor='middle' fill='%231e293b' font-family='sans-serif' font-weight='700' font-size='14' letter-spacing='0.5'>DINAS PENDIDIKAN DAN KEBUDAYAAN</text><text x='500' y='82' text-anchor='middle' fill='%230f172a' font-family='sans-serif' font-weight='900' font-size='23' letter-spacing='1'>SEKOLAH MENENGAH ATAS / KEJURUAN NEGERI</text><text x='500' y='105' text-anchor='middle' fill='%23475569' font-family='sans-serif' font-size='11'>Jalan Pendidikan No. 100, Kawasan Pusat Pendidikan | Telepon: (021) 555-1234</text><text x='500' y='122' text-anchor='middle' fill='%2364748b' font-family='sans-serif' font-size='10'>Laman Resmi: https://sekolah.sch.id | Pos-el: info@sekolah.sch.id</text><line x1='30' y1='140' x2='970' y2='140' stroke='%230f172a' stroke-width='3.5'/><line x1='30' y1='146' x2='970' y2='146' stroke='%230f172a' stroke-width='1'/></svg>",
    defaultHeader1: 'PEMERINTAH DAERAH PROVINSI',
    defaultHeader2: 'DINAS PENDIDIKAN DAN KEBUDAYAAN',
    defaultContact: 'Jalan Pendidikan No. 100 | Telepon: (021) 555-1234 | Pos-el: info@sekolah.sch.id',
  },
  {
    id: 'kop-kemenag-madrasah',
    name: 'KOP Kementerian Agama (Madrasah Aliyah / MTs)',
    subtitle: 'Standar resmi Kemenag RI Ikhlas Beramal & Kantor Wilayah Madrasah',
    category: 'MADRASAH',
    bannerUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 150' width='100%' height='100%'><rect width='1000' height='150' fill='%23ffffff'/><circle cx='80' cy='65' r='45' fill='%23064e3b'/><circle cx='80' cy='65' r='38' fill='%23047857'/><path d='M80 32 C94 32 104 42 104 56 C104 70 92 80 80 80 C68 80 56 70 56 56 C56 42 66 32 80 32 Z' fill='%23ffffff'/><circle cx='80' cy='54' r='14' fill='%23064e3b'/><polygon points='80,44 82,50 88,50 83,54 85,60 80,56 75,60 77,54 72,50 78,50' fill='%23fbbf24'/><circle cx='920' cy='65' r='45' fill='%23065f46'/><circle cx='920' cy='65' r='36' fill='%23047857'/><text x='920' y='72' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-weight='900' font-size='18'>OSIM</text><text x='500' y='32' text-anchor='middle' fill='%23064e3b' font-family='sans-serif' font-weight='800' font-size='15' letter-spacing='1'>KEMENTERIAN AGAMA REPUBLIK INDONESIA</text><text x='500' y='52' text-anchor='middle' fill='%23047857' font-family='sans-serif' font-weight='700' font-size='13' letter-spacing='0.5'>KANTOR WILAYAH KEMENTERIAN AGAMA PROVINSI</text><text x='500' y='82' text-anchor='middle' fill='%23064e3b' font-family='sans-serif' font-weight='900' font-size='24' letter-spacing='1'>MADRASAH ALIYAH NEGERI / SWASTA</text><text x='500' y='105' text-anchor='middle' fill='%23475569' font-family='sans-serif' font-size='11'>Jl. Pesantren Luhur No. 99 | Telepon: (021) 789-0123</text><text x='500' y='122' text-anchor='middle' fill='%2364748b' font-family='sans-serif' font-size='10'>Website: https://madrasah.kemenag.go.id | Email: madrasah@kemenag.go.id</text><line x1='30' y1='140' x2='970' y2='140' stroke='%23064e3b' stroke-width='3.5'/><line x1='30' y1='146' x2='970' y2='146' stroke='%23064e3b' stroke-width='1'/></svg>",
    defaultHeader1: 'KEMENTERIAN AGAMA REPUBLIK INDONESIA',
    defaultHeader2: 'KANTOR WILAYAH KEMENTERIAN AGAMA',
    defaultContact: 'Jl. Pesantren Luhur No. 99 | Telepon: (021) 789-0123 | Email: madrasah@kemenag.go.id',
  },
  {
    id: 'kop-yayasan-swasta',
    name: 'KOP Yayasan Pendidikan Islam / Swasta',
    subtitle: 'Format resmi untuk SMA/SMK/MA di bawah naungan Badan Penyelenggara Yayasan',
    category: 'YAYASAN',
    bannerUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 150' width='100%' height='100%'><rect width='1000' height='150' fill='%23ffffff'/><circle cx='80' cy='65' r='45' fill='%234338ca'/><circle cx='80' cy='65' r='38' fill='%233730a3'/><polygon points='80,30 95,58 65,58' fill='%23fbbf24'/><polygon points='80,95 95,67 65,67' fill='%2338bdf8'/><circle cx='920' cy='65' r='45' fill='%231d4ed8'/><polygon points='920,32 950,55 938,92 902,92 890,55' fill='%23fbbf24' stroke='%23ffffff' stroke-width='2'/><circle cx='920' cy='60' r='12' fill='%23ffffff'/><text x='500' y='32' text-anchor='middle' fill='%23312e81' font-family='sans-serif' font-weight='800' font-size='16' letter-spacing='1'>YAYASAN PENDIDIKAN DAN SOSIAL BUDAYA</text><text x='500' y='52' text-anchor='middle' fill='%234338ca' font-family='sans-serif' font-weight='700' font-size='13' letter-spacing='0.5'>BADAN PENGURUS HARIAN PENDIDIKAN DASAR DAN MENENGAH</text><text x='500' y='82' text-anchor='middle' fill='%231e1b4b' font-family='sans-serif' font-weight='900' font-size='23' letter-spacing='1'>SMK / SMA KREATIF TERPADU</text><text x='500' y='105' text-anchor='middle' fill='%23475569' font-family='sans-serif' font-size='11'>Kompleks Yayasan Terpadu Blok A No. 12 | Telepon: (021) 8899-0011</text><text x='500' y='122' text-anchor='middle' fill='%2364748b' font-family='sans-serif' font-size='10'>Website: https://yayasan-terpadu.or.id | Email: info@yayasan-terpadu.or.id</text><line x1='30' y1='140' x2='970' y2='140' stroke='%23312e81' stroke-width='3.5'/><line x1='30' y1='146' x2='970' y2='146' stroke='%23312e81' stroke-width='1'/></svg>",
    defaultHeader1: 'YAYASAN PENDIDIKAN DAN SOSIAL BUDAYA',
    defaultHeader2: 'BADAN PENGURUS HARIAN PENDIDIKAN MENENGAH',
    defaultContact: 'Kompleks Yayasan Terpadu Blok A No. 12 | Telepon: (021) 8899-0011 | Email: info@yayasan-terpadu.or.id',
  },
];
