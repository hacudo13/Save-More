// Smooth scrolling para links de navegação
document.querySelectorAll(\'a[href^="#"]\').forEach(anchor => {
    anchor.addEventListener(\'click\', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute(\'href\'));
        if (target) {
            target.scrollIntoView({
                behavior: \'smooth\',
                block: \'start\'
            });
        }
    });
});

// Contador regressivo
function startCountdown() {
    const countdownElements = {
        hours: document.getElementById(\'hours\'),
        minutes: document.getElementById(\'minutes\'),
        seconds: document.getElementById(\'seconds\'),
        small: document.getElementById(\'countdown-small\')
    };
    
    // Definir tempo inicial (23:47:32)
    let totalSeconds = 23 * 3600 + 47 * 60 + 32;
    
    function updateCountdown() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        if (countdownElements.hours) {
            countdownElements.hours.textContent = hours.toString().padStart(2, \'0\');
        }
        if (countdownElements.minutes) {
            countdownElements.minutes.textContent = minutes.toString().padStart(2, \'0\');
        }
        if (countdownElements.seconds) {
            countdownElements.seconds.textContent = seconds.toString().padStart(2, \'0\');
        }
        if (countdownElements.small) {
            countdownElements.small.textContent = `${hours.toString().padStart(2, \'0\')}:${minutes.toString().padStart(2, \'0\')}:${seconds.toString().padStart(2, \'0\')}`;
        }
        
        totalSeconds--;
        
        if (totalSeconds < 0) {
            totalSeconds = 23 * 3600 + 47 * 60 + 32; // Reiniciar contador
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Contador de vagas restantes
function updateSpotsLeft() {
    const spotsElements = document.querySelectorAll(\'#spots, .spots-remaining .highlight\');
    let spots = 47;
    
    function decreaseSpots() {
        if (spots > 10) {
            spots--;
            spotsElements.forEach(element => {
                if (element.id === \'spots\') {
                    element.textContent = spots;
                } else {
                    element.textContent = spots;
                }
            });
        }
    }
    
    // Diminuir vagas a cada 30-60 segundos aleatoriamente
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% de chance a cada intervalo
            decreaseSpots();
        }
    }, Math.random() * 30000 + 30000); // Entre 30-60 segundos
}

// Animação de entrada para elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: \'0px 0px -50px 0px\'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = \'1\';
            entry.target.style.transform = \'translateY(0)\';
            entry.target.classList.add(\'animated\');
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener(\'DOMContentLoaded\', () => {
    const animatedElements = document.querySelectorAll(
        \'.benefit-card, .product-card, .testimonial-card, .faq-item\'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = \'0\';
        el.style.transform = \'translateY(30px)\';
        el.style.transition = \'opacity 0.6s ease, transform 0.6s ease\';
        observer.observe(el);
    });
    
    // Iniciar contadores
    startCountdown();
    updateSpotsLeft();

    // Chamar a função de atualização do link do WhatsApp aqui
    updateWhatsAppLink("https://whatsapp.com/channel/0029VbAgG7U96H4T1sJ4eY3A");
});

// Função para atualizar o link do WhatsApp
function updateWhatsAppLink(channelLink) {
    const whatsappLinks = document.querySelectorAll(\'#whatsapp-link, .whatsapp-button\');
    
    whatsappLinks.forEach(link => {
        link.href = channelLink;
    });
}

// Efeito de parallax suave no hero
window.addEventListener(\'scroll\', () => {
    const scrolled = window.pageYOffset;
    const heroElements = document.querySelectorAll(\\'floating-elements > div\\');
    
    heroElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Efeito de hover nos cards de produto
document.addEventListener(\'DOMContentLoaded\', () => {
    const productCards = document.querySelectorAll(\'.product-card\');
    
    productCards.forEach(card => {
        card.addEventListener(\'mouseenter\', () => {
            card.style.transform = \'translateY(-10px) scale(1.02)\';
        });
        
        card.addEventListener(\'mouseleave\', () => {
            card.style.transform = \'translateY(0) scale(1)\';
        });
    });
});

// Adicionar efeito ripple aos botões
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement(\'span\');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + \'px\';
    ripple.style.left = x + \'px\';
    ripple.style.top = y + \'px\';
    ripple.classList.add(\'ripple\');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Aplicar efeito ripple aos botões
document.addEventListener(\'DOMContentLoaded\', () => {
    const buttons = document.querySelectorAll(\'.product-btn, .cta-button, .whatsapp-button\');
    
    buttons.forEach(button => {
        button.addEventListener(\'click\', createRipple);
        button.style.position = \'relative\';
        button.style.overflow = \'hidden\';
    });
});

// Animação de contagem para números
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start).toLocaleString(\'pt-BR\');
        
        if (start >= target) {
            element.textContent = target.toLocaleString(\'pt-BR\');
            clearInterval(timer);
        }
    }, 16);
}

// Animar números quando entram na viewport
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains(\'animated\')) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            entry.target.classList.add(\'animated\');
        }
    });
});

document.addEventListener(\'DOMContentLoaded\', () => {
    const statNumbers = document.querySelectorAll(\'.stat-number\');
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = text.match(/\\d+/);
        if (number) {
            stat.dataset.target = number[0];
            numberObserver.observe(stat);
        }
    });
});

// Tracking de eventos (para analytics futuras)
function trackEvent(eventName, properties = {}) {
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    console.log(\'Event tracked:\', eventName, properties);
    
    // Exemplo para Google Analytics (descomente se usar)
    // if (typeof gtag !== \'undefined\') {
    //     gtag(\'event\', eventName, properties);
    // }
}

// Rastrear cliques nos CTAs
document.addEventListener(\'DOMContentLoaded\', () => {
    const ctaButtons = document.querySelectorAll(\'.cta-button, .whatsapp-button\');
    
    ctaButtons.forEach(button => {
        button.addEventListener(\'click\', () => {
            trackEvent(\'cta_click\', {
                button_text: button.textContent.trim(),
                button_location: button.closest(\'section\')?.id || \'unknown\'
            });
        });
    });
    
    // Rastrear cliques nos produtos
    const productButtons = document.querySelectorAll(\'.product-btn\');
    productButtons.forEach(button => {
        button.addEventListener(\'click\', () => {
            const productName = button.closest(\'.product-card\').querySelector(\'h3\').textContent;
            trackEvent(\'product_click\', {
                product_name: productName
            });
        });
    });
});

// CSS para o efeito ripple
const style = document.createElement(\'style\');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animated {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Função para mostrar notificações de vendas (social proof dinâmico)
function showSaleNotification() {
    const names = [\'Maria S.\', \'João P.\', \'Ana C.\', \'Carlos M.\', \'Lucia R.\', \'Pedro F.\'];
    const cities = [\'São Paulo\', \'Rio de Janeiro\', \'Belo Horizonte\', \'Salvador\', \'Brasília\', \'Curitiba\'];
    const products = [\'Kit Eletrônicos\', \'Conjunto Casa & Decoração\', \'Pacote Moda & Estilo\', \'Kit Saúde & Fitness\'];
    
    const notification = document.createElement(\'div\');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-size: 0.9rem;
        max-width: 300px;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    `;
    
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 8px; height: 8px; background: #ffd700; border-radius: 50%; animation: pulse 1s infinite;"></div>
            <div>
                <strong>${randomName}</strong> de ${randomCity}<br>
                acabou de adquirir: <strong>${randomProduct}</strong>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = \'translateX(0)\';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = \'translateX(-100%)\';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Mostrar notificações de venda periodicamente
document.addEventListener(\'DOMContentLoaded\', () => {
    // Primeira notificação após 10 segundos
    setTimeout(showSaleNotification, 10000);
    
    // Depois a cada 30-60 segundos
    setInterval(() => {
        if (Math.random() > 0.5) {
            showSaleNotification();
        }
    }, Math.random() * 30000 + 30000);
});



