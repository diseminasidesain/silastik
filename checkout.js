// Checkout Page JavaScript
let currentStep = 1;
let cart = [];
let formData = {
    abstrak: {
        latarBelakang: '',
        tujuan: '',
        metode: '',
        rancanganHasil: ''
    },
    sppd: {
        kepemilikan: 'pribadi',
        tipePribadi: '',
        nama: '',
        telepon: '',
        lokasi: '',
        alamat: '',
        npwp: '',
        persetujuan: false
    },
    pembayaran: {
        metode: 'transfer'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCartData();
    renderOrderItems();
    updateProgressIndicator();
    initializeFormHandlers();
    lucide.createIcons();
});

// Load cart data from localStorage
function loadCartData() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
    
    // If cart is empty, redirect to catalog
    if (cart.length === 0) {
        alert('Keranjang Anda kosong. Silakan pilih produk terlebih dahulu.');
        window.location.href = 'katalog.html';
    }
}

// Render order items in step 1
function renderOrderItems() {
    const container = document.getElementById('orderItems');
    const totalPriceEl = document.getElementById('totalPrice');
    const finalTotalPriceEl = document.getElementById('finalTotalPrice');
    
    if (!container) return;
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    container.innerHTML = cart.map(item => {
        const badgeColors = {
            microdata: { bg: 'bg-blue-50', text: 'text-blue-700', icon: 'text-blue-600' },
            publication: { bg: 'bg-emerald-50', text: 'text-emerald-700', icon: 'text-emerald-600' },
            map: { bg: 'bg-orange-50', text: 'text-orange-700', icon: 'text-orange-600' }
        };
        
        const colors = badgeColors[item.type] || badgeColors.microdata;
        
        const categoryIcons = {
            microdata: 'database',
            publication: 'book-open',
            map: 'map'
        };
        const icon = categoryIcons[item.type] || 'database';
        
        // Badge text
        const badgeText = {
            microdata: 'Data Mikro',
            publication: 'Publikasi Elektronik',
            map: 'Peta Digital'
        };
        
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
        
        return `
            <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0">
                    <i data-lucide="${icon}" class="w-6 h-6 ${colors.icon}"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-gray-900 mb-2">${item.title}</h4>
                    <span class="inline-block text-xs font-semibold px-2.5 py-1 ${colors.bg} ${colors.text} rounded-full mb-2">
                        ${badgeText[item.type]}
                    </span>
                    <div class="mb-2">
                        ${dataTypeInfo}
                    </div>
                    <div class="font-bold text-blue-900">Rp ${item.price.toLocaleString('id-ID')}</div>
                </div>
            </div>
        `;
    }).join('');
    
    totalPriceEl.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    finalTotalPriceEl.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    
    lucide.createIcons();
}

// Update progress indicator
function updateProgressIndicator() {
    for (let i = 1; i <= 4; i++) {
        const circle = document.getElementById(`step${i}-circle`);
        const text = document.getElementById(`step${i}-text`);
        
        if (i < currentStep) {
            // Completed step
            circle.className = 'w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold';
            text.className = 'font-semibold text-gray-900 text-sm';
        } else if (i === currentStep) {
            // Current step
            circle.className = 'w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold';
            text.className = 'font-semibold text-gray-900 text-sm';
        } else {
            // Future step
            circle.className = 'w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold';
            text.className = 'font-semibold text-gray-500 text-sm';
        }
    }
}

// Show specific step
function showStep(step) {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        const stepContent = document.getElementById(`stepContent${i}`);
        if (stepContent) {
            stepContent.classList.add('hidden');
        }
    }
    
    // Show current step
    const currentStepContent = document.getElementById(`stepContent${step}`);
    if (currentStepContent) {
        currentStepContent.classList.remove('hidden');
    }
    
    currentStep = step;
    updateProgressIndicator();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Next step
function nextStep() {
    if (currentStep === 1) {
        // No validation needed for overview
        showStep(2);
    } else if (currentStep === 2) {
        // Validate abstrak
        if (validateAbstrak()) {
            saveAbstrakData();
            showStep(3);
        }
    } else if (currentStep === 3) {
        // Validate SPPD
        if (validateSPPD()) {
            saveSPPDData();
            showStep(4);
        }
    }
}

// Previous step
function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

// Validate Abstrak
function validateAbstrak() {
    const latarBelakang = document.getElementById('latarBelakang').value.trim();
    const tujuan = document.getElementById('tujuan').value.trim();
    const metode = document.getElementById('metode').value.trim();
    const rancanganHasil = document.getElementById('rancanganHasil').value.trim();
    
    if (!latarBelakang) {
        showNotification('Latar belakang harus diisi', 'error');
        document.getElementById('latarBelakang').focus();
        return false;
    }
    
    if (!tujuan) {
        showNotification('Tujuan harus diisi', 'error');
        document.getElementById('tujuan').focus();
        return false;
    }
    
    if (!metode) {
        showNotification('Metode harus diisi', 'error');
        document.getElementById('metode').focus();
        return false;
    }
    
    if (!rancanganHasil) {
        showNotification('Rancangan hasil harus diisi', 'error');
        document.getElementById('rancanganHasil').focus();
        return false;
    }
    
    return true;
}

// Save Abstrak Data
function saveAbstrakData() {
    formData.abstrak = {
        latarBelakang: document.getElementById('latarBelakang').value.trim(),
        tujuan: document.getElementById('tujuan').value.trim(),
        metode: document.getElementById('metode').value.trim(),
        rancanganHasil: document.getElementById('rancanganHasil').value.trim()
    };
}

// Validate SPPD
function validateSPPD() {
    const kepemilikan = document.querySelector('input[name="kepemilikan"]:checked').value;
    const nama = document.getElementById('nama').value.trim();
    const telepon = document.getElementById('telepon').value.trim();
    const lokasi = document.getElementById('lokasi').value;
    const alamat = document.getElementById('alamat').value.trim();
    const npwp = document.getElementById('npwp').value.trim();
    const persetujuan = document.getElementById('persetujuanSPPD').checked;
    
    if (kepemilikan === 'pribadi') {
        const tipePribadi = document.getElementById('tipePribadi').value;
        if (!tipePribadi) {
            showNotification('Tipe pribadi harus dipilih', 'error');
            document.getElementById('tipePribadi').focus();
            return false;
        }
    }
    
    if (!nama) {
        showNotification('Nama lengkap harus diisi', 'error');
        document.getElementById('nama').focus();
        return false;
    }
    
    if (!telepon) {
        showNotification('Telepon harus diisi', 'error');
        document.getElementById('telepon').focus();
        return false;
    }
    
    if (!lokasi) {
        showNotification('Lokasi harus dipilih', 'error');
        document.getElementById('lokasi').focus();
        return false;
    }
    
    if (!alamat) {
        showNotification('Alamat harus diisi', 'error');
        document.getElementById('alamat').focus();
        return false;
    }
    
    if (!npwp) {
        showNotification('NPWP harus diisi', 'error');
        document.getElementById('npwp').focus();
        return false;
    }
    
    if (!persetujuan) {
        showNotification('Anda harus menyetujui pernyataan identitas', 'error');
        return false;
    }
    
    return true;
}

// Save SPPD Data
function saveSPPDData() {
    const kepemilikan = document.querySelector('input[name="kepemilikan"]:checked').value;
    
    formData.sppd = {
        kepemilikan: kepemilikan,
        tipePribadi: kepemilikan === 'pribadi' ? document.getElementById('tipePribadi').value : '',
        nama: document.getElementById('nama').value.trim(),
        telepon: document.getElementById('telepon').value.trim(),
        lokasi: document.getElementById('lokasi').value,
        alamat: document.getElementById('alamat').value.trim(),
        npwp: document.getElementById('npwp').value.trim(),
        persetujuan: document.getElementById('persetujuanSPPD').checked
    };
}

// Complete Order
function completeOrder() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    formData.pembayaran.metode = paymentMethod;
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Save order data
    const orderData = {
        cart: cart,
        formData: formData,
        total: total,
        timestamp: new Date().toISOString()
    };
    
    // In real application, send to server
    console.log('Order Data:', orderData);
    
    // Clear cart
    localStorage.removeItem('cart');
    
    // Show success message
    alert(`Pesanan berhasil dibuat!\n\nTotal: Rp ${total.toLocaleString('id-ID')}\nMetode Pembayaran: ${paymentMethod === 'transfer' ? 'Transfer Bank' : 'Virtual Account'}\n\nSilakan lakukan pembayaran dan kirimkan SPPD fisik ke kantor BPS.`);
    
    // Redirect to catalog
    window.location.href = 'katalog.html';
}

// Initialize form handlers
function initializeFormHandlers() {
    // Toggle tipe pribadi field based on kepemilikan
    const kepemilikanRadios = document.querySelectorAll('input[name="kepemilikan"]');
    const tipePribadiField = document.getElementById('tipePribadiField');
    
    kepemilikanRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'pribadi') {
                tipePribadiField.style.display = 'block';
            } else {
                tipePribadiField.style.display = 'none';
            }
        });
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`;
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

// Make functions globally available
window.nextStep = nextStep;
window.prevStep = prevStep;
window.completeOrder = completeOrder;
