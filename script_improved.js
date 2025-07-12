// Smooth scrolling para links de navegação
document.querySelectorAll(\'a[href^="#"]\').forEach(âncora => {
    anchor.addEventListener(\'clique\', função (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute(\'href\'));
        se (alvo) {
            alvo.scrollIntoView({
                comportamento: \'suave\',
                bloco: \'iniciar\'
            });
        }
    });
});

// Contador regressivo
função startCountdown() {
    const contagemregressivaElementos = {
        horas: document.getElementById(\'horas\'),
        minutos: document.getElementById(\'minutos\'),
        segundos: document.getElementById(\'segundos\'),
        pequeno: document.getElementById(\'contagem regressiva-pequeno\')
    };
    
    // Definir tempo inicial (23:47:32)
    deixe totalSeconds = 23 * 3600 + 47 * 60 + 32;
    
    função updateCountdown() {
        const horas = Math.floor(totalSeconds / 3600);
        const minutos = Math.floor((totalSeconds % 3600) / 60);
        const segundos = totalSeconds % 60;
        
        se (countdownElements.horas) {
            countdownElements.hours.textContent = horas.toString().padStart(2, \'0\');
        }
        se (countdownElements.minutos) {
            countdownElements.minutes.textContent = minutos.toString().padStart(2, \'0\');
        }
        se (countdownElements.seconds) {
            countdownElements.seconds.textContent = segundos.toString().padStart(2, \'0\');
        }
        se (countdownElements.small) {
            countdownElements.small.textContent = `${horas.toString().padStart(2, \'0\')}:${minutos.toString().padStart(2, \'0\')}:${segundos.toString().padStart(2, \'0\')}`;
        }
        
        totalSegundos--;
        
        se (totalSegundos < 0) {
            totalSegundos = 23 * 3600 + 47 * 60 + 32; //Reiniciar contador
        }
    }
    
    atualizarContagemRegressiva();
    setInterval(atualizaçãoContagemRegressiva, 1000);
}

// Contador de vagas restantes
função updateSpotsLeft() {
    const spotsElements = document.querySelectorAll(\'#spots, .spots-remaining .highlight\');
    deixe pontos = 47;
    
    função decreaseSpots() {
        se (pontos > 10) {
            manchas--;
            spotsElements.forEach(elemento => {
                se (elemento.id === \'pontos\') {
                    element.textContent = pontos;
                } outro {
                    element.textContent = pontos;
                }
            });
        }
    }
    
    // Diminuir vagas a cada 30-60 segundos aleatoriamente
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% de chance a cada intervalo
            diminuiPontos();
        }
    }, Math.random() * 30.000 + 30.000); // Entre 30-60 segundos
}

// Animação de entrada para elementos quando entram na viewport
const observerOptions = {
    limite: 0,1,
    rootMargin: \'0px 0px -50px 0px\'
};

const observer = new IntersectionObserver((entradas) => {
    entradas.paraCada(entrada => {
        se (entrada.isIntersecting) {
            entrada.estilo.alvo.opacidade = \'1\';
            entrada.estilo.destino.transformação = \'translateY(0)\';
            entrada.target.classList.add(\'animado\');
        }
    });
}, observerOptions);

//Aplica animação aos elementos
documento.addEventListener(\'DOMContentLoaded\', () => {
    const animatedElements = document.querySelectorAll(
        \'.cartão-de-benefícios, .cartão-de-produto, .cartão-de-testemunho, .item-de-perguntas-frequentes\'
    );
    
    Elementosanimados.paraCada(el => {
        el.style.opacity = \'0\';
        el.style.transform = \'translateY(30px)\';
        el.style.transition = \'opacidade 0,6s de facilidade, transformação 0,6s de facilidade\';
        observador.observar(el);
    });
    
    // Iniciar contadores
    iniciarContagemRegressiva();
    atualizarPontosEsquerdos();

    // Chamar uma função de atualização do link do WhatsApp aqui
    updateWhatsAppLink("https://whatsapp.com/channel/0029VbAgG7U96H4T1sJ4eY3A");
});

// Função para atualizar o link do WhatsApp
função updateWhatsAppLink(channelLink) {
    const whatsappLinks = document.querySelectorAll(\'#whatsapp-link, .whatsapp-button\');
    
    whatsappLinks.forEach(link => {
        link.href = canalLink;
    });
}

// Efeito de paralaxe suave no hero
janela.addEventListener(\'scroll\', () => {
    const scrolled = janela.pageYOffset;
    const heroElements = document.querySelectorAll(\\'elementos-flutuantes > div\\');
    
    heroElements.forEach((elemento, índice) => {
        velocidade constante = 0,1 + (índice * 0,05);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Efeito de pairar nos cartões de produto
documento.addEventListener(\'DOMContentLoaded\', () => {
    const productCards = document.querySelectorAll(\'.product-card\');
    
    productCards.forEach(cartão => {
        cartão.addEventListener(\'mouseenter\', () => {
            card.style.transform = \'translateY(-10px) escala(1,02)\';
        });
        
        card.addEventListener(\'mouseleave\', () => {
            card.style.transform = \'translateY(0) escala(1)\';
        });
    });
});

// Adicionar efeito ripple aos botões
função createRipple(evento) {
    botão const = evento.currentTarget;
    const ondulação = document.createElement(\'span\');
    const rect = botão.getBoundingClientRect();
    const tamanho = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - tamanho / 2;
    const y = event.clientY - rect.top - tamanho / 2;
    
    ripple.style.width = ripple.style.height = tamanho + \'px\';
    ondulação.estilo.esquerda = x + \'px\';
    ondulação.style.top = y + \'px\';
    ondulação.classList.add(\'ondulação\');
    
    botão.appendChild(ondulação);
    
    definirTempoLimite(() => {
        ondulação.remover();
    }, 600);
}

//Aplica efeito ripple aos botões
documento.addEventListener(\'DOMContentLoaded\', () => {
    botões const = document.querySelectorAll(\'.product-btn, .cta-button, .whatsapp-button\');
    
    botões.paraCada(botão => {
        botão.addEventListener(\'clique\', createRipple);
        button.style.position = \'relativo\';
        button.style.overflow = \'oculto\';
    });
});

// Animação de contagem para números
função animateCounter(elemento, alvo, duração = 2000) {
    deixe start = 0;
    const incremento = alvo / (duração / 16);
    
    const timer = setInterval(() => {
        início += incremento;
        element.textContent = Math.floor(start).toLocaleString(\'pt-BR\');
        
        se (início >= alvo) {
            element.textContent = target.toLocaleString(\'pt-BR\');
            clearInterval(temporizador);
        }
    }, 16);
}

// Anima números quando entram na viewport
const numberObserver = new IntersectionObserver((entradas) => {
    entradas.paraCada(entrada => {
        se (entrada.isIntersecting && !entrada.target.classList.contains(\'animado\')) {
            const target = parseInt(entrada.alvo.conjunto de dados.alvo);
            animateCounter(entrada.alvo, alvo);
            entrada.target.classList.add(\'animado\');
        }
    });
});

documento.addEventListener(\'DOMContentLoaded\', () => {
    const statNumbers = document.querySelectorAll(\'.stat-number\');
    statNumbers.forEach(stat => {
        const texto = stat.textContent;
        const número = texto.match(/\\d+/);
        se (número) {
            stat.dataset.target = número[0];
            numberObserver.observe(stat);
        }
    });
});

// Acompanhamento de eventos (para análises futuras)
função trackEvent(eventName, propriedades = {}) {
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    console.log(\'Evento rastreado:\', eventName, propriedades);
    
    // Exemplo para Google Analytics (descomente se usar)
    // se (tipo de gtag !== \'indefinido\') {
    // gtag(\'evento\', nomeDoEvento, propriedades);
    // }
}

// Rastrear cliques nos CTAs
documento.addEventListener(\'DOMContentLoaded\', () => {
    const ctaButtons = document.querySelectorAll(\'.cta-button, .whatsapp-button\');
    
    ctaButtons.forEach(botão => {
        botão.addEventListener(\'clique\', () => {
            trackEvent(\'cta_click\', {
                texto do botão: button.textContent.trim(),
                button_location: button.closest(\'seção\')?.id || \'desconhecido\'
            });
        });
    });
    
    // Rastrear cliques nos produtos
    const productButtons = document.querySelectorAll(\'.product-btn\');
    productButtons.forEach(botão => {
        botão.addEventListener(\'clique\', () => {
            const productName = botão.closest(\'.product-card\').querySelector(\'h3\').textContent;
            trackEvent(\'clique_no_produto\', {
                nome_do_produto: nome_do_produto
            });
        });
    });
});

// CSS para o efeito ripple
const estilo = document.createElement(\'estilo\');
estilo.textContent = `
    .ondulação {
        posição: absoluta;
        raio da borda: 50%;
        fundo: rgba(255, 255, 255, 0.6);
        transformar: escala(0);
        animação: animação ripple 0,6s linear;
        eventos de ponteiro: nenhum;
    }
    
    @keyframes animação ondulada {
        para {
            transformar: escala(4);
            opacidade: 0;
        }
    }
    
    .animado {
        opacidade: 1 !importante;
        transformar: translateY(0) !importante;
    }
`;
document.head.appendChild(estilo);

// Função para mostrar notificações de vendas (prova social dinâmica)
função showSaleNotification() {
    const nomes = [\'Maria S.\', \'João P.\', \'Ana C.\', \'Carlos M.\', \'Lucia R.\', \'Pedro F.\'];
    const cidades = [\'São Paulo\', \'Rio de Janeiro\', \'Belo Horizonte\', \'Salvador\', \'Brasília\', \'Curitiba\'];
    const produtos = [\'Kit Eletrônicos\', \'Conjunto Casa & Decoração\', \'Pacote Moda & Estilo\', \'Kit Saúde & Fitness\'];
    
    notificação constante = document.createElement(\'div\');
    notificação.estilo.cssTexto = `
        posição: fixa;
        inferior: 20px;
        esquerda: 20px;
        fundo: #28a745;
        cor: branco;
        preenchimento: 15px 20px;
        raio da borda: 10px;
        caixa-sombra: 0 4px 15px rgba(0,0,0,0.2);
        índice z: 1000;
        tamanho da fonte: 0,9rem;
        largura máxima: 300px;
        transformar: traduzirX(-100%);
        transição: transformação 0,3s facilidade;
    `;
    
    const randomName = nomes[Math.floor(Math.random() * nomes.length)];
    const randomCity = cidades[Math.floor(Math.random() * cidades.length)];
    const randomProduct = produtos[Math.floor(Math.random() * produtos.length)];
    
    notificação.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div style="largura: 8px; altura: 8px; plano de fundo: #ffd700; raio da borda: 50%; animação: pulso 1s infinito;"></div>
            <div>
                <strong>${randomName}</strong> de ${randomCity}<br>
                acabou de adquirir: <strong>${randomProduct}</strong>
            </div>
        </div>
    `;
    
    document.body.appendChild(notificação);
    
    definirTempoLimite(() => {
        notificação.estilo.transform = \'translateX(0)\';
    }, 100);
    
    definirTempoLimite(() => {
        notification.style.transform = \'translateX(-100%)\';
        definirTempoLimite(() => {
            notificação.remove();
        }, 300);
    }, 4000);
}

// Mostrar notificações de venda periodicamente
documento.addEventListener(\'DOMContentLoaded\', () => {
    // Primeira notificação após 10 segundos
    setTimeout(showSaleNotification, 10000);
    
    // Depois de cada 30-60 segundos
    setInterval(() => {
        se (Math.random() > 0,5) {
            showSaleNotification();
        }
    }, Math.random() * 30000 + 30000);
});


