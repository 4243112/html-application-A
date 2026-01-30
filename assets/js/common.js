// ===== グローバル初期化 =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFormsAndButtons();
});

// ===== ナビゲーション初期化 =====
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== フォームとボタン初期化 =====
function initializeFormsAndButtons() {
    // フォーム検証（必要に応じて）
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
}

// ===== スムーズスクロール =====
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== モーダル制御 =====
function openModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

function closeModal(modalId) {
    const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (modal) {
        modal.hide();
    }
}

// ===== ページネーション処理 =====
function goToPage(pageNum) {
    // ページネーション処理（必要に応じてカスタマイズ）
    console.log('ページ ' + pageNum + ' に移動します');
}

// ===== 検索処理 =====
function performSearch(query) {
    // 検索処理（必要に応じてカスタマイズ）
    console.log('検索: ' + query);
}

// ===== フィルター処理 =====
function applyFilter(filterType, filterValue) {
    // フィルター処理（必要に応じてカスタマイズ）
    console.log('フィルター適用: ' + filterType + ' = ' + filterValue);
}

// ===== ユーティリティ関数 =====
// ローカルストレージに保存
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// ローカルストレージから取得
function getFromStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// ローカルストレージから削除
function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// 日付フォーマット
function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

// ===== 通知処理 =====
function showNotification(message, type = 'info') {
    const alertClass = 'alert-' + type;
    const alertHtml = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        const alertElement = document.createElement('div');
        alertElement.innerHTML = alertHtml;
        container.insertBefore(alertElement.firstChild, container.firstChild);
    }
}
