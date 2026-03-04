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

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
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
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200 p-4 flex flex-col">
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
                    onclick="addToCart('${product.id}')"
                    class="${buttonClass} px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 hover:scale-105"
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
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200 p-5">
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
                        onclick="addToCart('${product.id}')"
                        class="${buttonClass} px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap hover:scale-105"
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

// Update addToCart function to open modal for microdata
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.type === 'microdata' && !product.isFree) {
        openDataSelectionModal(productId);
    } else {
        addToCartDirect(productId);
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    renderProducts(products);
    initializeFilters();
    initializeViewToggle();
    initializeCart();
    initializeDataSelectionModal();
    updateResultCount(products.length);
});
