// Mock Product Data Structure
const products = [
    // Microdata - Social Statistics
    {
        id: 'md-001',
        type: 'microdata',
        category: 'social',
        title: 'Survei Sosial Ekonomi Nasional (Susenas) 2024',
        description: 'Data lengkap kondisi sosial ekonomi rumah tangga Indonesia',
        level: 'national',
        price: 5000000,
        isFree: false,
        icon: 'users',
        badge: 'Statistik Sosial',
        metadata: {
            details: 'https://example.com/susenas-details',
            dictionary: 'https://example.com/susenas-dictionary',
            sample: 'https://example.com/susenas-sample',
            questionnaire: 'https://example.com/susenas-questionnaire'
        },
        variables: [
            { id: 'v1', name: 'Karakteristik Rumah Tangga', price: 250000 },
            { id: 'v2', name: 'Pendidikan', price: 300000 },
            { id: 'v3', name: 'Kesehatan', price: 350000 },
            { id: 'v4', name: 'Perumahan', price: 200000 },
            { id: 'v5', name: 'Konsumsi/Pengeluaran', price: 400000 }
        ]
    },
    {
        id: 'md-002',
        type: 'microdata',
        category: 'social',
        title: 'Survei Angkatan Kerja Nasional (Sakernas) 2024',
        description: 'Data ketenagakerjaan dan angkatan kerja Indonesia',
        level: 'national',
        price: 4500000,
        isFree: false,
        icon: 'briefcase',
        badge: 'Statistik Sosial',
        metadata: {
            details: '#',
            dictionary: '#',
            sample: '#',
            questionnaire: '#'
        },
        variables: [
            { id: 'v1', name: 'Status Pekerjaan', price: 300000 },
            { id: 'v2', name: 'Jam Kerja', price: 250000 },
            { id: 'v3', name: 'Upah/Pendapatan', price: 350000 },
            { id: 'v4', name: 'Lapangan Usaha', price: 200000 }
        ]
    },
    // Microdata - Economic Statistics
    {
        id: 'md-003',
        type: 'microdata',
        category: 'economic',
        title: 'Sensus Ekonomi 2024',
        description: 'Data lengkap usaha/perusahaan di Indonesia',
        level: 'national',
        price: 7500000,
        isFree: false,
        icon: 'trending-up',
        badge: 'Statistik Ekonomi',
        metadata: {
            details: '#',
            dictionary: '#',
            sample: '#',
            questionnaire: '#'
        },
        variables: [
            { id: 'v1', name: 'Karakteristik Usaha', price: 400000 },
            { id: 'v2', name: 'Tenaga Kerja', price: 350000 },
            { id: 'v3', name: 'Pendapatan Usaha', price: 500000 },
            { id: 'v4', name: 'Pengeluaran Usaha', price: 450000 }
        ]
    },
    {
        id: 'md-004',
        type: 'microdata',
        category: 'economic',
        title: 'Survei Industri Mikro dan Kecil 2024',
        description: 'Data industri mikro dan kecil di Indonesia',
        level: 'province',
        price: 3500000,
        isFree: false,
        icon: 'factory',
        badge: 'Statistik Ekonomi',
        metadata: {
            details: '#',
            dictionary: '#',
            sample: '#',
            questionnaire: '#'
        },
        variables: [
            { id: 'v1', name: 'Jenis Industri', price: 200000 },
            { id: 'v2', name: 'Produksi', price: 300000 },
            { id: 'v3', name: 'Bahan Baku', price: 250000 }
        ]
    },
    // Free Microdata
    {
        id: 'md-005',
        type: 'microdata',
        category: 'social',
        title: 'Data Pokok Kependudukan 2023 (Agregat)',
        description: 'Data agregat kependudukan untuk akses publik',
        level: 'national',
        price: 0,
        isFree: true,
        icon: 'users',
        badge: 'Akses Terbuka',
        metadata: {
            details: '#',
            dictionary: '#',
            sample: '#',
            questionnaire: '#'
        }
    },
    // Electronic Publications
    {
        id: 'pub-001',
        type: 'publication',
        category: 'publication',
        title: 'Statistik Indonesia 2024',
        description: 'Publikasi tahunan statistik Indonesia tanpa watermark',
        level: 'national',
        price: 150000,
        isFree: false,
        icon: 'book-open',
        badge: 'Publikasi',
        format: 'PDF',
        pages: 650
    },
    {
        id: 'pub-002',
        type: 'publication',
        category: 'publication',
        title: 'Indikator Ekonomi Indonesia 2024',
        description: 'Publikasi bulanan indikator ekonomi',
        level: 'national',
        price: 75000,
        isFree: false,
        icon: 'file-text',
        badge: 'Publikasi',
        format: 'PDF',
        pages: 120
    },
    {
        id: 'pub-003',
        type: 'publication',
        category: 'publication',
        title: 'Buletin Statistik Perdagangan Luar Negeri',
        description: 'Publikasi triwulanan perdagangan internasional',
        level: 'national',
        price: 0,
        isFree: true,
        icon: 'globe',
        badge: 'Akses Terbuka',
        format: 'PDF',
        pages: 85
    },
    // Digital Maps
    {
        id: 'map-001',
        type: 'map',
        category: 'map',
        title: 'Peta Digital Wilayah Indonesia - Provinsi',
        description: 'File SHP batas administrasi tingkat provinsi',
        level: 'province',
        price: 500000,
        isFree: false,
        icon: 'map',
        badge: 'Peta Digital',
        format: 'SHP',
        coverage: '38 Provinsi'
    },
    {
        id: 'map-002',
        type: 'map',
        category: 'map',
        title: 'Peta Digital Wilayah Indonesia - Kabupaten/Kota',
        description: 'File SHP batas administrasi tingkat kabupaten/kota',
        level: 'city',
        price: 1200000,
        isFree: false,
        icon: 'map-pin',
        badge: 'Peta Digital',
        format: 'SHP',
        coverage: '514 Kab/Kota'
    },
    {
        id: 'map-003',
        type: 'map',
        category: 'map',
        title: 'Peta Digital Wilayah Indonesia - Desa/Kelurahan',
        description: 'File SHP batas administrasi tingkat desa/kelurahan',
        level: 'village',
        price: 2500000,
        isFree: false,
        icon: 'map-pinned',
        badge: 'Peta Digital',
        format: 'SHP',
        coverage: '83,000+ Desa'
    }
];

// Cart Management
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    initializeFilters();
    initializeCart();
    initializeModal();
});

// Render Products
function renderProducts(productsToRender) {
    const grid = document.getElementById('productGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (productsToRender.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }
    
    grid.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    grid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
    lucide.createIcons();
}

// Create Product Card
function createProductCard(product) {
    const isFree = product.isFree || product.price === 0;
    const cardClass = isFree 
        ? 'bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-2 border-dashed border-gray-300' 
        : 'bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100';
    
    const priceDisplay = isFree 
        ? '<span class="text-green-600 font-bold">Gratis</span>'
        : `<span class="text-blue-900 font-bold">Rp ${product.price.toLocaleString('id-ID')}</span>`;
    
    const buttonClass = isFree
        ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
        : 'bg-blue-900 text-white hover:bg-blue-800';
    
    const buttonText = isFree ? 'Akses Gratis' : 'Tambah';
    
    let additionalInfo = '';
    if (product.type === 'publication') {
        additionalInfo = `
            <div class="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <span class="flex items-center gap-1">
                    <i data-lucide="file" class="w-4 h-4"></i>
                    ${product.format}
                </span>
                <span class="flex items-center gap-1">
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    ${product.pages} hal
                </span>
            </div>
        `;
    } else if (product.type === 'map') {
        additionalInfo = `
            <div class="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <span class="flex items-center gap-1">
                    <i data-lucide="layers" class="w-4 h-4"></i>
                    ${product.format}
                </span>
                <span class="flex items-center gap-1">
                    <i data-lucide="map" class="w-4 h-4"></i>
                    ${product.coverage}
                </span>
            </div>
        `;
    }
    
    const variableButton = product.type === 'microdata' && !isFree ? `
        <button 
            onclick="openVariableModal('${product.id}')"
            class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 mt-3"
        >
            <i data-lucide="sliders" class="w-4 h-4"></i>
            Pilih Variabel Spesifik
        </button>
    ` : '';
    
    const metadataLinks = product.metadata ? `
        <div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
            <a href="${product.metadata.details}" class="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <i data-lucide="info" class="w-3 h-3"></i>
                Detail
            </a>
            <a href="${product.metadata.dictionary}" class="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <i data-lucide="book" class="w-3 h-3"></i>
                Kamus Data
            </a>
            <a href="${product.metadata.sample}" class="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <i data-lucide="eye" class="w-3 h-3"></i>
                Sampel
            </a>
            <a href="${product.metadata.questionnaire}" class="text-xs text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <i data-lucide="clipboard-list" class="w-3 h-3"></i>
                Kuesioner
            </a>
        </div>
    ` : '';
    
    return `
        <div class="${cardClass} p-6" data-product-id="${product.id}" data-type="${product.type}" data-category="${product.category}" data-level="${product.level}">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <i data-lucide="${product.icon}" class="w-6 h-6 text-blue-600"></i>
                    </div>
                    <span class="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                        ${product.badge}
                    </span>
                </div>
            </div>
            
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                ${product.title}
            </h3>
            
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">
                ${product.description}
            </p>
            
            ${additionalInfo}
            ${metadataLinks}
            ${variableButton}
            
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div>
                    ${priceDisplay}
                    ${!isFree ? '<p class="text-xs text-gray-500 mt-1">Fullset</p>' : '<p class="text-xs text-gray-500 mt-1">Akses Terbuka</p>'}
                </div>
                <button 
                    onclick="addToCart('${product.id}')"
                    class="${buttonClass} px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2"
                >
                    <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

// Initialize Filters
function initializeFilters() {
    const searchInput = document.getElementById('searchInput');
    const levelFilter = document.getElementById('levelFilter');
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    let currentCategory = 'all';
    let currentLevel = '';
    let currentSearch = '';
    
    // Search
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterProducts();
    });
    
    // Level Filter
    levelFilter.addEventListener('change', (e) => {
        currentLevel = e.target.value;
        filterProducts();
    });
    
    // Category Tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => {
                t.classList.remove('active', 'bg-blue-900', 'text-white');
                t.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            });
            tab.classList.add('active', 'bg-blue-900', 'text-white');
            tab.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            
            currentCategory = tab.dataset.category;
            filterProducts();
        });
    });
    
    // Initial tab styling
    categoryTabs.forEach(tab => {
        if (tab.classList.contains('active')) {
            tab.classList.add('bg-blue-900', 'text-white');
        } else {
            tab.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        }
    });
    
    function filterProducts() {
        let filtered = products;
        
        // Filter by category
        if (currentCategory !== 'all') {
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

// Cart Functions
function initializeCart() {
    const floatingCart = document.getElementById('floatingCart');
    floatingCart.addEventListener('click', () => {
        alert('Keranjang: ' + cart.length + ' item\n\n' + 
              cart.map(item => `${item.title} - Rp ${item.price.toLocaleString('id-ID')}`).join('\n'));
    });
}

function addToCart(productId, customVariables = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: productId,
        title: product.title,
        price: customVariables ? calculateCustomPrice(customVariables) : product.price,
        type: product.type,
        customVariables: customVariables
    };
    
    cart.push(cartItem);
    updateCartUI();
    
    // Show notification
    showNotification(`${product.title} ditambahkan ke keranjang`);
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

function showNotification(message) {
    // Simple notification (you can enhance this)
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i data-lucide="check-circle" class="w-5 h-5"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    lucide.createIcons();
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Variable Selection Modal
let currentProductForModal = null;
let selectedVariables = [];

function initializeModal() {
    const modal = document.getElementById('variableModal');
    const closeBtn = document.getElementById('closeModal');
    const addBtn = document.getElementById('addCustomToCart');
    const variableSearch = document.getElementById('variableSearch');
    
    closeBtn.addEventListener('click', closeVariableModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeVariableModal();
    });
    
    addBtn.addEventListener('click', () => {
        if (selectedVariables.length > 0) {
            addToCart(currentProductForModal, selectedVariables);
            closeVariableModal();
        }
    });
    
    variableSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const checkboxes = document.querySelectorAll('.variable-item');
        checkboxes.forEach(item => {
            const label = item.querySelector('label').textContent.toLowerCase();
            item.style.display = label.includes(searchTerm) ? 'flex' : 'none';
        });
    });
}

function openVariableModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.variables) return;
    
    currentProductForModal = productId;
    selectedVariables = [];
    
    const modal = document.getElementById('variableModal');
    const modalTitle = document.getElementById('modalTitle');
    const variableList = document.getElementById('variableList');
    
    modalTitle.textContent = `Pilih Variabel - ${product.title}`;
    
    variableList.innerHTML = product.variables.map(variable => `
        <div class="variable-item flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <label class="flex items-center gap-3 flex-1 cursor-pointer">
                <input 
                    type="checkbox" 
                    value="${variable.id}"
                    onchange="toggleVariable('${variable.id}', ${variable.price})"
                    class="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                >
                <span class="font-medium text-gray-900">${variable.name}</span>
            </label>
            <span class="text-blue-900 font-semibold">Rp ${variable.price.toLocaleString('id-ID')}</span>
        </div>
    `).join('');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    updateModalPrice();
}

function closeVariableModal() {
    const modal = document.getElementById('variableModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    selectedVariables = [];
    currentProductForModal = null;
}

function toggleVariable(variableId, price) {
    const index = selectedVariables.findIndex(v => v.id === variableId);
    if (index > -1) {
        selectedVariables.splice(index, 1);
    } else {
        selectedVariables.push({ id: variableId, price: price });
    }
    updateModalPrice();
}

function updateModalPrice() {
    const selectedCount = document.getElementById('selectedCount');
    const estimatedPrice = document.getElementById('estimatedPrice');
    
    selectedCount.textContent = selectedVariables.length;
    const total = selectedVariables.reduce((sum, v) => sum + v.price, 0);
    estimatedPrice.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function calculateCustomPrice(variables) {
    return variables.reduce((sum, v) => sum + v.price, 0);
}
