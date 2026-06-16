import { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'hot-stone-massage',
    title: 'Hot Stone Massage Premium',
    category: 'massage',
    description: 'Terapi pijat mendalam menggunakan batu basal hangat alami Bali untuk melepas ketegangan otot kronis.',
    longDescription: 'Hot Stone Massage di Clara Spa Bali memadukan keahlian terapis senior dengan kehangatan batu basal vulkanis pilihan. Panas dari batu menembus ke dalam jaringan otot untuk melancarkan sirkulasi darah, membuang racun, dan memberikan efek relaksasi holistik yang tidak tertandingi.',
    duration: ['60 Menit', '90 Menit'],
    benefits: ['Meredakan ketegangan otot akut', 'Meningkatkan sirkulasi darah', 'Mengurangi tingkat stres dan kecemasan', 'Meningkatkan kualitas tidur'],
    image: '/images/services/hot-stone.jpg'
  },
  {
    slug: 'hot-compress-massage',
    title: 'Hot Compress Massage',
    category: 'massage',
    description: 'Kombinasi pijatan tradisional dengan kompres herbal hangat khas Bali untuk kebugaran total.',
    longDescription: 'Nikmati perpaduan kompres herbal organik hangat yang kaya akan rempah-rempah berkhasiat tinggi dengan teknik pijat penekanan titik tubuh. Sangat efektif untuk meredakan nyeri sendi dan menghangatkan tubuh.',
    duration: ['60 Menit', '90 Menit'],
    benefits: ['Mengurangi kekakuan sendi', 'Efek detoksifikasi alami', 'Menyegarkan aroma tubuh dengan rempah alami', 'Mengurangi kelelahan fisik'],
    image: '/images/services/hot.jpeg'
  },
  {
    slug: 'reflexology',
    title: 'Reflexology Exclusive',
    category: 'massage',
    description: 'Pijat refleksi titik-titik saraf kaki untuk memulihkan keseimbangan energi tubuh Anda.',
    longDescription: 'Terapi fokus pada zona refleksi kaki yang terhubung langsung ke organ internal tubuh. Membantu merangsang penyembuhan mandiri tubuh dan memulihkan vitalitas yang hilang akibat aktivitas padat.',
    duration: ['60 Menit'],
    benefits: ['Melancarkan peredaran darah perifer', 'Meringankan kaki pegal dan bengkak', 'Menjaga keseimbangan hormonal', 'Memberikan efek rileks instan'],
    image: '/images/services/reflex.jpg'
  },
  {
    slug: 'lomi-lomi-massage',
    title: 'Lomi Lomi Massage',
    category: 'massage',
    description: 'Teknik pijatan mengalir lembut menggunakan lengan bawah yang memberikan ketenangan spiritual.',
    longDescription: 'Gaya pijat eksotis yang diadopsi dan diselaraskan dengan sentuhan kelembutan Bali, menggunakan gerakan sapuan panjang kontinu yang meniru ombak laut. Mengembalikan keselarasan antara pikiran dan jiwa.',
    duration: ['60 Menit', '90 Menit'],
    benefits: ['Melepaskan sumbatan energi energi tubuh', 'Sangat menenangkan sistem saraf', 'Meningkatkan fleksibilitas jaringan kulit', 'Efek relaksasi mental mendalam'],
    image: '/images/services/lomi-lomi.jpeg'
  },
  {
    slug: 'back-massage',
    title: 'Back Massage Relieving',
    category: 'massage',
    description: 'Terapi terfokus untuk meredakan kaku pada area punggung, bahu, dan leher akibat stres kerja.',
    longDescription: 'Sesi intensif yang dirancang khusus bagi para profesional sibuk. Fokus sepenuhnya pada area yang paling sering mengalami ketegangan akibat postur duduk yang salah dan akumulasi stres sehari-hari.',
    duration: ['60 Menit'],
    benefits: ['Meredakan kaku leher dan belikat', 'Mengatasi sakit punggung bawah', 'Memperbaiki postur tubuh', 'Instantly recharge energi tubuh'],
    image: '/images/services/back.jpeg'
  },
  {
    slug: 'head-massage',
    title: 'Head Massage Therapy',
    category: 'massage',
    description: 'Pijatan kepala dan kulit kepala yang menenangkan untuk meredakan migren dan menjernihkan pikiran.',
    longDescription: 'Teknik penekanan lembut pada titik-titik akupresur di area wajah, kepala, dan leher menggunakan minyak esensial aromatik premium untuk membebaskan Anda dari beban mental.',
    duration: ['60 Menit'],
    benefits: ['Meringankan sakit kepala dan migren', 'Merangsang pertumbuhan rambut sehat', 'Mengurangi ketegangan mental', 'Meningkatkan kejernihan fokus'],
    image: '/images/services/head.jpeg'
  },
  {
    slug: 'thai-massage',
    title: 'Traditional Thai Massage',
    category: 'massage',
    description: 'Terapi peregangan tubuh (stretching) aktif tanpa minyak untuk fleksibilitas optimal.',
    longDescription: 'Perpaduan yoga pasif dan pijat penekanan garis energi (Sen). Terapis kami akan memandu tubuh Anda ke berbagai posisi peregangan yang aman guna membebaskan sumbatan energi fisik.',
    duration: ['60 Menit'],
    benefits: ['Meningkatkan fleksibilitas dan ruang gerak sendi', 'Menyelaraskan postur tubuh', 'Meningkatkan level energi tubuh', 'Mengurangi nyeri otot'],
    image: '/images/services/thai.jpeg'
  },
  {
    slug: 'balinese-massage',
    title: 'Authentic Balinese Massage',
    category: 'massage',
    description: 'Pijat tradisional Bali asli yang memadukan teknik thumb-pressure, long strokes, dan aromaterapi.',
    longDescription: 'Mahakarya relaksasi khas Bali. Menggunakan minyak kelapa murni beraroma frangipani yang menenangkan, dipadukan dengan teknik pijatan ritmis yang kuat namun menenangkan untuk memulihkan tubuh secara holistik.',
    duration: ['60 Menit', '90 Menit'],
    benefits: ['Merelaksasi seluruh sistem otot', 'Mengurangi stres emosional secara mendalam', 'Melembabkan dan menutrisi kulit tubuh', 'Melancarkan aliran limfatik'],
    image: '/images/services/balinese.jpeg'
  },
  {
    slug: 'hot-oil-massage',
    title: 'Luxury Hot Oil Massage',
    category: 'massage',
    description: 'Sensasi kemewahan pijat dengan minyak esensial hangat untuk kelembaban ekstra kulit Anda.',
    longDescription: 'Minyak aromaterapi hangat pilihan dituangkan secara perlahan ke tubuh sebelum pijatan dimulai. Kehangatan minyak memaksimalkan penetrasi nutrisi ke epidermis kulit sekaligus menenangkan indera.',
    duration: ['60 Menit', '90 Menit'],
    benefits: ['Melembutkan dan mengenyalkan kulit kering', 'Kehangatan yang menenangkan sistem saraf pusat', 'Membantu proses detoksifikasi pori-pori', 'Menciptakan ketenangan batin'],
    image: '/images/services/oil.webp'
  },
  {
    slug: 'foot-massage',
    title: 'Luxury Foot Massage',
    category: 'massage',
    description: 'Nikmati sensasi relaksasi mendalam melalui pijatan kaki profesional yang membantu mengembalikan energi dan kenyamanan tubuh.',

    longDescription: 'Luxury Foot Massage menghadirkan pengalaman perawatan kaki yang menenangkan dengan teknik pijat profesional yang berfokus pada titik-titik refleksi. Setiap gerakan dirancang untuk membantu mengurangi kelelahan, melancarkan aliran darah, serta memberikan rasa nyaman dan segar setelah aktivitas sehari-hari. Perawatan ini menjadi pilihan sempurna untuk mengembalikan keseimbangan tubuh dan pikiran.',

    duration: ['60 Menit', '90 Menit'],

    benefits: [
    'Mengurangi rasa lelah dan pegal pada kaki',
    'Meningkatkan sirkulasi darah secara alami',
    'Membantu meredakan stres dan ketegangan',
    'Memberikan sensasi relaksasi mendalam',
    'Membantu memulihkan energi tubuh'
    ],

    image: '/images/services/foot.jpeg'
    },
  {
    slug: 'body-scrub',
    title: 'Organic Body Scrub (Lulur)',
    category: 'massage',
    description: 'Eksfoliasi kulit menggunakan bahan organik Bali untuk mengangkat sel kulit mati dan mencerahkan.',
    longDescription: 'Perawatan pengangkatan sel kulit mati menggunakan racikan lulur tradisional Bali alami (seperti beras, kunyit, dan bunga melati). Menjadikan kulit Anda halus sutra, bercahaya, dan tampak awet muda.',
    duration: ['30 Menit'],
    benefits: ['Mengangkat sel kulit mati secara menyeluruh', 'Mencerahkan tone warna kulit', 'Menghaluskan tekstur kulit yang kasar', 'Mempercepat regenerasi sel kulit baru'],
    image: '/images/services/lulur.jpg'
  },
  {
    slug: 'body-wrap',
    title: 'Detoxifying Body Wrap',
    category: 'massage',
    description: 'Masker seluruh tubuh menggunakan lumpur mineral atau boreh Bali untuk detoksifikasi mendalam.',
    longDescription: 'Tubuh dibalut dengan bahan alami berkhasiat tinggi, lalu dibungkus selimut khusus untuk menstimulasi keluarnya keringat berisi racun tubuh sembari menutrisi lapisan kulit terdalam.',
    duration: ['30 Menit'],
    benefits: ['Mengeluarkan racun dan retensi air berlebih', 'Mengencangkan struktur kulit', 'Menutrisi kulit dengan mineral esensial', 'Memberikan efek hangat penenang'],
    image: '/images/services/body-wrap.jpeg'
  },
  {
    slug: 'premium-facial',
    title: 'Luxury Rejuvenating Facial',
    category: 'facial',
    description: 'Perawatan wajah premium untuk hidrasi mendalam, mencerahkan, dan peremajaan kulit intensif.',
    longDescription: 'Dirancang khusus untuk mengembalikan kilau alami wajah Anda. Melalui rangkaian pembersihan ganda, eksfoliasi lembut, pemijatan wajah yang menenangkan, serta aplikasi masker serum premium yang disesuaikan dengan jenis kulit Anda.',
    duration: ['30 Menit'],
    benefits: ['Membersihkan wajah hingga ke pori terdalam', 'Menghidrasi kulit secara instan', 'Mencerahkan dan meratakan warna kulit', 'Membantu menyamarkan garis halus (peremajaan)'],
    image: '/images/services/facial.jpeg'
  },
  {
    slug: 'eyelash-extension',
    title: 'Premium Eyelash Extension',
    category: 'eyelash',
    description: 'Pemasangan bulu mata palsu helai demi helai dengan teknik presisi demi tampilan mata menawan nan alami.',
    longDescription: 'Menggunakan bulu mata premium yang sangat ringan dan lem bersertifikasi medis yang aman bagi mata sensitif. Dikerjakan dengan detail tinggi oleh lash artist berpengalaman kami.',
    duration: ['90 Menit'],
    benefits: ['Mata terlihat lebih hidup dan lentik natural', 'Bahan super ringan, tidak mengganjal', 'Hemat waktu berdandan setiap pagi', 'Tahan lama dengan perawatan tepat'],
    image: '/images/eyelash/refill.jpeg'
  },
  {
    slug: 'eyelash-refill',
    title: 'Eyelash Refill Session',
    category: 'eyelash',
    description: 'Perawatan berkala bulu mata untuk mengisi bagian yang rontok agar tetap tebal dan rapi.',
    longDescription: 'Sesi perawatan ideal setelah 2-3 minggu pemasangan awal. Kami membersihkan sisa lem lama secara higienis dan menambahkan helaian bulu mata baru agar volume bulu mata Anda kembali sempurna.',
    duration: ['60 Menit'],
    benefits: ['Memperpanjang usia keindahan eyelash extension', 'Menjaga kerapian formasi bulu mata', 'Biaya lebih ekonomis dibanding pasang baru'],
    image: '/images/eyelash/refill.jpeg'
  },
  {
    slug: 'eyelash-removal',
    title: 'Safe Eyelash Removal',
    category: 'eyelash',
    description: 'Pelepasan eyelash extension menggunakan krim khusus yang aman tanpa merusak bulu mata asli.',
    longDescription: 'Jangan mencabut bulu mata extension Anda sendiri. Layanan pelepasan profesional kami menggunakan gel/krim pelarut premium yang melarutkan lem ekstensi dengan aman tanpa menimbulkan iritasi.',
    duration: ['30 Menit'],
    benefits: ['Melindungi bulu mata asli dari kerontokan', 'Bebas rasa perih atau sakit', 'Prosedur higienis standar klinik'],
    image: '/images/eyelash/refill.jpeg'
  },
  {
    slug: 'nail-gel-treatment',
    title: 'Premium Nail Gel Classic',
    category: 'nailgel',
    description: 'Pewarnaan kuku tangan atau kaki menggunakan kutek gel kualitas premium yang tahan lama.',
    longDescription: 'Rangkaian manicure/pedicure standar tinggi diikuti aplikasi base coat, kutek gel impor berkilau tinggi, dan top coat yang dikeringkan dengan lampu UV teknologi terbaru untuk ketahanan berminggu-minggu.',
    duration: ['45 Menit'],
    benefits: ['Warna kuku berkilau ekstrem dan mewah', 'Anti-pecah dan anti-gores hingga 4 minggu', 'Pilihan ratusan warna eksklusif'],
    image: '/images/nailgell/nail.jpeg'
  },
  {
    slug: 'nail-art-luxury',
    title: 'Custom Luxury Nail Art',
    category: 'nailgel',
    description: 'Ekspresikan kecantikan Anda lewat seni lukis kuku kustom yang elegan dan mendetail.',
    longDescription: 'Dari desain minimalis geometris, aksen glitter mewah, hingga lukisan tangan yang rumit. Sampaikan preferensi desain Anda, dan nail artist berbakat kami akan mewujudkannya di kuku cantik Anda.',
    duration: ['60 - 90 Menit'],
    benefits: ['Desain kuku kustom eksklusif tiada dua', 'Menggunakan aksesoris kuku kualitas terbaik', 'Meningkatkan rasa percaya diri Anda'],
    image: '/images/nailgell/nail.jpeg'
  },
  {
    slug: 'nail-maintenance',
    title: 'Nail Maintenance & Care',
    category: 'nailgel',
    description: 'Perawatan komprehensif kuku untuk menjaga kesehatan kutikula dan kekuatan kuku asli Anda.',
    longDescription: 'Fokus pada kesehatan kuku. Meliputi pemotongan, pembentukan kuku, perawatan kutikula yang aman, pembersihan sisa gel lama secara higienis, serta nutrisi serum keratin alami.',
    duration: ['30 Menit'],
    benefits: ['Mencegah kuku rapuh dan berjamur', 'Kutikula kuku rapi, bersih, dan ternutrisi', 'Kuku siap untuk aplikasi seni kuku berikutnya'],
    image: '/images/nailgell/nail.jpeg'
  }
];