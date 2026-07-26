"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "id" | "en";
export type LocalizedText = string | { id: string; en: string };

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: LocalizedText) => string;
};

const STORAGE_KEY = "gridwiz:language";

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const domTranslations: Record<string, string> = {
  "Hubungi Gridwiz": "Contact Gridwiz",
  "Dukungan cepat untuk segala kebutuhan mobilitas elektrik Anda":
    "Fast support for all your electric mobility needs",
  "Pilih kanal komunikasi yang paling sesuai. Tim Gridwiz siap membantu, baik melalui percakapan AI yang responsif, chat langsung dengan konsultan Re:Flow, maupun korespondensi email formal.":
    "Choose the communication channel that suits you best. The Gridwiz team is ready to help through responsive AI conversations, direct chat with Re:Flow consultants, or formal email correspondence.",
  "Respons Instan": "Instant Response",
  "Mulai Percakapan": "Start Conversation",
  "Gunakan asisten AI Midflow untuk mendapatkan jawaban instan tentang layanan Gridwiz, dukungan teknis, hingga permintaan kemitraan kapan pun dibutuhkan.":
    "Use the Midflow AI assistant to get instant answers about Gridwiz services, technical support, and partnership requests whenever needed.",
  "Terhubung langsung dengan tim kami melalui WhatsApp Business Re:Flow untuk diskusi cepat, penjadwalan demo, atau kebutuhan operasional harian.":
    "Connect directly with our team through Re:Flow WhatsApp Business for quick discussions, demo scheduling, or daily operational needs.",
  "Kirimkan proposal, dokumen resmi, atau kebutuhan kerja sama melalui email agar tim kami dapat menindaklanjuti secara mendalam dan terstruktur.":
    "Send proposals, official documents, or collaboration needs by email so our team can follow up in a thorough and structured way.",
  "Kirim Email": "Send Email",
  "Preferensi Komunikasi": "Communication Preferences",
  "Sampaikan kebutuhan Anda sejelas mungkin ketika menghubungi kami, agar kami dapat menyiapkan tim dan solusi yang paling tepat. Seluruh kanal di atas dipantau secara berkala oleh tim Gridwiz.":
    "Describe your needs as clearly as possible when contacting us, so we can prepare the right team and solution. All channels above are monitored regularly by the Gridwiz team.",
  "Berita Terbaru": "Latest",
  "Gridwiz": "Gridwiz",
  "Ikuti kabar terbaru seputar inovasi, kegiatan, dan kolaborasi kami dalam mendorong mobilitas hijau di seluruh Indonesia.":
    "Follow the latest updates on our innovations, activities, and collaborations in advancing green mobility across Indonesia.",
  "Artikel & Kegiatan Terbaru": "Latest Articles & Activities",
  "Sebelumnya": "Previous",
  "Selanjutnya": "Next",
  "Tanggal": "Date",
  "Durasi Baca": "Reading Time",
  "Lokasi": "Location",
  "Kembali ke Berita": "Back to News",
  "Ringkasan Utama": "Main Summary",
  "Bagikan Artikel": "Share Article",
  "Sebarkan kabar baik ini supaya semakin banyak pihak mendukung percepatan mobilitas listrik di Indonesia.":
    "Share this good news so more people support the acceleration of electric mobility in Indonesia.",
  "Sorotan Pertemuan": "Meeting Highlights",
  "Kemitraan Strategis": "Strategic Partnership",
  "Kegiatan Sosial & Lingkungan": "Social & Environmental Activity",
  "2 menit": "2 minutes",
  "3 menit": "3 minutes",
  "PT Gridwiz Mengawali Kerja Sama Strategis untuk Mendukung Inovasi Energi Terbarukan di NTB":
    "PT Gridwiz Begins Strategic Collaboration to Support Renewable Energy Innovation in NTB",
  "PT Gridwiz menawarkan kolaborasi strategis kepada BRIDA NTB untuk mempercepat adopsi teknologi transportasi listrik yang ramah lingkungan di seluruh provinsi.":
    "PT Gridwiz offered strategic collaboration to BRIDA NTB to accelerate the adoption of environmentally friendly electric transportation technology across the province.",
  "PT Gridwiz Berpartisipasi dalam HUT ke-61 Partai Golkar NTB":
    "PT Gridwiz Participates in the 61st Anniversary of Golkar NTB",
  "PT Gridwiz turut memeriahkan Hari Ulang Tahun ke-61 Partai Golkar NTB melalui kegiatan sepeda bersama dan sosialisasi transportasi listrik ramah lingkungan di Kota Mataram.":
    "PT Gridwiz joined the 61st Anniversary of Golkar NTB through a group cycling activity and awareness campaign for environmentally friendly electric transportation in Mataram.",
  "Re:Flow bekerja sama dengan berbagai hotel di Lombok untuk menghadirkan pengalaman menginap berkelanjutan â€” menggabungkan kenyamanan, keindahan alam, dan kepedulian terhadap lingkungan.":
    "Re:Flow partners with hotels in Lombok to deliver sustainable stay experiences that combine comfort, natural beauty, and environmental care.",
  "Lihat Daftar Partner": "View Partner List",
  "Our Official Partners": "Our Official Partners",
  "Jadilah Bagian dari Perubahan": "Be Part of the Change",
  "Daftarkan Hotel atau Resort Anda sebagai mitra Re:Flow untuk mendukung pariwisata hijau di Lombok.":
    "Register your hotel or resort as a Re:Flow partner to support green tourism in Lombok.",
  "HUBUNGI ADMIN RE:FLOW": "CONTACT RE:FLOW ADMIN",
  "Re:Flow berkolaborasi dengan mitra terpilih di Lombok untuk menghadirkan pengalaman kuliner berkelanjutan yang mendukung gaya hidup hijau.":
    "Re:Flow collaborates with selected partners in Lombok to deliver sustainable culinary experiences that support a green lifestyle.",
  "Jelajahi Mitra Kami": "Explore Our Partners",
  "Official Partner Cafe": "Official Cafe Partners",
  "Ingin Menjadi Mitra Kami?": "Want to Become Our Partner?",
  "Bergabunglah dalam Ekosistem Re:Flow": "Join the Re:Flow Ecosystem",
  "HUBUNGI ADMIN": "CONTACT ADMIN",
  "Kunjungi Wisata Terbaik Di Sekitar Senggigi Bersama Re:Flow":
    "Visit the Best Attractions Around Senggigi with Re:Flow",
  "Kini Re:Flow hadir di area perhotelan untuk meningkatkan keseruan berlibur dan memudahkan eksplorasi area sekitar hotel.":
    "Re:Flow is now available in hotel areas to make holidays more exciting and make it easier to explore nearby destinations.",
  "Khusus Pembelian Membership": "For Membership Purchases Only",
  "Syarat & Ketentuan": "Terms & Conditions",
  "Berlaku untuk sekali pakai": "Valid for one-time use",
  "Tidak dapat ditukar dengan uang tunai": "Cannot be exchanged for cash",
  "Harap tunjukkan voucher ini kepada staf Cafe saat penukaran":
    "Please show this voucher to cafe staff when redeeming",
  "Voucher dapat dikumpulkan dan ditukar sesuai jumlah voucher yang dimiliki":
    "Vouchers can be collected and redeemed according to the number owned",
  "Penukaran tersedia di Bento Kopi, Madjoe, Eclair, Uttara, dan Subr":
    "Redemption is available at Bento Kopi, Madjoe, Eclair, Uttara, and Subr",
  "Claim hanya untuk pembeli paket membership":
    "Claims are only for membership package buyers",
  "Klik tombol di bawah ini": "Click the button below",
  "Klaim Cashback": "Claim Cashback",
  "Periode:": "Period:",
  "GRATIS": "FREE",
  "30 MENIT": "30 MINUTES",
  "SETIAP HARI!": "EVERY DAY!",
  "Cara Nikmati": "How to Enjoy",
  "Gowes Gratis": "Free Rides",
  "Semakin mudah, semakin ramah lingkungan.":
    "Easier and more environmentally friendly.",
  "Cari Sepeda": "Find a Bike",
  "Temukan titik parkir Re:Flow terdekat melalui peta di aplikasi.":
    "Find the nearest Re:Flow parking point through the app map.",
  "Scan QR Code pada sepeda. 30 menit pertama akan otomatis terpotong Rp 0.":
    "Scan the QR code on the bike. The first 30 minutes will automatically be charged Rp 0.",
  "Selesaikan": "Finish",
  "Parkir di area resmi dan kunci kembali. Nikmati sisa saldo Anda!":
    "Park in an official area and lock the bike again. Enjoy your remaining balance!",
  "Ketentuan Program": "Program Terms",
  "Berlaku untuk seluruh pengguna terdaftar.":
    "Valid for all registered users.",
  "Gratis 30 menit hanya berlaku 1x per hari.":
    "Free 30 minutes is valid once per day.",
  "Reset kuota gratis dilakukan setiap pukul 00:00.":
    "The free quota resets every day at 00:00.",
  "Menit ke-31 dan seterusnya berlaku tarif normal.":
    "Normal rates apply from the 31st minute onward.",
  "Pengguna wajib memarkir di zona resmi Re:Flow.":
    "Users must park in official Re:Flow zones.",
  "Promo ini dapat berubah sewaktu-waktu.":
    "This promo may change at any time.",
  "Gowes sehat, dompet hemat, bumi pun selamat.":
    "Healthy rides, lighter spending, and a safer planet.",
  "Car Free Day Bersama Re:Flow": "Car Free Day with Re:Flow",
  "Tujuan Kegiatan": "Activity Goals",
  "Test Ride Gratis": "Free Test Ride",
  "Booth Interaktif": "Interactive Booth",
  "Gallery Car Free Day Re:Flow": "Re:Flow Car Free Day Gallery",
  "Dokumentasi Re:Flow": "Re:Flow Documentation",
  "Special Event": "Special Event",
  "Gowes Bareng Keliling Mataram! Nikmati pengalaman liburan sehat dan seru menyusuri ikon kota menggunakan sepeda listrik inovatif Re:Flow.":
    "Ride together around Mataram. Enjoy a healthy and fun holiday experience exploring city icons with Re:Flow's innovative electric bikes.",
  "Liburan Seru &": "Fun &",
  "Ramah Lingkungan": "Eco-Friendly",
  "Agenda Kegiatan": "Activity Agenda",
  "Gallery GOBAR Holiday": "GOBAR Holiday Gallery",
  "Tingkatkan Semangat Kemerdekaan": "Strengthen the Spirit of Independence",
  "Highlight Kegiatan": "Activity Highlights",
  "Nasionalisme": "Nationalism",
  "Edukasi Hijau": "Green Education",
  "Kolaborasi": "Collaboration",
  "Gallery Gobar Kemerdekaan": "Independence Ride Gallery",
  "Dokumentasi Merdeka": "Independence Documentation",
  "Gowes Senja Bareng Re:Flow": "Sunset Ride with Re:Flow",
  "Sunset Route": "Sunset Route",
  "Re:Flow Experience": "Re:Flow Experience",
  "Komunitas": "Community",
  "Edukasi": "Education",
  "Hospitality": "Hospitality",
  "Gallery Gobar Sunset": "Gobar Sunset Gallery",
  "Dokumentasi Sunset": "Sunset Documentation",
  "Peserta Antusias": "Enthusiastic Participants",
  "Rute Perjalanan": "Travel Route",
  "Membangun Kebersamaan": "Building Togetherness",
  "dengan masyarakat Lombok Tengah": "with the Central Lombok community",
  "Kegiatan": "Activities",
  "Gowes Bareng": "Group Ride",
  "Fun Games": "Fun Games",
  "Pembagian Hadiah": "Prize Distribution",
  "Status": "Status",
  "Unit tetap tersedia di Poltekpar Lombok":
    "Units remain available at Poltekpar Lombok",
  "Dokumentasi GOBAR Loteng": "GOBAR Loteng Documentation",
  "Ingin Jadi Bagian dari Perjalanan Berikutnya?":
    "Want to Be Part of the Next Ride?",
  "PENGUMUMAN!": "ANNOUNCEMENT!",
  "Kami Mencari:": "We Are Looking For:",
  "Terbaik": "Best",
  "yang berkontribusi": "who contribute to",
  "mengurangi": "reducing",
  "Emisi Karbon bersama Re:Flow": "Carbon Emissions with Re:Flow",
  "DICARI": "WANTED",
  "100 RIDER TERBAIK": "100 BEST RIDERS",
  "Total Hadiah Jutaan Rupiah!!!": "Total Prizes Worth Millions of Rupiah!!!",
  "Untuk 100 Rider Terbaik": "For the 100 Best Riders",
  "S&K Berlaku": "Terms & Conditions Apply",
  "Cara Mengikuti": "How to Join",
  "Ketentuan": "Terms",
  "Gobar Loteng": "Gobar Central Lombok",
  "Gobar Kemerdekaan": "Independence Ride",
  "Jumat": "Friday",
  "13 Februari 2026": "February 13, 2026",
  "13 FEBRUARI 2026": "FEBRUARY 13, 2026",
  "Poltekpar Lombok âž” Alun-Alun Tastura":
    "Poltekpar Lombok to Tastura Square",
  "Poltekpar Lombok âžœ Alun-Alun Tastura":
    "Poltekpar Lombok to Tastura Square",
  "Poltekpar Lombok â†’ Alun-Alun Tastura":
    "Poltekpar Lombok to Tastura Square",
  "LOMBOK TENGAH EDITION - FEBRUARY 13 2026":
    "CENTRAL LOMBOK EDITION - FEBRUARY 13, 2026",
  "Edisi Lombok Tengah â€” 13 Februari 2026":
    "Central Lombok Edition - February 13, 2026",
  "Edisi Lombok Tengah â€“ 13 Februari 2026":
    "Central Lombok Edition - February 13, 2026",
  "Edisi Lombok Tengah - 13 Februari 2026":
    "Central Lombok Edition - February 13, 2026",
  "Pada Jumat, 13 Februari 2026, Re:flow sukses menyelenggarakan kegiatan Gowes Bareng menyusuri rute strategis dari Politeknik Pariwisata Lombok menuju Alun-Alun Tastura, Lombok Tengah.":
    "On Friday, February 13, 2026, Re:Flow successfully held a group ride along the strategic route from Lombok Tourism Polytechnic to Tastura Square, Central Lombok.",
  "Tercatat 35 peserta berpartisipasi dengan penuh semangat. Tidak hanya bersepeda, momen ini diisi dengan berbagai games seru dan sesi snack time yang menjadi ajang untuk memperluas jaringan sosial dalam suasana kolaboratif.":
    "A total of 35 participants joined enthusiastically. Beyond cycling, the event included fun games and snack time, creating a collaborative space to expand social connections.",
  "Re:flow berkomitmen untuk terus mendorong gaya hidup sehat dan ramah lingkungan di tanah Lombok.":
    "Re:Flow is committed to continuing to promote a healthy and environmentally friendly lifestyle in Lombok.",
  "Gowes santai menggunakan sepeda listrik Re:flow dari Poltekpar Lombok menuju Alun-Alun Tastura.":
    "A relaxed electric bike ride from Poltekpar Lombok to Tastura Square.",
  "Aktivitas kelompok di titik finish yang dirancang untuk mempererat relasi antar peserta.":
    "Group activities at the finish point designed to strengthen connections among participants.",
  "Apresiasi bagi pemenang games dan sesi ramah tamah dengan pembagian snack.":
    "Appreciation for game winners and a friendly gathering with snack distribution.",
  "Meskipun acara bersama telah usai, pengalaman bersepeda keliling Praya tetap bisa Anda nikmati setiap hari. Gunakan aplikasi Re:flow untuk akses unit sepeda di berbagai titik.":
    "Although the group event has ended, you can still enjoy cycling around Praya every day. Use the Re:Flow app to access bike units at multiple points.",
  "Gridwiz Energy & Mobility hadir di Car Free Day untuk mengajak masyarakat hidup lebih sehat, aktif, dan ramah lingkungan. Rasakan langsung pengalaman berkendara dengan sepeda listrik Re:Flow â€” solusi mobilitas bebas emisi untuk masa depan Indonesia yang lebih hijau.":
    "Gridwiz Energy & Mobility joined Car Free Day to encourage a healthier, more active, and environmentally friendly lifestyle. Experience riding Re:Flow electric bikes directly as an emission-free mobility solution for a greener Indonesia.",
  "Sebagai bagian dari komitmen terhadap mobilitas berkelanjutan dan ramah lingkungan, Gridwiz E&M turut meramaikan acara Car Free Day (CFD) di Lombok.":
    "As part of its commitment to sustainable and environmentally friendly mobility, Gridwiz E&M took part in Car Free Day (CFD) in Lombok.",
  "Re:Flow CFD menghadirkan ruang sehat yang bebas polusi sekaligus meningkatkan kesadaran akan mobilitas rendah emisi. Kegiatan ini mengajak komunitas dan institusi pendidikan untuk merasakan gaya hidup aktif, sehat, dan modern melalui teknologi sepeda listrik Re:Flow.":
    "Re:Flow CFD creates a healthy, pollution-free space while raising awareness of low-emission mobility. This activity invites communities and educational institutions to experience an active, healthy, and modern lifestyle through Re:Flow electric bike technology.",
  "Pengunjung dapat mencoba langsung sepeda listrik Re:Flow di area khusus yang steril dari kendaraan bermotor dan dibimbing oleh tim Gridwiz.":
    "Visitors can try Re:Flow electric bikes directly in a dedicated motor-vehicle-free area with guidance from the Gridwiz team.",
  "Eksplorasi demo Battery Charging Station, simulasi VR, hingga zona foto tematik yang menghadirkan pengalaman ramah lingkungan nan futuristik.":
    "Explore Battery Charging Station demos, VR simulations, and thematic photo zones that deliver a futuristic eco-friendly experience.",
  "Jelajahi momen terbaik Car Free Day bersama Gridwiz Energy & Mobility lewat dokumentasi eksklusif Re:Flow.":
    "Explore the best moments from Car Free Day with Gridwiz Energy & Mobility through exclusive Re:Flow documentation.",
  "GOBAR Holiday adalah inisiatif Gridwiz Energy & Mobility untuk mengajak masyarakat Mataram mengisi waktu libur dengan aktivitas produktif. Tanpa polusi dan tanpa lelah berlebih, Anda bisa berkeliling kota bersama teman dan keluarga sambil merasakan kecanggihan teknologi transportasi masa depan.":
    "GOBAR Holiday is a Gridwiz Energy & Mobility initiative that invites Mataram residents to spend holidays through productive activities. Without pollution or excessive fatigue, you can explore the city with friends and family while experiencing future transportation technology.",
  "Gathering: Para peserta menikmati suasana hijau di RTH Pagutan sambil menikmati Snack dari Re:flow dan gowes santai keliling RTH Pagutan.":
    "Gathering: Participants enjoyed the green atmosphere at RTH Pagutan, snacks from Re:Flow, and a relaxed ride around RTH Pagutan.",
  "Flag Off: Start gowes santai dari UIN Mataram sampai RTH Pagutan.":
    "Flag Off: A relaxed ride from UIN Mataram to RTH Pagutan.",
  "Refreshment: Sesi istirahat, snack, dan edukasi Re:Flow.":
    "Refreshment: Rest session, snacks, and Re:Flow education.",
  "Kumpulan momen keceriaan peserta di setiap sudut rute perjalanan.":
    "A collection of joyful participant moments along every part of the route.",
  "Dalam semangat memperingati Hari Kemerdekaan ke-80 Republik Indonesia, Gridwiz Energy & Mobility mengajak masyarakat bergerak aktif dan peduli lingkungan melalui layanan sepeda listrik inovatif Re:Flow.":
    "In the spirit of commemorating the 80th Independence Day of the Republic of Indonesia, Gridwiz Energy & Mobility invited the public to stay active and care for the environment through Re:Flow's innovative electric bike service.",
  "Gobar Kemerdekaan menghadirkan gowes bareng bernuansa merah putih sebagai wujud syukur atas kemerdekaan Indonesia. Ratusan peserta dari komunitas, pelajar, hingga keluarga ikut meramaikan jalur ikonik Kota Mataram dengan sepeda listrik Re:Flow. Sepanjang acara, peserta menikmati edukasi mengenai teknologi baterai, fasilitas charging port, serta berbagai aktivitas tematik yang memperkuat rasa cinta tanah air.":
    "The Independence Ride presented a red-and-white themed group ride as a celebration of Indonesia's independence. Hundreds of participants from communities, students, and families joined along iconic Mataram routes using Re:Flow electric bikes. Throughout the event, participants learned about battery technology, charging port facilities, and thematic activities that strengthened national pride.",
  "Gowes Merdeka bukan sekadar perayaan, melainkan gerakan nyata untuk menyalakan gaya hidup sehat, teknologi hijau, dan solidaritas antar generasi.":
    "Independence Ride is more than a celebration; it is a real movement to spark healthy living, green technology, and solidarity across generations.",
  "â€œGowes Merdeka bukan sekadar perayaan, melainkan gerakan nyata untuk menyalakan gaya hidup sehat, teknologi hijau, dan solidaritas antar generasi.â€":
    "\"Independence Ride is more than a celebration; it is a real movement to spark healthy living, green technology, and solidarity across generations.\"",
  "\"Gowes Merdeka bukan sekadar perayaan, melainkan gerakan nyata untuk menyalakan gaya hidup sehat, teknologi hijau, dan solidaritas antar generasi.\"":
    "\"Independence Ride is more than a celebration; it is a real movement to spark healthy living, green technology, and solidarity across generations.\"",
  "Gobar Kemerdekaan Gallery": "Independence Ride Gallery",
  "Gobar Kemerdekaan presented a red-and-white themed group ride as a celebration of Indonesia's independence. Hundreds of participants from communities, students, and families joined along iconic Mataram routes using Re:Flow electric bikes. Throughout the event, participants learned about battery technology, charging port facilities, and thematic activities that strengthened national pride.":
    "The Independence Ride presented a red-and-white themed group ride as a celebration of Indonesia's independence. Hundreds of participants from communities, students, and families joined along iconic Mataram routes using Re:Flow electric bikes. Throughout the event, participants learned about battery technology, charging port facilities, and thematic activities that strengthened national pride.",
  "Upacara singkat dan doa bersama sebelum start sebagai simbol rasa syukur atas kemerdekaan.":
    "A short ceremony and group prayer before the start as a symbol of gratitude for independence.",
  "Parade gowes merah putih dengan ornamen bendera di setiap unit Re:Flow dan atribut peserta.":
    "A red-and-white cycling parade with flag ornaments on every Re:Flow unit and participant attributes.",
  "Finish line celebration dengan sesi hiburan, kuliner lokal, dan doorprize bertema kemerdekaan.":
    "A finish-line celebration with entertainment, local culinary offerings, and independence-themed door prizes.",
  "Peserta membawa atribut merah putih, menjadikan gowes ini ajang parade cinta tanah air yang modern dan inklusif.":
    "Participants wore red-and-white attributes, making the ride a modern and inclusive parade of national pride.",
  "Workshop mobilitas rendah emisi agar masyarakat memahami manfaat Re:Flow lebih jauh.":
    "A low-emission mobility workshop to help the public better understand Re:Flow's benefits.",
  "Dukungan sponsor dan media partner menghadirkan booth interaktif yang menambah pengalaman peserta.":
    "Sponsor and media partner support brought interactive booths that enriched the participant experience.",
  "Dokumentasi kemeriahan acara Gobar Kemerdekaan Re:Flow yang penuh semangat dan warna.":
    "Documentation of the lively and colorful Re:Flow Independence Ride event.",
  "Dalam semangat kebersamaan dan menikmati indahnya senja, Gridwiz Energy & Mobility mengajak masyarakat untuk bergabung dalam Gobar Sunset. Mari bersepeda bersama dengan layanan sepeda listrik inovatif Re:Flow, sambil menikmati suasana sore yang hangat, sehat, dan ramah lingkungan.":
    "In the spirit of togetherness and enjoying the beauty of sunset, Gridwiz Energy & Mobility invited the public to join Gobar Sunset. Ride together with Re:Flow's innovative electric bike service while enjoying a warm, healthy, and environmentally friendly afternoon.",
  "Gobar Sunset menghadirkan pengalaman gowes santai di Kota Mataram saat langit memerah. Didukung sepeda listrik Re:Flow, seluruh peserta dapat menikmati rute yang nyaman tanpa rasa lelah berlebihan. Momen ini menjadi cara seru menutup hari dengan aktivitas fisik ringan, udara segar, dan energi positif bersama komunitas. Selain menikmati panorama sunset, peserta diajak eksplorasi teknologi kendaraan listrik Gridwiz, berinteraksi dengan komunitas lokal, dan merasakan hospitality premium melalui rangkaian aktivitas tematik di titik perhentian.":
    "Gobar Sunset delivers a relaxed riding experience in Mataram as the sky turns red. Supported by Re:Flow electric bikes, all participants can enjoy a comfortable route without excessive fatigue. This moment is a fun way to close the day with light physical activity, fresh air, and positive community energy. Beyond the sunset views, participants explore Gridwiz electric vehicle technology, interact with local communities, and enjoy premium hospitality through thematic activities at stop points.",
  "Briefing & safety check sebelum gowes senja dimulai.":
    "Briefing and safety check before the sunset ride begins.",
  "Gowes santai sambil menikmati jalur sunset favorit di Mataram.":
    "A relaxed ride while enjoying favorite sunset routes in Mataram.",
  "Cooling spot dengan sesi foto, live music ringan, dan jamuan sehat.":
    "A cooling spot with photo sessions, light live music, and healthy refreshments.",
  "Rute curated melewati spot ikonik sehingga peserta menikmati senja Lombok dari berbagai sudut terbaik.":
    "A curated route through iconic spots so participants can enjoy Lombok's sunset from the best angles.",
  "Unit sepeda listrik disiapkan penuh dengan dukungan teknisi Gridwiz sehingga perjalanan terasa aman dan effortless.":
    "Electric bike units are fully prepared with Gridwiz technician support, making the ride feel safe and effortless.",
  "Gobar Sunset mempertemukan pegiat sepeda, warga, dan wisatawan untuk merayakan gaya hidup sehat sambil membangun relasi baru.":
    "Gobar Sunset brings cyclists, residents, and tourists together to celebrate a healthy lifestyle while building new connections.",
  "Tim Gridwiz memperkenalkan teknologi baterai dan fitur Re:Flow sebagai solusi mobilitas ramah lingkungan untuk kebutuhan harian.":
    "The Gridwiz team introduces battery technology and Re:Flow features as an environmentally friendly mobility solution for daily needs.",
  "Setelah gowes, peserta disambut zona chill dengan minuman segar, light bites, dan sesi musik santai yang menambah ambience senja.":
    "After the ride, participants are welcomed to a chill zone with fresh drinks, light bites, and relaxed music that enhances the sunset ambience.",
  "Dokumentasi kemeriahan acara Gobar Sunset Re:Flow yang penuh semangat dan warna.":
    "Documentation of the vibrant and energetic Gobar Sunset Re:Flow event.",
  "PENGUMUMAN": "ANNOUNCEMENT",
  "Periode 18â€“31 Mei 2026": "Period: May 18-31, 2026",
  "Hadiah diberikan kepada rider dengan kontribusi pengurangan emisi karbon terbaik selama periode campaign.":
    "Prizes are awarded to riders with the best carbon emission reduction contribution during the campaign period.",
  "Semua hadiah dan mekanisme mengikuti ketentuan yang berlaku dari Re:Flow.":
    "All prizes and mechanisms follow the applicable terms from Re:Flow.",
  "*Event ini dapat dihentikan kapan saja sesuai kebijakan perusahaan.":
    "*This event may be stopped at any time according to company policy.",
  "Gunakan sepeda Re:Flow selama periode campaign.":
    "Use a Re:Flow bike during the campaign period.",
  "Kumpulkan kontribusi pengurangan emisi karbon sebanyak mungkin.":
    "Collect as much carbon emission reduction contribution as possible.",
  "Pantau data pengurangan emisi melalui menu Perjalanan Saya.":
    "Monitor emission reduction data through the My Trips menu.",
  "Pastikan kamu masuk dalam 100 Rider Terbaik yang berkontribusi mengurangi emisi karbon bersama Re:Flow.":
    "Make sure you are among the 100 Best Riders contributing to carbon emission reduction with Re:Flow.",
  "Campaign berlaku untuk pengguna sepeda Re:Flow.":
    "The campaign applies to Re:Flow bike users.",
  "Periode campaign berlangsung pada 18â€“31 Mei 2026.":
    "The campaign period runs from May 18 to May 31, 2026.",
  "Peringkat ditentukan berdasarkan kontribusi pengurangan emisi karbon bersama Re:Flow.":
    "Ranking is determined based on carbon emission reduction contribution with Re:Flow.",
  "100 rider terbaik berkesempatan mendapatkan hadiah dengan total jutaan rupiah.":
    "The 100 best riders have the chance to win prizes totaling millions of rupiah.",
  "Syarat dan ketentuan berlaku.": "Terms and conditions apply.",
  "Event ini dapat dihentikan kapan saja sesuai kebijakan perusahaan.":
    "This event may be stopped at any time according to company policy.",
  "Informasi resmi dapat dilihat melalui Instagram @reflow.gridwizenm dan website gridwizenm.com.":
    "Official information can be found on Instagram @reflow.gridwizenm and the website gridwizenm.com.",
  "Keputusan perusahaan bersifat final dan tidak dapat diganggu gugat.":
    "The company's decision is final and cannot be contested.",
  "Aruna Hotel memadukan pesona alam Lombok dengan kenyamanan modern. Terletak di tepi pantai, Aruna berkomitmen pada prinsip pariwisata berkelanjutan melalui efisiensi energi dan pengurangan plastik sekali pakai.":
    "Aruna Hotel blends Lombok's natural charm with modern comfort. Located by the beach, Aruna is committed to sustainable tourism through energy efficiency and reducing single-use plastics.",
  "Holiday Resort Lombok menghadirkan keseimbangan antara kemewahan dan keasrian alam. Dengan lokasi di Senggigi yang dikelilingi pohon kelapa, resort ini menggunakan sistem pengolahan air berkelanjutan.":
    "Holiday Resort Lombok offers a balance between luxury and natural beauty. Located in Senggigi and surrounded by coconut trees, the resort uses sustainable water treatment systems.",
  "Merumata Hotel menawarkan pengalaman menginap eksklusif dengan standar ramah lingkungan tinggi. Mulai dari pencahayaan hemat energi hingga kuliner berbasis bahan organik.":
    "Merumata Hotel offers an exclusive stay experience with high environmental standards, from energy-efficient lighting to cuisine based on organic ingredients.",
  "Sima Kuta Hotel menghadirkan suasana tenang di tengah keindahan alam. Dikelilingi pemandangan pantai Kuta Mandalika yang menenangkan bagi wisatawan yang mencari ketenangan.":
    "Sima Kuta Hotel offers a calm atmosphere amid natural beauty, surrounded by the soothing views of Kuta Mandalika Beach for travelers seeking tranquility.",
  "Svarga Resort menawarkan pengalaman liburan mewah dengan sentuhan budaya lokal yang kental. Perpaduan desain modern dan panorama alam yang memukau.":
    "Svarga Resort offers a luxurious holiday experience with a strong local cultural touch, combining modern design with stunning natural panoramas.",
  "Rajavilla Lombok Resort dikenal sebagai destinasi penginapan eksklusif dengan pemandangan laut yang memukau, menghadirkan suasana elegan dan privasi tinggi.":
    "Rajavilla Lombok Resort is known as an exclusive stay destination with stunning ocean views, offering an elegant atmosphere and high privacy.",
  "Nongkrong yang nyaman di Bento Kopi. Gunakan Re:Flow untuk menuju lokasi dan dapatkan promo menarik sebagai bagian dari komunitas ramah lingkungan.":
    "Enjoy a comfortable hangout at Bento Kopi. Use Re:Flow to get there and access special promos as part of the eco-friendly community.",
  "Tempat nongkrong asik": "Comfortable hangout spot",
  "Suasana santai dan menu pilihan menanti Anda di Modjoe. Dukung gaya hidup sehat dengan bersepeda dan nikmati apresiasi khusus dari kami.":
    "A relaxed atmosphere and selected menu await you at Modjoe. Support a healthy lifestyle by cycling and enjoy special appreciation from us.",
  "Gaya hidup sehat": "Healthy lifestyle",
  "Manjakan diri dengan pastry dan kopi premium di Ã‰clair CafÃ©. Kami banyak hadiah bagi pengguna Re:Flow yang peduli terhadap pengurangan emisi.":
    "Treat yourself to premium pastries and coffee at Ã‰clair CafÃ©. We provide rewards for Re:Flow users who care about reducing emissions.",
  "Manjakan diri dengan pastry dan kopi premium di Ãƒâ€°clair CafÃƒÂ©. Kami banyak hadiah bagi pengguna Re:Flow yang peduli terhadap pengurangan emisi.":
    "Treat yourself to premium pastries and coffee at Ã‰clair CafÃ©. We provide rewards for Re:Flow users who care about reducing emissions.",
  "UTTARA menghadirkan ketenangan di tengah hiruk-pikuk kota. Dukung gaya hidup sehat dengan bersepeda dan nikmati apresiasi khusus dari kami.":
    "UTTARA brings calm amid the city's bustle. Support a healthy lifestyle by cycling and enjoy special appreciation from us.",
  "Vibe kafe menenangkan": "Calming cafe vibe",
  "Temukan cita rasa unik di Subr. Kami bangga menjadi bagian dari mitra Re:Flow dalam menciptakan ekosistem transportasi berkelanjutan di Lombok.":
    "Discover unique flavors at Subr. We are proud to be part of Re:Flow's partner network in building a sustainable transportation ecosystem in Lombok.",
  "Dukungan emisi rendah": "Low-emission support",
  "Wisata Pura Batu Bolong": "Batu Bolong Temple Tourism",
  "Pura Batu Bolong adalah salah satu destinasi wisata spiritual dan alam yang paling ikonik di Lombok. Terletak di tepi Pantai Senggigi, pura ini didirikan di atas batu karang besar yang menjorok langsung ke laut.":
    "Batu Bolong Temple is one of Lombok's most iconic spiritual and nature tourism destinations. Located on the edge of Senggigi Beach, the temple stands on a large rock formation extending into the sea.",
  "Lokasi Pura Batu Bolong": "Batu Bolong Temple Location",
  "Cafe Alberto adalah salah satu restoran tepi pantai paling terkenal di Senggigi, Lombok, yang menawarkan perpaduan hidangan Italia, seafood segar, dan menu internasional lainnya dengan suasana yang elegan dan romantis.":
    "Cafe Alberto is one of the most famous beachfront restaurants in Senggigi, Lombok, offering Italian dishes, fresh seafood, and other international menus in an elegant and romantic atmosphere.",
  "Lokasi Alberto Cafe": "Alberto Cafe Location",
  "Mentez Art Gallery adalah galeri seni terkemuka di kawasan Senggigi, Lombok, yang menjadi surga bagi para pecinta seni dan kolektor. Galeri ini secara khusus memamerkan berbagai karya seni lukis yang menawan, seringkali menampilkan gaya khas seniman lokal yang berfokus pada kehidupan, budaya, dan keindahan alam Pulau Lombok.":
    "Mentez Art Gallery is a leading art gallery in Senggigi, Lombok, and a haven for art lovers and collectors. The gallery showcases captivating paintings, often featuring the distinctive style of local artists focused on Lombok's life, culture, and natural beauty.",
  "Lokasi Pura MENTEZ": "MENTEZ Location",
  "Pantai Kerandangan": "Kerandangan Beach",
  "Pantai Kerandangan memancarkan pesona alam yang otentik dan menenangkan, menjadikannya permata tersembunyi yang damai di dekat kawasan Senggigi. Keindahan pantai ini terletak pada kontras antara pasir putih kecokelatan yang lembut dengan hijaunya deretan pepohonan di sepanjang garis pantai, menciptakan suasana yang lebih teduh dan asri dibandingkan pantai-pantai komersil lainnya.":
    "Kerandangan Beach radiates authentic and calming natural charm, making it a peaceful hidden gem near Senggigi. Its beauty lies in the contrast between soft brownish-white sand and green trees along the shoreline, creating a cooler and more natural atmosphere than many commercial beaches.",
  "Lokasi Pantai Kerandangan": "Kerandangan Beach Location",
  "Beach Club Lombok by Bale Solah, sebuah permata elegan yang menawarkan kombinasi sempurna antara resort bintang empat dan beach club premium di kawasan Senggigi.":
    "Beach Club Lombok by Bale Solah is an elegant gem offering a perfect combination of a four-star resort and premium beach club in Senggigi.",
  "Lokasi Beach Club Lombok by Bale Solah":
    "Beach Club Lombok by Bale Solah Location",
  "Pantai Tanjung Bias": "Tanjung Bias Beach",
  "Pantai Tanjung Bias, sebuah destinasi yang menawarkan perpaduan sempurna antara keindahan alam, wisata kuliner, dan kegiatan rekreasi keluarga di Desa Senteluk, Lombok Barat.":
    "Tanjung Bias Beach is a destination offering a perfect blend of natural beauty, culinary tourism, and family recreation in Senteluk Village, West Lombok.",
  "Lokasi Pantai Tanjung Bias": "Tanjung Bias Beach Location",
  "Pantai Kecinan": "Kecinan Beach",
  "Pantai Kecinan di Lombok Utara, sebuah permata yang menyajikan ketenangan dengan panorama alam yang menawan dan suasana damai. Daya tarik utama pantai ini adalah pasir putihnya yang lembut dan bersih serta air laut yang jernih dengan ombak yang sangat tenang, menjadikannya sangat aman dan ideal untuk berenang, bermain air bersama keluarga, bahkan menjadi spot populer untuk snorkeling dan menyelam karena kekayaan terumbu karang di bawah lautnya.":
    "Kecinan Beach in North Lombok is a gem that offers tranquility, captivating natural panoramas, and a peaceful atmosphere. Its main attraction is soft, clean white sand and clear seawater with very calm waves, making it safe for swimming, family water play, and popular for snorkeling and diving thanks to its rich coral reefs.",
  "Lokasi Pantai Kecinan": "Kecinan Beach Location",
  "Presentasi visi transportasi listrik yang inklusif dan efisien.":
    "Presentation of an inclusive and efficient electric transportation vision.",
  "Dukungan BRIDA NTB terhadap inovasi energi terbarukan daerah.":
    "BRIDA NTB's support for regional renewable energy innovation.",
  "Pemetaan peluang pilot project untuk sepeda listrik Gridwiz.":
    "Mapping pilot project opportunities for Gridwiz electric bikes.",
  "Menanggapi potensi besar di bidang energi terbarukan, PT Gridwiz mengajukan kerja sama strategis kepada Pemerintah Provinsi Nusa Tenggara Barat (NTB). Dalam kunjungan resmi ke Badan Riset dan Inovasi Daerah (BRIDA) NTB pada Rabu, 27 Agustus 2025, tim Gridwiz mempresentasikan visi perusahaan untuk memperluas pemanfaatan teknologi transportasi listrik yang ramah lingkungan.":
    "Responding to the major potential in renewable energy, PT Gridwiz proposed strategic cooperation with the Provincial Government of West Nusa Tenggara (NTB). During an official visit to the Regional Research and Innovation Agency (BRIDA) NTB on Wednesday, August 27, 2025, the Gridwiz team presented the company's vision to expand the use of environmentally friendly electric transportation technology.",
  "Kepala BRIDA NTB, I Gede Putu Aryadi, S.Sos., M.H., beserta jajaran menerima langsung kedatangan perwakilan Gridwiz. Pertemuan berlangsung hangat dan konstruktif, membahas peluang kolaborasi penelitian, implementasi proyek percontohan sepeda listrik, serta dukungan kebijakan daerah yang dapat mempercepat ekosistem mobilitas hijau.":
    "The Head of BRIDA NTB, I Gede Putu Aryadi, S.Sos., M.H., and his team welcomed Gridwiz representatives directly. The meeting was warm and constructive, discussing research collaboration opportunities, electric bike pilot projects, and regional policy support to accelerate the green mobility ecosystem.",
  "Dalam sesi diskusi, Gridwiz memaparkan rencana jangka menengah yang mencakup penyediaan infrastruktur pengisian daya, pelatihan teknisi lokal, dan pengembangan layanan purna jual. BRIDA NTB merespons positif dengan menekankan pentingnya inovasi yang sejalan dengan kebutuhan masyarakat dan potensi ekonomi daerah.":
    "In the discussion session, Gridwiz outlined a medium-term plan covering charging infrastructure, local technician training, and after-sales service development. BRIDA NTB responded positively, emphasizing the importance of innovation aligned with community needs and regional economic potential.",
  "Melalui kemitraan ini, Gridwiz berharap dapat menghadirkan solusi transportasi listrik yang terjangkau, inklusif, dan berdampak sosial tinggi. Kolaborasi ini juga membuka jalan bagi pengembangan riset terapan di sektor energi baru terbarukan yang relevan bagi NTB.":
    "Through this partnership, Gridwiz hopes to deliver electric transportation solutions that are affordable, inclusive, and socially impactful. The collaboration also opens the way for applied research development in the renewable energy sector relevant to NTB.",
  "Kegiatan sepeda bersama memperingati HUT ke-61 Partai Golkar.":
    "A group cycling activity commemorating the 61st anniversary of Golkar Party.",
  "Partisipasi PT Gridwiz dalam kampanye penggunaan sepeda listrik.":
    "PT Gridwiz's participation in an electric bike usage campaign.",
  "Sinergi antara dunia usaha dan organisasi politik untuk mendukung energi bersih.":
    "Synergy between business and political organizations to support clean energy.",
  "Dalam rangka memperingati Hari Ulang Tahun (HUT) ke-61 Partai Golkar, Dewan Pimpinan Daerah (DPD) Partai Golkar NTB menggelar kegiatan sepeda bersama pada Sabtu sore di Kota Mataram. Kegiatan ini diikuti oleh kader partai, masyarakat umum, dan sejumlah mitra strategis, termasuk PT Gridwiz sebagai pendukung utama dalam kampanye transportasi ramah lingkungan.":
    "To commemorate the 61st anniversary of Golkar Party, the Regional Leadership Council (DPD) of Golkar NTB held a group cycling activity on Saturday afternoon in Mataram. The activity was attended by party members, the public, and strategic partners, including PT Gridwiz as a key supporter of the environmentally friendly transportation campaign.",
  "PT Gridwiz, perusahaan yang bergerak di bidang inovasi energi terbarukan dan mobilitas listrik, memanfaatkan momentum ini untuk memperkenalkan sepeda listrik sebagai solusi transportasi masa depan yang efisien, terjangkau, dan berkelanjutan. Melalui kegiatan ini, Gridwiz berharap masyarakat dapat semakin mengenal manfaat penggunaan kendaraan listrik dalam menekan emisi karbon dan menciptakan lingkungan yang lebih bersih.":
    "PT Gridwiz, a company focused on renewable energy innovation and electric mobility, used this momentum to introduce electric bikes as an efficient, affordable, and sustainable future transportation solution. Through this activity, Gridwiz hopes the public will better understand the benefits of electric vehicles in reducing carbon emissions and creating a cleaner environment.",
  "Ketua DPD Partai Golkar NTB menyampaikan apresiasi atas kehadiran PT Gridwiz yang ikut mendukung kegiatan ini. Ia menegaskan bahwa semangat HUT ke-61 Golkar bukan hanya untuk mempererat kebersamaan antaranggota, tetapi juga untuk berkontribusi nyata dalam isu-isu sosial dan lingkungan, termasuk transisi energi hijau di daerah.":
    "The Chair of DPD Golkar NTB expressed appreciation for PT Gridwiz's presence and support for the activity. He emphasized that the spirit of Golkar's 61st anniversary is not only to strengthen togetherness among members, but also to make real contributions to social and environmental issues, including the regional green energy transition.",
  "Suasana kegiatan berlangsung meriah dengan partisipasi aktif peserta dari berbagai kalangan. Selain bersepeda bersama, para peserta juga berkesempatan mencoba langsung sepeda listrik yang disediakan oleh PT Gridwiz. Kegiatan ini menjadi simbol sinergi antara dunia usaha dan masyarakat dalam mewujudkan masa depan transportasi yang lebih bersih dan berkelanjutan di Nusa Tenggara Barat.":
    "The event was lively with active participation from various groups. In addition to riding together, participants also had the opportunity to try electric bikes provided by PT Gridwiz. This activity became a symbol of synergy between business and society in realizing a cleaner and more sustainable transportation future in West Nusa Tenggara.",
};

const reverseDomTranslations = Object.fromEntries(
  Object.entries(domTranslations).map(([id, en]) => [en, id])
);

const normalizeText = (value: string) => value.replace(/\s+/g, " ").trim();

function translateDom(language: Language) {
  if (typeof document === "undefined") return;

  const map = language === "en" ? domTranslations : reverseDomTranslations;
  const elements = Array.from(
    document.body.querySelectorAll<HTMLElement>(
      "h1,h2,h3,h4,p,span,button,a"
    )
  );

  elements.forEach((element) => {
    if (element.closest("script,style,svg")) return;
    if (element.querySelector("img,svg,button,a,input,textarea,iframe")) {
      return;
    }

    const normalized = normalizeText(element.textContent ?? "");
    const translated = map[normalized];
    if (translated && element.children.length > 0) {
      element.textContent = translated;
    }
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((node) => {
    const current = node.nodeValue ?? "";
    const normalized = normalizeText(current);
    const translated = map[normalized];
    if (translated) {
      const leading = current.match(/^\s*/)?.[0] ?? "";
      const trailing = current.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leading}${translated}${trailing}`;
    }
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    translateDom(language);
    const observer = new MutationObserver(() => translateDom(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (text) => (typeof text === "string" ? text : text[language]),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
