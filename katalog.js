// Extended Product Data for Catalog
const products = [
    // Popular Products - Microdata
    {
        id: 'md-001',
        type: 'microdata',
        title: 'Survei Sosial Ekonomi Nasional (Susenas) 2024',
        description: 'Data lengkap kondisi sosial ekonomi rumah tangga Indonesia',
        level: 'national',
        years: '2020-2024',
        price: 5000000,
        isFree: false,
        icon: 'users',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-002',
        type: 'microdata',
        title: 'Survei Angkatan Kerja Nasional (Sakernas) 2024',
        description: 'Data ketenagakerjaan dan angkatan kerja Indonesia',
        level: 'national',
        years: '2020-2024',
        price: 4500000,
        isFree: false,
        icon: 'briefcase',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-003',
        type: 'microdata',
        title: 'Survei Potensi Desa (Podes) 2024',
        description: 'Data potensi desa dan kelurahan seluruh Indonesia',
        level: 'village',
        years: '2018, 2021, 2024',
        price: 6000000,
        isFree: false,
        icon: 'home',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-004',
        type: 'microdata',
        title: 'Sensus Penduduk 2020',
        description: 'Data sensus penduduk Indonesia lengkap',
        level: 'national',
        years: '2020',
        price: 8000000,
        isFree: false,
        icon: 'users-2',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    
    // Additional Microdata
    {
        id: 'md-005',
        type: 'microdata',
        title: 'Sensus Ekonomi 2024',
        description: 'Data lengkap usaha/perusahaan di Indonesia',
        level: 'national',
        years: '2024',
        price: 7500000,
        isFree: false,
        icon: 'trending-up',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-006',
        type: 'microdata',
        title: 'Survei Industri Mikro dan Kecil 2024',
        description: 'Data industri mikro dan kecil di Indonesia',
        level: 'province',
        years: '2023-2024',
        price: 3500000,
        isFree: false,
        icon: 'factory',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-007',
        type: 'microdata',
        title: 'Survei Pertanian Antar Sensus (SUTAS) 2023',
        description: 'Data pertanian rumah tangga Indonesia',
        level: 'province',
        years: '2023',
        price: 4000000,
        isFree: false,
        icon: 'sprout',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-008',
        type: 'microdata',
        title: 'Survei Konsumsi Makanan Individu (SKMI) 2023',
        description: 'Data konsumsi makanan dan gizi masyarakat',
        level: 'national',
        years: '2023',
        price: 3000000,
        isFree: false,
        icon: 'utensils',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-009',
        type: 'microdata',
        title: 'Survei Demografi dan Kesehatan Indonesia (SDKI) 2022',
        description: 'Data kesehatan reproduksi dan kependudukan',
        level: 'national',
        years: '2022',
        price: 5500000,
        isFree: false,
        icon: 'heart-pulse',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    {
        id: 'md-010',
        type: 'microdata',
        title: 'Survei Keamanan Pangan 2023',
        description: 'Data keamanan dan ketahanan pangan rumah tangga',
        level: 'province',
        years: '2023',
        price: 2500000,
        isFree: false,
        icon: 'shield-check',
        badge: 'Data Mikro',
        badgeColor: 'blue'
    },
    
    // Publications
    {
        id: 'pub-001',
        type: 'publication',
        title: 'Statistik Indonesia 2024',
        description: 'Publikasi tahunan statistik Indonesia tanpa watermark',
        level: 'national',
        years: '2024',
        price: 150000,
        isFree: false,
        icon: 'book-open',
        badge: 'Publikasi Elektronik',
        badgeColor: 'green',
        format: 'PDF',
        pages: 650
    },
    {
        id: 'pub-002',
        type: 'publication',
        title: 'Indikator Ekonomi Indonesia 2024',
        description: 'Publikasi bulanan indikator ekonomi',
        level: 'national',
        years: '2024',
        price: 75000,
        isFree: false,
        icon: 'file-text',
        badge: 'Publikasi Elektronik',
        badgeColor: 'green',
        format: 'PDF',
        pages: 120
    },
    {
        id: 'pub-003',
        type: 'publication',
        title: 'Buletin Statistik Perdagangan Luar Negeri',
        description: 'Publikasi triwulanan perdagangan internasional',
        level: 'national',
        years: '2024',
        price: 0,
        isFree: true,
        icon: 'globe',
        badge: 'Publikasi Elektronik',
        badgeColor: 'green',
        format: 'PDF',
        pages: 85
    },
    {
        id: 'pub-004',
        type: 'publication',
        title: 'Statistik Kriminal 2023',
        description: 'Data statistik kriminalitas Indonesia',
        level: 'national',
        years: '2023',
        price: 100000,
        isFree: false,
        icon: 'shield-alert',
        badge: 'Publikasi Elektronik',
        badgeColor: 'green',
        format: 'PDF',
        pages: 200
    },
    {
        id: 'pub-005',
        type: 'publication',
        title: 'Profil Kemiskinan Indonesia 2024',
        description: 'Analisis kemiskinan dan kesenjangan',
        level: 'national',
        years: '2024',
        price: 125000,
        isFree: false,
        icon: 'hand-heart',
        badge: 'Publikasi Elektronik',
        badgeColor: 'green',
        format: 'PDF',
        pages: 180
    },
    {
        id: 'pub-006',
        type: 'publication',
        title: 'Statistik Transportasi Darat 2023',
        description: 'Data transportasi dan mobilitas',
        level: 'national',
        years: '2023',
        price: 90000,
        isFree: false,
        icon: 'truck',
        badge: 'Publikasi Elektronik',
        badgeColor: 'green',
        format: 'PDF',
        pages: 150
    },
    
    // Digital Maps
    {
        id: 'map-001',
        type: 'map',
        title: 'Peta Digital Wilayah Indonesia - Provinsi',
        description: 'File SHP batas administrasi tingkat provinsi',
        level: 'province',
        years: '2024',
        price: 500000,
        isFree: false,
        icon: 'map',
        badge: 'Peta Digital',
        badgeColor: 'orange',
        format: 'SHP',
        coverage: '38 Provinsi'
    },
    {
        id: 'map-002',
        type: 'map',
        title: 'Peta Digital Wilayah Indonesia - Kabupaten/Kota',
        description: 'File SHP batas administrasi tingkat kabupaten/kota',
        level: 'city',
        years: '2024',
        price: 1200000,
        isFree: false,
        icon: 'map-pin',
        badge: 'Peta Digital',
        badgeColor: 'orange',
        format: 'SHP',
        coverage: '514 Kab/Kota'
    },
    {
        id: 'map-003',
        type: 'map',
        title: 'Peta Digital Wilayah Indonesia - Desa/Kelurahan',
        description: 'File SHP batas administrasi tingkat desa/kelurahan',
        level: 'village',
        years: '2024',
        price: 2500000,
        isFree: false,
        icon: 'map-pinned',
        badge: 'Peta Digital',
        badgeColor: 'orange',
        format: 'SHP',
        coverage: '83,000+ Desa'
    },
    {
        id: 'map-004',
        type: 'map',
        title: 'Peta Digital Wilayah Indonesia - Kecamatan',
        description: 'File SHP batas administrasi tingkat kecamatan',
        level: 'city',
        years: '2024',
        price: 1800000,
        isFree: false,
        icon: 'map-pin-off',
        badge: 'Peta Digital',
        badgeColor: 'orange',
        format: 'SHP',
        coverage: '7,000+ Kecamatan'
    },
    {
        id: 'map-005',
        type: 'map',
        title: 'Peta Tematik Kepadatan Penduduk 2024',
        description: 'Peta tematik distribusi penduduk Indonesia',
        level: 'national',
        years: '2024',
        price: 800000,
        isFree: false,
        icon: 'users',
        badge: 'Peta Digital',
        badgeColor: 'orange',
        format: 'SHP',
        coverage: 'Nasional'
    }
];

// Cart Management
let cart = [];
let currentView = 'grid'; // 'grid' or 'list'

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    initializeFilters();
    initializeViewToggle();
    initializeCart();
    updateResultCount(products.length);
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
        <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 flex flex-col">
            <div class="flex items-start justify-between mb-3">
                <div class="w-10 h-10 bg-${product.badgeColor}-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i data-lucide="${product.icon}" class="w-5 h-5 text-${product.badgeColor}-600"></i>
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
                    onclick="addToCart('${product.id}')"
                    class="${buttonClass} px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5"
                >
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    Tambah
                </button>
            </div>
        </div>
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
        <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
            <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-${product.badgeColor}-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i data-lucide="${product.icon}" class="w-7 h-7 text-${product.badgeColor}-600"></i>
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
                        onclick="addToCart('${product.id}')"
                        class="${buttonClass} px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap mt-4"
                    >
                        <i data-lucide="plus" class="w-4 h-4"></i>
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
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

// Initialize Filters
function initializeFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryRadios = document.querySelectorAll('input[name="category"]');
    const levelRadios = document.querySelectorAll('input[name="level"]');
    const resetBtn = document.getElementById('resetFilters');
    
    let currentCategory = '';
    let currentLevel = '';
    let currentSearch = '';
    
    // Search
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterProducts();
    });
    
    // Category Radio Buttons
    categoryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            filterProducts();
        });
    });
    
    // Level Radio Buttons
    levelRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentLevel = e.target.value;
            filterProducts();
        });
    });
    
    // Reset Button
    resetBtn.addEventListener('click', () => {
        currentCategory = '';
        currentLevel = '';
        currentSearch = '';
        
        searchInput.value = '';
        categoryRadios.forEach(radio => {
            radio.checked = radio.value === '';
        });
        levelRadios.forEach(radio => {
            radio.checked = radio.value === '';
        });
        
        filterProducts();
    });
    
    function filterProducts() {
        let filtered = products;
        
        // Filter by category
        if (currentCategory) {
            filtered = filtered.filter(p => p.type === currentCategory);
        }
        
        // Filter by level
        if (currentLevel) {
            filtered = filtered.filter(p => p.level === currentLevel);
        }
        
        // Filter by search
        if (currentSearch) {
            filtered = filtered.filter(p => 
                p.title.toLowerCase().includes(currentSearch) ||
                p.description.toLowerCase().includes(currentSearch) ||
                p.badge.toLowerCase().includes(currentSearch)
            );
        }
        
        renderProducts(filtered);
    }
}

// Initialize View Toggle
function initializeViewToggle() {
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    
    gridViewBtn.addEventListener('click', () => {
        currentView = 'grid';
        gridViewBtn.classList.add('border-blue-600', 'bg-blue-600', 'text-white');
        gridViewBtn.classList.remove('border-gray-200', 'text-gray-600');
        listViewBtn.classList.remove('border-blue-600', 'bg-blue-600', 'text-white');
        listViewBtn.classList.add('border-gray-200', 'text-gray-600');
        
        applyCurrentFilters();
    });
    
    listViewBtn.addEventListener('click', () => {
        currentView = 'list';
        listViewBtn.classList.add('border-blue-600', 'bg-blue-600', 'text-white');
        listViewBtn.classList.remove('border-gray-200', 'text-gray-600');
        gridViewBtn.classList.remove('border-blue-600', 'bg-blue-600', 'text-white');
        gridViewBtn.classList.add('border-gray-200', 'text-gray-600');
        
        applyCurrentFilters();
    });
}

function applyCurrentFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryRadios = document.querySelectorAll('input[name="category"]:checked');
    const levelRadios = document.querySelectorAll('input[name="level"]:checked');
    
    let filtered = products;
    
    const categoryValue = categoryRadios[0]?.value || '';
    const levelValue = levelRadios[0]?.value || '';
    const searchValue = searchInput.value.toLowerCase();
    
    if (categoryValue) filtered = filtered.filter(p => p.type === categoryValue);
    if (levelValue) filtered = filtered.filter(p => p.level === levelValue);
    if (searchValue) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(searchValue) ||
            p.description.toLowerCase().includes(searchValue) ||
            p.badge.toLowerCase().includes(searchValue)
        );
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
    floatingCart.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Keranjang Anda masih kosong', 'info');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Keranjang Belanja (${cart.length} item)\n\n` + 
              cart.map((item, index) => `${index + 1}. ${item.title}\n   Rp ${item.price.toLocaleString('id-ID')}`).join('\n\n') +
              `\n\n━━━━━━━━━━━━━━━━━━━━\nTotal: Rp ${total.toLocaleString('id-ID')}`);
    });
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
