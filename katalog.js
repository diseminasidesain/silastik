// =====================
// CATALOG NAVIGATION STATE
// =====================
let selectedCatalog = null;
let selectedKategori = null;
let selectedSubKategori = null;

// =====================
// PRODUCT DATA
// =====================

// Struktur: catalog > kategori > subKategori > products[]
const catalogData = {
    microdata: {
        label: 'Data Mikro',
        icon: 'database',
        color: 'blue',
        kategori: {
            sosial: {
                label: 'Statistik Sosial',
                icon: 'users',
                subKategori: {
                    'Sensus Penduduk': [
                        { id: 'sp-01', title: 'Long Form SP2020', description: 'Data long form sensus penduduk 2020', years: '2020', price: 8000000 },
                        { id: 'sp-02', title: 'Sensus Penduduk 2010', description: 'Data sensus penduduk 2010', years: '2010', price: 6000000 },
                        { id: 'sp-03', title: 'Sensus Penduduk 2000', description: 'Data sensus penduduk 2000', years: '2000', price: 4000000 },
                    ],
                    'Survei Angkatan Kerja Nasional': [
                        { id: 'sak-01', title: 'Sakernas Agustus 2024', description: 'Data ketenagakerjaan Agustus 2024', years: '2024', price: 4500000 },
                        { id: 'sak-02', title: 'Sakernas Februari 2024', description: 'Data ketenagakerjaan Februari 2024', years: '2024', price: 4500000 },
                        { id: 'sak-03', title: 'Sakernas 2023', description: 'Data ketenagakerjaan tahunan 2023', years: '2023', price: 4000000 },
                    ],
                    'Survei Sosial Ekonomi Nasional': [
                        { id: 'sus-01', title: 'Susenas Maret 2024', description: 'Data sosial ekonomi rumah tangga Maret 2024', years: '2024', price: 5000000 },
                        { id: 'sus-02', title: 'Susenas September 2023', description: 'Data sosial ekonomi rumah tangga September 2023', years: '2023', price: 5000000 },
                        { id: 'sus-03', title: 'Susenas Maret 2023', description: 'Data sosial ekonomi rumah tangga Maret 2023', years: '2023', price: 4500000 },
                    ],
                    'Pendataan Potensi Desa': [
                        { id: 'pod-01', title: 'Podes 2024', description: 'Data potensi desa 2024', years: '2024', price: 6000000 },
                        { id: 'pod-02', title: 'Podes 2021', description: 'Data potensi desa 2021', years: '2021', price: 5500000 },
                        { id: 'pod-03', title: 'Podes 2018', description: 'Data potensi desa 2018', years: '2018', price: 5000000 },
                    ],
                    'Survei Penduduk Antar Sensus': [
                        { id: 'sup-01', title: 'Supas 2015', description: 'Data kependudukan antar sensus 2015', years: '2015', price: 5500000 },
                    ],
                    'Survei Perilaku Peduli Lingkungan Hidup': [
                        { id: 'splh-01', title: 'SPPLH 2023', description: 'Data perilaku peduli lingkungan 2023', years: '2023', price: 3000000 },
                        { id: 'splh-02', title: 'SPPLH 2020', description: 'Data perilaku peduli lingkungan 2020', years: '2020', price: 2500000 },
                    ],
                    'Survei Komuter': [
                        { id: 'kom-01', title: 'Survei Komuter Jabodetabek 2023', description: 'Data komuter kawasan Jabodetabek', years: '2023', price: 3500000 },
                        { id: 'kom-02', title: 'Survei Komuter Mebidang 2023', description: 'Data komuter kawasan Mebidang', years: '2023', price: 3000000 },
                    ],
                    'Survei Penilaian Tingkat Kebahagiaan': [
                        { id: 'ptk-01', title: 'SPTK 2023', description: 'Indeks kebahagiaan masyarakat 2023', years: '2023', price: 2500000 },
                        { id: 'ptk-02', title: 'SPTK 2021', description: 'Indeks kebahagiaan masyarakat 2021', years: '2021', price: 2000000 },
                    ],
                    'Survei Perilaku Anti Korupsi': [
                        { id: 'pak-01', title: 'SPAK 2023', description: 'Data perilaku anti korupsi 2023', years: '2023', price: 2500000 },
                        { id: 'pak-02', title: 'SPAK 2021', description: 'Data perilaku anti korupsi 2021', years: '2021', price: 2000000 },
                    ],
                    'Sensus Pertanian Subsektor': [
                        { id: 'sps-01', title: 'ST Subsektor 2023 - Tanaman Pangan', description: 'Data subsektor tanaman pangan', years: '2023', price: 4000000 },
                        { id: 'sps-02', title: 'ST Subsektor 2023 - Hortikultura', description: 'Data subsektor hortikultura', years: '2023', price: 4000000 },
                    ],
                }
            },
            ekonomi: {
                label: 'Statistik Ekonomi',
                icon: 'trending-up',
                subKategori: {
                    'Sensus Ekonomi': [
                        { id: 'se-01', title: 'Sensus Ekonomi 2016 - UMB', description: 'Data usaha menengah besar SE2016', years: '2016', price: 7500000 },
                        { id: 'se-02', title: 'Sensus Ekonomi 2016 - UMK', description: 'Data usaha mikro kecil SE2016', years: '2016', price: 7000000 },
                    ],
                    'Sensus Pertanian': [
                        { id: 'spt-01', title: 'Sensus Pertanian 2023', description: 'Data sensus pertanian lengkap 2023', years: '2023', price: 7000000 },
                        { id: 'spt-02', title: 'Sensus Pertanian 2013', description: 'Data sensus pertanian lengkap 2013', years: '2013', price: 5500000 },
                    ],
                    'Perdagangan Luar Negeri Ekspor': [
                        { id: 'eks-01', title: 'PLN Ekspor 2024', description: 'Data ekspor barang Indonesia 2024', years: '2024', price: 4000000 },
                        { id: 'eks-02', title: 'PLN Ekspor 2023', description: 'Data ekspor barang Indonesia 2023', years: '2023', price: 3500000 },
                    ],
                    'Perdagangan Luar Negeri Impor': [
                        { id: 'imp-01', title: 'PLN Impor 2024', description: 'Data impor barang ke Indonesia 2024', years: '2024', price: 4000000 },
                        { id: 'imp-02', title: 'PLN Impor 2023', description: 'Data impor barang ke Indonesia 2023', years: '2023', price: 3500000 },
                    ],
                    'Survei Ongkos Usaha Tani': [
                        { id: 'out-01', title: 'SOUT 2023 - Padi', description: 'Data ongkos usaha tani padi 2023', years: '2023', price: 3000000 },
                        { id: 'out-02', title: 'SOUT 2023 - Jagung', description: 'Data ongkos usaha tani jagung 2023', years: '2023', price: 3000000 },
                    ],
                    'Survei Tahunan Perusahaan Industri Besar/Sedang': [
                        { id: 'ibs-01', title: 'IBS 2023', description: 'Data industri besar sedang 2023', years: '2023', price: 5000000 },
                        { id: 'ibs-02', title: 'IBS 2022', description: 'Data industri besar sedang 2022', years: '2022', price: 4500000 },
                    ],
                    'Survei Pertanian Antar Sensus': [
                        { id: 'sut-01', title: 'Sutas 2023', description: 'Data pertanian rumah tangga 2023', years: '2023', price: 4000000 },
                    ],
                    'Survei Industri Mikro dan Kecil Tahunan': [
                        { id: 'imk-01', title: 'IMK 2024', description: 'Data industri mikro kecil 2024', years: '2024', price: 3500000 },
                        { id: 'imk-02', title: 'IMK 2023', description: 'Data industri mikro kecil 2023', years: '2023', price: 3000000 },
                    ],
                    'Direktori Industri Besar dan Sedang': [
                        { id: 'dir-01', title: 'Direktori IBS 2023', description: 'Direktori perusahaan industri besar sedang 2023', years: '2023', price: 3000000 },
                    ],
                    'Survei E-Commerce': [
                        { id: 'ec-01', title: 'Survei E-Commerce 2023', description: 'Data usaha e-commerce Indonesia 2023', years: '2023', price: 2500000 },
                        { id: 'ec-02', title: 'Survei E-Commerce 2022', description: 'Data usaha e-commerce Indonesia 2022', years: '2022', price: 2000000 },
                    ],
                }
            },
            lainnya: {
                label: 'Lainnya',
                icon: 'layers',
                subKategori: {
                    'Korespondensi KBLI-HS-ISIC': [
                        { id: 'khi-01', title: 'Korespondensi KBLI-HS-ISIC 2023', description: 'Tabel korespondensi klasifikasi baku lapangan usaha dengan HS dan ISIC', years: '2023', price: 1500000 },
                    ],
                }
            }
        }
    },
    publication: {
        label: 'Publikasi Elektronik',
        icon: 'book-open',
        color: 'green',
        // Publikasi tidak punya kategori/subkategori, langsung ke produk
        products: [
            { id: 'pub-001', title: 'Statistik Indonesia 2024', description: 'Publikasi tahunan statistik Indonesia tanpa watermark', years: '2024', price: 150000, format: 'PDF', pages: 650 },
            { id: 'pub-002', title: 'Indikator Ekonomi Indonesia 2024', description: 'Publikasi bulanan indikator ekonomi', years: '2024', price: 75000, format: 'PDF', pages: 120 },
            { id: 'pub-003', title: 'Buletin Statistik Perdagangan Luar Negeri', description: 'Publikasi triwulanan perdagangan internasional', years: '2024', price: 0, isFree: true, format: 'PDF', pages: 85 },
            { id: 'pub-004', title: 'Statistik Kriminal 2023', description: 'Data statistik kriminalitas Indonesia', years: '2023', price: 100000, format: 'PDF', pages: 200 },
            { id: 'pub-005', title: 'Profil Kemiskinan Indonesia 2024', description: 'Analisis kemiskinan dan kesenjangan', years: '2024', price: 125000, format: 'PDF', pages: 180 },
            { id: 'pub-006', title: 'Statistik Transportasi Darat 2023', description: 'Data transportasi dan mobilitas', years: '2023', price: 90000, format: 'PDF', pages: 150 },
        ]
    },
    map: {
        label: 'Peta Wilkerstat',
        icon: 'map',
        color: 'orange',
        products: [
            { id: 'map-001', title: 'Peta Digital Wilayah Indonesia - Provinsi', description: 'File SHP batas administrasi tingkat provinsi', years: '2024', price: 500000, format: 'SHP', coverage: '38 Provinsi' },
            { id: 'map-002', title: 'Peta Digital Wilayah Indonesia - Kabupaten/Kota', description: 'File SHP batas administrasi tingkat kabupaten/kota', years: '2024', price: 1200000, format: 'SHP', coverage: '514 Kab/Kota' },
            { id: 'map-003', title: 'Peta Digital Wilayah Indonesia - Desa/Kelurahan', description: 'File SHP batas administrasi tingkat desa/kelurahan', years: '2024', price: 2500000, format: 'SHP', coverage: '83,000+ Desa' },
            { id: 'map-004', title: 'Peta Digital Wilayah Indonesia - Kecamatan', description: 'File SHP batas administrasi tingkat kecamatan', years: '2024', price: 1800000, format: 'SHP', coverage: '7,000+ Kecamatan' },
            { id: 'map-005', title: 'Peta Tematik Kepadatan Penduduk 2024', description: 'Peta tematik distribusi penduduk Indonesia', years: '2024', price: 800000, format: 'SHP', coverage: 'Nasional' },
        ]
    }
};

// Flat products array for cart lookup
const products = [];
Object.entries(catalogData).forEach(([catKey, cat]) => {
    if (cat.products) {
        cat.products.forEach(p => products.push({ ...p, type: catKey, badge: cat.label, badgeColor: cat.color, level: p.level || 'national' }));
    }
    if (cat.kategori) {
        Object.entries(cat.kategori).forEach(([, kat]) => {
            Object.entries(kat.subKategori).forEach(([, prods]) => {
                prods.forEach(p => products.push({ ...p, type: catKey, badge: cat.label, badgeColor: cat.color, level: p.level || 'national' }));
            });
        });
    }
});

// Cart Management
let cart = [];
let currentView = 'grid';

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try { cart = JSON.parse(savedCart); updateCartUI(); } catch (e) { cart = []; }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// =====================
// CATALOG NAVIGATION
// =====================

function showStep(stepId) {
    if (stepId === 'stepKatalog') {
        document.getElementById('stepKategori').classList.add('hidden');
        document.getElementById('stepSubKategori').classList.add('hidden');
    } else if (stepId === 'stepKategori') {
        document.getElementById('stepKategori').classList.remove('hidden');
        document.getElementById('stepSubKategori').classList.add('hidden');
    } else if (stepId === 'stepSubKategori') {
        document.getElementById('stepKategori').classList.remove('hidden');
        document.getElementById('stepSubKategori').classList.remove('hidden');
    }
}

function updateBreadcrumb() {
    document.getElementById('navBreadcrumb').classList.add('hidden');
}

function setActiveCard(selector, activeId, colorClass) {
    document.querySelectorAll(selector).forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50', 'border-emerald-500', 'bg-emerald-50', 'border-orange-500', 'bg-orange-50');
        btn.classList.add('border-gray-200');
    });
    if (activeId) {
        const el = document.getElementById(activeId);
        if (el) { el.classList.remove('border-gray-200'); el.classList.add(...colorClass.split(' ')); }
    }
}

function goToStep(step) {
    document.getElementById('productsSection').classList.add('hidden');
    if (step === 'katalog') {
        selectedCatalog = null; selectedKategori = null; selectedSubKategori = null;
        showStep('stepKatalog');
        setActiveCard('.catalog-btn', null, '');
        setActiveCard('.kategori-btn', null, '');
    } else if (step === 'kategori') {
        selectedKategori = null; selectedSubKategori = null;
        showStep('stepKategori');
        setActiveCard('.kategori-btn', null, '');
    } else if (step === 'subkategori') {
        selectedSubKategori = null;
        renderSubKategori();
        showStep('stepSubKategori');
    }
}

// Tombol back dari halaman produk
function backFromProducts() {
    document.getElementById('productsSection').classList.add('hidden');
}

function selectCatalog(type) {
    selectedCatalog = type;
    selectedKategori = null;
    selectedSubKategori = null;
    const cat = catalogData[type];

    const colorMap = {
        microdata: 'border-blue-500 bg-blue-50',
        publication: 'border-emerald-500 bg-emerald-50',
        map: 'border-orange-500 bg-orange-50',
    };
    setActiveCard('.catalog-btn', `cat-${type}`, colorMap[type]);

    if (type === 'microdata') {
        showStep('stepKategori');
        setActiveCard('.kategori-btn', null, '');
        document.getElementById('productsSection').classList.add('hidden');
    } else {
        showStep('stepKatalog');
        showProductsSection(type);
        document.getElementById('searchInput').value = '';
        document.getElementById('productsSection').classList.remove('hidden');
        renderProducts(cat.products.map(p => ({ level: 'national', ...p, type, badge: cat.label, badgeColor: cat.color })));
        lucide.createIcons();
    }
}

function selectKategori(kat) {
    selectedKategori = kat;
    selectedSubKategori = null;
    setActiveCard('.kategori-btn', `kat-${kat}`, 'border-blue-500 bg-blue-50');
    renderSubKategori();
    showStep('stepSubKategori');
    document.getElementById('productsSection').classList.add('hidden');
}

function renderSubKategori() {
    const kat = catalogData[selectedCatalog].kategori[selectedKategori];
    const container = document.getElementById('subKategoriList');
    container.innerHTML = Object.keys(kat.subKategori).map(subKey => {
        const count = kat.subKategori[subKey].length;
        const isActive = selectedSubKategori === subKey;
        return `
            <button onclick="selectSubKategori('${subKey.replace(/'/g, "\\'")}')"
                class="group text-left p-4 border-2 rounded-xl transition-all ${isActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'}">
                <p class="font-semibold text-sm mb-1 leading-tight ${isActive ? 'text-blue-700' : 'text-gray-900'}">${subKey}</p>
                <p class="text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}">${count} dataset</p>
            </button>
        `;
    }).join('');
}

function selectSubKategori(subKey) {
    selectedSubKategori = subKey;
    const cat = catalogData[selectedCatalog];
    const kat = cat.kategori[selectedKategori];
    const prods = kat.subKategori[subKey].map(p => ({ level: 'national', ...p, type: selectedCatalog, badge: cat.label, badgeColor: cat.color }));

    updateBreadcrumb();
    renderSubKategori(); // re-render untuk update active state
    document.getElementById('publicationFilters').classList.add('hidden');
    document.getElementById('searchInput').value = '';
    document.getElementById('productsSection').classList.remove('hidden');
    showProductsSection(selectedCatalog);
    renderProducts(prods);
    lucide.createIcons();

    // Scroll ke produk
    setTimeout(() => document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    initializeViewToggle();
    initializeCart();
    initializeFilters();
    initializeDataSelectionModal();
});

// Render Products
function renderProducts(productsToRender) {
    const container = document.getElementById('productsContainer');
    const emptyState = document.getElementById('emptyState');
    
    if (productsToRender.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        updateResultCount(0);
        return;
    }
    
    container.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    if (currentView === 'grid') {
        container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
        container.innerHTML = productsToRender.map(product => createProductCardGrid(product)).join('');
    } else {
        container.className = 'space-y-4';
        container.innerHTML = productsToRender.map(product => createProductCardList(product)).join('');
    }
    
    lucide.createIcons();
    updateResultCount(productsToRender.length);
}

// Create Product Card - Grid View (Smaller)
function createProductCardGrid(product) {
    const isFree = product.isFree || product.price === 0;
    const badgeColors = {
        blue: 'bg-blue-50 text-blue-700',
        green: 'bg-emerald-50 text-emerald-700',
        orange: 'bg-orange-50 text-orange-700'
    };
    
    // Icon berdasarkan kategori
    const categoryIcons = {
        microdata: 'database',
        publication: 'book-open',
        map: 'map'
    };
    const icon = categoryIcons[product.type] || product.icon;
    
    const priceDisplay = isFree 
        ? '<span class="text-emerald-600 font-bold text-sm">Gratis</span>'
        : `<span class="text-blue-900 font-bold text-sm">Rp ${product.price.toLocaleString('id-ID')}</span>`;
    
    const buttonClass = isFree
        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800';
    
    let additionalInfo = '';
    if (product.type === 'publication') {
        additionalInfo = `
            <div class="flex items-center gap-3 text-xs text-gray-500 mt-2">
                <span class="flex items-center gap-1">
                    <i data-lucide="file" class="w-3 h-3"></i>
                    ${product.format}
                </span>
                <span class="flex items-center gap-1">
                    <i data-lucide="file-text" class="w-3 h-3"></i>
                    ${product.pages} hal
                </span>
            </div>
        `;
    } else if (product.type === 'map') {
        additionalInfo = `
            <div class="flex items-center gap-3 text-xs text-gray-500 mt-2">
                <span class="flex items-center gap-1">
                    <i data-lucide="layers" class="w-3 h-3"></i>
                    ${product.format}
                </span>
                <span class="flex items-center gap-1">
                    <i data-lucide="map" class="w-3 h-3"></i>
                    ${product.coverage}
                </span>
            </div>
        `;
    }
    
    return `
        <a href="produk.html?id=${product.id}" class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200 p-4 flex flex-col cursor-pointer">
            <div class="flex items-start justify-between mb-3">
                <div class="w-10 h-10 bg-${product.badgeColor}-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i data-lucide="${icon}" class="w-5 h-5 text-${product.badgeColor}-600"></i>
                </div>
                <div>
                    <span class="text-xs font-semibold px-2 py-1 ${badgeColors[product.badgeColor]} rounded-full whitespace-nowrap">
                        ${product.badge}
                    </span>
                </div>
            </div>
            
            <h3 class="text-sm font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">
                ${product.title}
            </h3>
            
            <p class="text-xs text-gray-600 mb-2 line-clamp-2">
                ${product.description}
            </p>
            
            <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span class="flex items-center gap-1">
                    <i data-lucide="map-pin" class="w-3 h-3"></i>
                    ${getLevelLabel(product.level)}
                </span>
                <span class="flex items-center gap-1">
                    <i data-lucide="calendar" class="w-3 h-3"></i>
                    ${product.years}
                </span>
            </div>
            
            ${additionalInfo}
            
            <div class="flex-1"></div>
            
            <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div>
                    ${priceDisplay}
                    <p class="text-xs text-gray-500">${!isFree ? 'Fullset' : 'Akses Terbuka'}</p>
                </div>
                <button 
                    onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')"
                    class="${buttonClass} px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 hover:scale-105"
                >
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    Tambah
                </button>
            </div>
        </a>
    `;
}

// Create Product Card - List View
function createProductCardList(product) {
    const isFree = product.isFree || product.price === 0;
    const badgeColors = {
        blue: 'bg-blue-50 text-blue-700',
        green: 'bg-emerald-50 text-emerald-700',
        orange: 'bg-orange-50 text-orange-700'
    };

    // Icon berdasarkan kategori
    const categoryIcons = {
        microdata: 'database',
        publication: 'book-open',
        map: 'map'
    };
    const icon = categoryIcons[product.type] || product.icon;

    const priceDisplay = isFree
        ? '<span class="text-emerald-600 font-bold">Gratis</span>'
        : `<span class="text-blue-900 font-bold">Rp ${product.price.toLocaleString('id-ID')}</span>`;

    const buttonClass = isFree
        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800';

    let additionalInfo = '';
    if (product.type === 'publication') {
        additionalInfo = `
            <span class="flex items-center gap-1 text-sm text-gray-500">
                <i data-lucide="file" class="w-4 h-4"></i>
                ${product.format}, ${product.pages} hal
            </span>
        `;
    } else if (product.type === 'map') {
        additionalInfo = `
            <span class="flex items-center gap-1 text-sm text-gray-500">
                <i data-lucide="layers" class="w-4 h-4"></i>
                ${product.format}, ${product.coverage}
            </span>
        `;
    }

    return `
        <a href="produk.html?id=${product.id}" class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200 p-5 block">
            <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-${product.badgeColor}-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i data-lucide="${icon}" class="w-7 h-7 text-${product.badgeColor}-600"></i>
                </div>

                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xs font-semibold px-2.5 py-1 ${badgeColors[product.badgeColor]} rounded-full">
                            ${product.badge}
                        </span>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-1">
                        ${product.title}
                    </h3>
                    <p class="text-sm text-gray-600 mb-3">
                        ${product.description}
                    </p>
                    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span class="flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-4 h-4"></i>
                            ${getLevelLabel(product.level)}
                        </span>
                        <span class="flex items-center gap-1">
                            <i data-lucide="calendar" class="w-4 h-4"></i>
                            ${product.years}
                        </span>
                        ${additionalInfo}
                    </div>
                </div>

                <div class="flex flex-col items-end gap-3 flex-shrink-0">
                    <div class="text-right">
                        ${priceDisplay}
                        <p class="text-xs text-gray-500 mt-0.5">${!isFree ? 'Fullset' : 'Akses Terbuka'}</p>
                    </div>
                    <button
                        onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')"
                        class="${buttonClass} px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap hover:scale-105"
                    >
                        <i data-lucide="plus" class="w-4 h-4"></i>
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </a>
    `;
}


// Get Level Label
function getLevelLabel(level) {
    const labels = {
        'national': 'Nasional',
        'province': 'Provinsi',
        'city': 'Kota/Kabupaten',
        'village': 'Desa/Kelurahan'
    };
    return labels[level] || level;
}

// Kabupaten data per provinsi (sample)
const kabupatenData = {
    aceh: ['Kab. Aceh Besar', 'Kab. Pidie', 'Kota Banda Aceh', 'Kota Sabang'],
    sumut: ['Kab. Deli Serdang', 'Kab. Langkat', 'Kota Medan', 'Kota Binjai'],
    sumbar: ['Kab. Agam', 'Kab. Tanah Datar', 'Kota Padang', 'Kota Bukittinggi'],
    riau: ['Kab. Kampar', 'Kab. Bengkalis', 'Kota Pekanbaru', 'Kota Dumai'],
    jambi: ['Kab. Batanghari', 'Kab. Muaro Jambi', 'Kota Jambi'],
    dki: ['Kota Jakarta Pusat', 'Kota Jakarta Utara', 'Kota Jakarta Barat', 'Kota Jakarta Selatan', 'Kota Jakarta Timur'],
    jabar: ['Kab. Bogor', 'Kab. Bandung', 'Kota Bandung', 'Kota Bekasi', 'Kota Depok'],
    jateng: ['Kab. Semarang', 'Kab. Banyumas', 'Kota Semarang', 'Kota Solo'],
    diy: ['Kab. Sleman', 'Kab. Bantul', 'Kab. Gunungkidul', 'Kota Yogyakarta'],
    jatim: ['Kab. Malang', 'Kab. Sidoarjo', 'Kota Surabaya', 'Kota Malang'],
    bali: ['Kab. Badung', 'Kab. Gianyar', 'Kab. Tabanan', 'Kota Denpasar'],
};

const YEAR_MIN = 2000;
const YEAR_MAX = new Date().getFullYear();

function initYearSlider(fromId, toId, trackId, labelId) {
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    const trackEl = document.getElementById(trackId);
    const labelEl = document.getElementById(labelId);

    // Set max to current year
    fromEl.max = YEAR_MAX;
    toEl.max = YEAR_MAX;
    toEl.value = YEAR_MAX;

    function update() {
        let from = parseInt(fromEl.value);
        let to = parseInt(toEl.value);
        if (from > to) { [fromEl.value, toEl.value] = [to, from]; from = parseInt(fromEl.value); to = parseInt(toEl.value); }
        const pct = (v) => ((v - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100;
        trackEl.style.left = pct(from) + '%';
        trackEl.style.width = (pct(to) - pct(from)) + '%';
        labelEl.textContent = `${from} — ${to}`;
        applyCurrentFilters();
    }

    fromEl.addEventListener('input', update);
    toEl.addEventListener('input', update);
    update();
}

function showProductsSection(type) {
    document.getElementById('microdataFilters').classList.toggle('hidden', type !== 'microdata');
    document.getElementById('publicationFilters').classList.toggle('hidden', type !== 'publication');
    document.getElementById('mapFilters').classList.toggle('hidden', type !== 'map');
}

// Initialize Filters
function initializeFilters() {
    document.getElementById('searchInput').addEventListener('input', () => applyCurrentFilters());

    // Year sliders
    initYearSlider('yearFrom', 'yearTo', 'yearTrack', 'yearRangeLabel');
    initYearSlider('pubYearFrom', 'pubYearTo', 'pubYearTrack', 'pubYearRangeLabel');
    initYearSlider('mapYearFrom', 'mapYearTo', 'mapYearTrack', 'mapYearRangeLabel');

    // Level dropdowns
    document.getElementById('filterLevel').addEventListener('change', () => applyCurrentFilters());
    document.getElementById('filterMapLevel').addEventListener('change', () => applyCurrentFilters());

    // Provinsi → populate kabupaten
    document.getElementById('filterProvinsi').addEventListener('change', (e) => {
        const kabEl = document.getElementById('filterKabupaten');
        const list = kabupatenData[e.target.value] || [];
        if (list.length) {
            kabEl.disabled = false;
            kabEl.innerHTML = '<option value="">Semua Kab/Kota</option>' +
                list.map(k => `<option value="${k}">${k}</option>`).join('');
        } else {
            kabEl.disabled = true;
            kabEl.innerHTML = '<option value="">Pilih provinsi dulu</option>';
        }
        applyCurrentFilters();
    });
    document.getElementById('filterKabupaten').addEventListener('change', () => applyCurrentFilters());

    // Reset
    document.getElementById('resetFilters').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('filterLevel').value = '';
        document.getElementById('filterMapLevel').value = '';
        document.getElementById('filterProvinsi').value = '';
        document.getElementById('filterKabupaten').innerHTML = '<option value="">Pilih provinsi dulu</option>';
        document.getElementById('filterKabupaten').disabled = true;

        // Reset sliders
        ['yearFrom', 'pubYearFrom', 'mapYearFrom'].forEach(id => { document.getElementById(id).value = YEAR_MIN; });
        ['yearTo', 'pubYearTo', 'mapYearTo'].forEach(id => { document.getElementById(id).value = YEAR_MAX; });
        initYearSlider('yearFrom', 'yearTo', 'yearTrack', 'yearRangeLabel');
        initYearSlider('pubYearFrom', 'pubYearTo', 'pubYearTrack', 'pubYearRangeLabel');
        initYearSlider('mapYearFrom', 'mapYearTo', 'mapYearTrack', 'mapYearRangeLabel');

        applyCurrentFilters();
    });
}

function extractMinYear(years) {
    const nums = String(years).match(/\d{4}/g);
    return nums ? Math.min(...nums.map(Number)) : 0;
}

function extractMaxYear(years) {
    const nums = String(years).match(/\d{4}/g);
    return nums ? Math.max(...nums.map(Number)) : 9999;
}

// Initialize View Toggle
function initializeViewToggle() {
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    
    gridViewBtn.addEventListener('click', () => {
        currentView = 'grid';
        // Grid aktif: bg biru, icon putih, no hover effect
        gridViewBtn.className = 'p-2 border-2 bg-blue-600 border-blue-600 text-white rounded-lg transition-all';
        // List inaktif: bg putih, icon biru, hover border biru
        listViewBtn.className = 'p-2 border-2 bg-white border-gray-200 text-blue-600 rounded-lg hover:border-blue-600 transition-all';
        
        applyCurrentFilters();
    });
    
    listViewBtn.addEventListener('click', () => {
        currentView = 'list';
        // List aktif: bg biru, icon putih, no hover effect
        listViewBtn.className = 'p-2 border-2 bg-blue-600 border-blue-600 text-white rounded-lg transition-all';
        // Grid inaktif: bg putih, icon biru, hover border biru
        gridViewBtn.className = 'p-2 border-2 bg-white border-gray-200 text-blue-600 rounded-lg hover:border-blue-600 transition-all';
        
        applyCurrentFilters();
    });
}

function applyCurrentFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const cat = catalogData[selectedCatalog];
    if (!cat) return;

    let base = [];
    if (selectedSubKategori) {
        const kat = cat.kategori[selectedKategori];
        base = kat.subKategori[selectedSubKategori].map(p => ({ level: 'national', ...p, type: selectedCatalog, badge: cat.label, badgeColor: cat.color }));
    } else if (cat.products) {
        base = cat.products.map(p => ({ level: 'national', ...p, type: selectedCatalog, badge: cat.label, badgeColor: cat.color }));
    }

    let filtered = base;

    if (search) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search)
        );
    }

    if (selectedCatalog === 'microdata') {
        const level = document.getElementById('filterLevel')?.value;
        const yearFrom = parseInt(document.getElementById('yearFrom')?.value) || YEAR_MIN;
        const yearTo = parseInt(document.getElementById('yearTo')?.value) || YEAR_MAX;
        if (level) filtered = filtered.filter(p => p.level === level);
        filtered = filtered.filter(p => extractMaxYear(p.years) >= yearFrom && extractMinYear(p.years) <= yearTo);
    }

    if (selectedCatalog === 'publication') {
        const yearFrom = parseInt(document.getElementById('pubYearFrom')?.value) || YEAR_MIN;
        const yearTo = parseInt(document.getElementById('pubYearTo')?.value) || YEAR_MAX;
        filtered = filtered.filter(p => extractMaxYear(p.years) >= yearFrom && extractMinYear(p.years) <= yearTo);
    }

    if (selectedCatalog === 'map') {
        const level = document.getElementById('filterMapLevel')?.value;
        const yearFrom = parseInt(document.getElementById('mapYearFrom')?.value) || YEAR_MIN;
        const yearTo = parseInt(document.getElementById('mapYearTo')?.value) || YEAR_MAX;
        if (level) filtered = filtered.filter(p => p.level === level);
        filtered = filtered.filter(p => extractMaxYear(p.years) >= yearFrom && extractMinYear(p.years) <= yearTo);
    }

    renderProducts(filtered);
}

// Update Result Count
function updateResultCount(count) {
    const resultCount = document.getElementById('resultCount');
    resultCount.textContent = count;
}

// Cart Functions
function initializeCart() {
    const floatingCart = document.getElementById('floatingCart');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    const clearCartBtn = document.getElementById('clearCart');
    const checkoutCartBtn = document.getElementById('checkoutCart');
    
    // Open modal
    floatingCart.addEventListener('click', () => {
        openCartModal();
    });
    
    // Close modal
    closeCartModal.addEventListener('click', () => {
        closeCartModalFunc();
    });
    
    // Close on backdrop click
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModalFunc();
        }
    });
    
    // Clear cart
    clearCartBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        
        if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
            cart = [];
            saveCart();
            updateCartUI();
            renderCartItems();
            showNotification('Keranjang berhasil dikosongkan', 'info');
        }
    });
    
    // Checkout
    checkoutCartBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Keranjang masih kosong', 'info');
            return;
        }
        
        // Save cart to localStorage
        saveCart();
        
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    });
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('hidden');
    cartModal.classList.add('flex');
    renderCartItems();
    document.body.style.overflow = 'hidden';
}

function closeCartModalFunc() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('hidden');
    cartModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const emptyState = document.getElementById('cartEmptyState');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        cartItemCount.textContent = '0';
        cartTotal.textContent = 'Rp 0';
        return;
    }
    
    container.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartItemCount.textContent = cart.length;
    cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    
    container.innerHTML = cart.map((item, index) => {
        const product = products.find(p => p.id === item.id);
        const badgeColors = {
            blue: 'bg-blue-50 text-blue-700',
            green: 'bg-emerald-50 text-emerald-700',
            orange: 'bg-orange-50 text-orange-700'
        };
        
        // Icon berdasarkan kategori
        const categoryIcons = {
            microdata: 'database',
            publication: 'book-open',
            map: 'map'
        };
        const icon = categoryIcons[product.type] || product.icon;
        
        // Data type info
        let dataTypeInfo = '';
        if (item.dataType === 'full') {
            dataTypeInfo = '<span class="text-xs text-green-600 font-medium">Fullset</span>';
        } else if (item.dataType === 'custom') {
            dataTypeInfo = `
                <div class="text-xs text-orange-600 font-medium mb-1">Non Full Data Set</div>
                <div class="text-xs text-gray-500">
                    <div class="mb-1"><strong>Wilayah:</strong> ${item.regions.slice(0, 2).join(', ')}${item.regions.length > 2 ? ` +${item.regions.length - 2} lainnya` : ''}</div>
                    <div><strong>Variabel:</strong> ${item.variables.slice(0, 2).join(', ')}${item.variables.length > 2 ? ` +${item.variables.length - 2} lainnya` : ''}</div>
                </div>
            `;
        }
        
        // Edit button for microdata
        const editButton = product.type === 'microdata' ? `
            <button onclick="editCartItem(${index})" class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded hover:bg-blue-100 transition-colors" title="Edit">
                <i data-lucide="edit-2" class="w-4 h-4 text-blue-600"></i>
            </button>
        ` : '';
        
        return `
            <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg mb-3">
                <div class="w-12 h-12 bg-${product.badgeColor}-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i data-lucide="${icon}" class="w-6 h-6 text-${product.badgeColor}-600"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <h4 class="font-semibold text-gray-900 text-sm line-clamp-2">${item.title}</h4>
                        <div class="flex gap-1">
                            ${editButton}
                            <button onclick="removeFromCart(${index})" class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded hover:bg-red-100 transition-colors" title="Hapus">
                                <i data-lucide="trash-2" class="w-4 h-4 text-red-600"></i>
                            </button>
                        </div>
                    </div>
                    <span class="inline-block text-xs font-semibold px-2 py-1 ${badgeColors[product.badgeColor]} rounded-full mb-2">
                        ${product.badge}
                    </span>
                    <div class="mb-2">
                        ${dataTypeInfo}
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-blue-900">Rp ${item.price.toLocaleString('id-ID')}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    lucide.createIcons();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: productId,
        title: product.title,
        price: product.price,
        type: product.type
    };
    
    cart.push(cartItem);
    updateCartUI();
    
    // Show notification
    showNotification(`${product.title} ditambahkan ke keranjang`, 'success');
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    renderCartItems();
    showNotification('Produk dihapus dari keranjang', 'info');
}

function editCartItem(index) {
    const item = cart[index];
    const product = products.find(p => p.id === item.id);
    
    if (!product || product.type !== 'microdata') return;
    
    // Remove item from cart temporarily
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    
    // Close cart modal
    closeCartModalFunc();
    
    // Open data selection modal with pre-filled data
    currentProductForSelection = item.id;
    
    if (item.dataType === 'custom' && item.selectedRegionIds && item.selectedVariableIds) {
        selectedRegions = [...item.selectedRegionIds];
        selectedVariables = [...item.selectedVariableIds];
    } else {
        selectedRegions = [];
        selectedVariables = [];
    }
    
    const modal = document.getElementById('dataSelectionModal');
    const title = document.getElementById('modalProductTitle');
    const fullPrice = document.getElementById('fullPrice');
    
    title.textContent = product.title;
    fullPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    
    // Set radio button based on data type
    if (item.dataType === 'full') {
        document.querySelector('input[name="dataType"][value="full"]').checked = true;
        document.getElementById('step2').classList.add('hidden');
        document.getElementById('priceResult').classList.add('hidden');
    } else {
        document.querySelector('input[name="dataType"][value="nonfull"]').checked = true;
        document.getElementById('step2').classList.remove('hidden');
        renderRegions();
        renderVariables();
        // Show price if it was calculated before
        if (item.price > 0) {
            updateCustomPrice();
            document.getElementById('priceResult').classList.remove('hidden');
        } else {
            document.getElementById('priceResult').classList.add('hidden');
        }
    }
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => lucide.createIcons(), 100);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cart.length > 0) {
        cartCount.textContent = cart.length;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }
}

function showNotification(message, type = 'success') {
    const bgColor = type === 'success' ? 'bg-emerald-500' : 'bg-blue-500';
    const icon = type === 'success' ? 'check-circle' : 'info';
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i data-lucide="${icon}" class="w-5 h-5"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    lucide.createIcons();
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// Data Selection Modal
let currentProductForSelection = null;
let selectedRegions = [];
let selectedVariables = [];

// Sample data untuk testing (hanya Aceh dengan kabupaten/kota)
const regions = [
    { 
        id: 'aceh', 
        name: 'Aceh', 
        price: 250000,
        children: [
            { id: 'aceh-11', name: 'Kab. Simeulue', price: 50000 },
            { id: 'aceh-12', name: 'Kab. Aceh Singkil', price: 50000 },
            { id: 'aceh-13', name: 'Kab. Aceh Selatan', price: 50000 },
            { id: 'aceh-14', name: 'Kab. Aceh Tenggara', price: 50000 },
            { id: 'aceh-15', name: 'Kab. Aceh Timur', price: 50000 },
            { id: 'aceh-16', name: 'Kab. Aceh Tengah', price: 50000 },
            { id: 'aceh-17', name: 'Kab. Aceh Barat', price: 50000 },
            { id: 'aceh-18', name: 'Kab. Aceh Besar', price: 50000 },
            { id: 'aceh-19', name: 'Kab. Pidie', price: 50000 },
            { id: 'aceh-71', name: 'Kota Banda Aceh', price: 50000 }
        ]
    }
];

const variables = [
    { id: 'v1', name: 'ID Unik Rumah Tangga', code: 'ID_RUTA', price: 100000 },
    { id: 'v2', name: 'No Urut Anggota Rumah Tangga', code: 'R301', price: 80000 },
    { id: 'v3', name: 'Weight Rumah Tangga', code: 'WR', price: 90000 },
    { id: 'v4', name: 'Weight Individu', code: 'WI', price: 90000 },
    { id: 'v5', name: 'Klasifikasi', code: 'KLASIFIKAS', price: 70000 },
    { id: 'v6', name: 'Jumlah ART', code: 'JML_ART', price: 60000 }
];

function initializeDataSelectionModal() {
    const dataTypeRadios = document.querySelectorAll('input[name="dataType"]');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const closeBtn = document.getElementById('closeDataSelectionModal');
    const cancelBtn = document.getElementById('cancelDataSelection');
    const confirmBtn = document.getElementById('confirmDataSelection');
    const calculatePriceBtn = document.getElementById('calculatePrice');
    
    // Toggle between full and non-full
    dataTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'nonfull') {
                step2.classList.remove('hidden');
                renderRegions();
                renderVariables();
                // Hide price result when switching
                document.getElementById('priceResult').classList.add('hidden');
            } else {
                step2.classList.add('hidden');
                selectedRegions = [];
                selectedVariables = [];
            }
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeDataSelectionModal);
    cancelBtn.addEventListener('click', closeDataSelectionModal);
    
    // Confirm selection
    confirmBtn.addEventListener('click', confirmDataSelection);
    
    // Calculate price button
    calculatePriceBtn.addEventListener('click', () => {
        if (selectedRegions.length === 0 || selectedVariables.length === 0) {
            showNotification('Pilih minimal 1 wilayah dan 1 variabel', 'info');
            return;
        }
        updateCustomPrice();
        document.getElementById('priceResult').classList.remove('hidden');
        showNotification('Harga berhasil dihitung', 'success');
    });
    
    // Region search
    document.getElementById('regionSearch').addEventListener('input', (e) => {
        filterRegions(e.target.value);
    });
    
    // Variable search
    document.getElementById('variableSearch').addEventListener('input', (e) => {
        filterVariables(e.target.value);
    });
    
    // Select/Unselect all buttons
    document.getElementById('selectAllRegions').addEventListener('click', () => {
        selectedRegions = regions.map(r => r.id);
        renderRegions();
        document.getElementById('priceResult').classList.add('hidden');
    });
    
    document.getElementById('unselectAllRegions').addEventListener('click', () => {
        selectedRegions = [];
        renderRegions();
        document.getElementById('priceResult').classList.add('hidden');
    });
    
    document.getElementById('selectAllVariables').addEventListener('click', () => {
        selectedVariables = variables.map(v => v.id);
        renderVariables();
        document.getElementById('priceResult').classList.add('hidden');
    });
    
    document.getElementById('unselectAllVariables').addEventListener('click', () => {
        selectedVariables = [];
        renderVariables();
        document.getElementById('priceResult').classList.add('hidden');
    });
}

function openDataSelectionModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.type !== 'microdata') {
        // Jika bukan microdata, langsung tambah ke cart
        addToCartDirect(productId);
        return;
    }
    
    currentProductForSelection = productId;
    selectedRegions = [];
    selectedVariables = [];
    
    const modal = document.getElementById('dataSelectionModal');
    const title = document.getElementById('modalProductTitle');
    const fullPrice = document.getElementById('fullPrice');
    
    title.textContent = product.title;
    fullPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    
    // Reset to step 1
    document.querySelector('input[name="dataType"][value="full"]').checked = true;
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('priceResult').classList.add('hidden');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => lucide.createIcons(), 100);
}

function closeDataSelectionModal() {
    const modal = document.getElementById('dataSelectionModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    currentProductForSelection = null;
    selectedRegions = [];
    selectedVariables = [];
}

function renderRegions() {
    const container = document.getElementById('regionList');
    const count = document.getElementById('selectedRegionCount');
    
    count.textContent = selectedRegions.length;
    
    container.innerHTML = regions.map(region => {
        const isParentSelected = selectedRegions.includes(region.id);
        const hasChildren = region.children && region.children.length > 0;
        
        let html = `
            <div class="space-y-2">
                <label class="flex items-center gap-3 p-3 border-2 border-gray-300 rounded-lg hover:bg-white cursor-pointer transition-colors font-semibold ${isParentSelected ? 'bg-blue-50 border-blue-400' : 'bg-gray-50'}">
                    <input 
                        type="checkbox" 
                        value="${region.id}"
                        ${isParentSelected ? 'checked' : ''}
                        onchange="toggleRegion('${region.id}')"
                        class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    >
                    <span class="flex-1 text-sm font-bold text-gray-900">${region.name}</span>
                </label>
        `;
        
        // Render children if parent is selected
        if (hasChildren && isParentSelected) {
            html += `<div class="ml-8 space-y-2 border-l-2 border-blue-200 pl-4">`;
            region.children.forEach(child => {
                const isChildSelected = selectedRegions.includes(child.id);
                html += `
                    <label class="flex items-center gap-3 p-2 border border-gray-200 rounded-lg hover:bg-white cursor-pointer transition-colors ${isChildSelected ? 'bg-blue-50 border-blue-300' : 'bg-white'}">
                        <input 
                            type="checkbox" 
                            value="${child.id}"
                            ${isChildSelected ? 'checked' : ''}
                            onchange="toggleRegion('${child.id}')"
                            class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        >
                        <span class="flex-1 text-sm text-gray-900">${child.name}</span>
                    </label>
                `;
            });
            html += `</div>`;
        }
        
        html += `</div>`;
        return html;
    }).join('');
}

function renderVariables() {
    const container = document.getElementById('variableList');
    const count = document.getElementById('selectedVariableCount');
    
    count.textContent = selectedVariables.length;
    
    container.innerHTML = variables.map(variable => {
        const isSelected = selectedVariables.includes(variable.id);
        return `
            <label class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-white cursor-pointer transition-colors ${isSelected ? 'bg-blue-50 border-blue-300' : 'bg-white'}">
                <input 
                    type="checkbox" 
                    value="${variable.id}"
                    ${isSelected ? 'checked' : ''}
                    onchange="toggleVariable('${variable.id}')"
                    class="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                >
                <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">${variable.name}</p>
                    <p class="text-xs text-gray-500">${variable.code}</p>
                </div>
            </label>
        `;
    }).join('');
}

function toggleRegion(regionId) {
    const index = selectedRegions.indexOf(regionId);
    if (index > -1) {
        selectedRegions.splice(index, 1);
    } else {
        selectedRegions.push(regionId);
    }
    renderRegions();
    // Hide price result when selection changes
    document.getElementById('priceResult').classList.add('hidden');
}

function toggleVariable(variableId) {
    const index = selectedVariables.indexOf(variableId);
    if (index > -1) {
        selectedVariables.splice(index, 1);
    } else {
        selectedVariables.push(variableId);
    }
    renderVariables();
    // Hide price result when selection changes
    document.getElementById('priceResult').classList.add('hidden');
}

function filterRegions(searchTerm) {
    const items = document.querySelectorAll('#regionList label');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm.toLowerCase()) ? 'flex' : 'none';
    });
}

function filterVariables(searchTerm) {
    const items = document.querySelectorAll('#variableList label');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm.toLowerCase()) ? 'flex' : 'none';
    });
}

function updateCustomPrice() {
    let regionTotal = 0;
    
    selectedRegions.forEach(id => {
        // Check if it's a parent region
        const parentRegion = regions.find(r => r.id === id);
        if (parentRegion) {
            regionTotal += parentRegion.price;
        } else {
            // Check if it's a child region
            regions.forEach(parent => {
                if (parent.children) {
                    const child = parent.children.find(c => c.id === id);
                    if (child) {
                        regionTotal += child.price;
                    }
                }
            });
        }
    });
    
    const variableTotal = selectedVariables.reduce((sum, id) => {
        const variable = variables.find(v => v.id === id);
        return sum + (variable ? variable.price : 0);
    }, 0);
    
    const total = regionTotal + variableTotal;
    document.getElementById('customPrice').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function confirmDataSelection() {
    const dataType = document.querySelector('input[name="dataType"]:checked').value;
    const product = products.find(p => p.id === currentProductForSelection);
    
    if (!product) return;
    
    let cartItem;
    
    if (dataType === 'full') {
        // Full data set
        cartItem = {
            id: currentProductForSelection,
            title: product.title,
            price: product.price,
            type: product.type,
            dataType: 'full'
        };
    } else {
        // Non-full data set
        if (selectedRegions.length === 0 || selectedVariables.length === 0) {
            showNotification('Pilih minimal 1 wilayah dan 1 variabel', 'info');
            return;
        }
        
        let regionTotal = 0;
        const regionNames = [];
        
        selectedRegions.forEach(id => {
            const parentRegion = regions.find(r => r.id === id);
            if (parentRegion) {
                regionTotal += parentRegion.price;
                regionNames.push(parentRegion.name);
            } else {
                regions.forEach(parent => {
                    if (parent.children) {
                        const child = parent.children.find(c => c.id === id);
                        if (child) {
                            regionTotal += child.price;
                            regionNames.push(child.name);
                        }
                    }
                });
            }
        });
        
        const variableTotal = selectedVariables.reduce((sum, id) => {
            const variable = variables.find(v => v.id === id);
            return sum + (variable ? variable.price : 0);
        }, 0);
        
        cartItem = {
            id: currentProductForSelection,
            title: product.title,
            price: regionTotal + variableTotal,
            type: product.type,
            dataType: 'custom',
            regions: regionNames,
            variables: selectedVariables.map(id => variables.find(v => v.id === id).name),
            selectedRegionIds: [...selectedRegions],
            selectedVariableIds: [...selectedVariables]
        };
    }
    
    cart.push(cartItem);
    saveCart();
    updateCartUI();
    closeDataSelectionModal();
    showNotification(`${product.title} ditambahkan ke keranjang`, 'success');
}

function addToCartDirect(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: productId,
        title: product.title,
        price: product.price,
        type: product.type,
        dataType: 'full'
    };
    
    cart.push(cartItem);
    saveCart();
    updateCartUI();
    showNotification(`${product.title} ditambahkan ke keranjang`, 'success');
}

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (product.type === 'microdata' && !product.isFree) {
        openDataSelectionModal(productId);
    } else {
        addToCartDirect(productId);
    }
};

window.selectCatalog = selectCatalog;
window.selectKategori = selectKategori;
window.selectSubKategori = selectSubKategori;
window.goToStep = goToStep;
window.backFromProducts = backFromProducts;

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    initializeViewToggle();
    initializeCart();
    initializeFilters();
    initializeDataSelectionModal();
});
