// =========================================================
// MENU DO CELULAR
// =========================================================

const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");
const linksMenu = document.querySelectorAll("#menu a");

function alternarMenu() {
  const menuEstaAberto = menu.classList.toggle("ativo");

  botaoMenu.classList.toggle("ativo");
  document.body.classList.toggle("menu-aberto");
  botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
}

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", alternarMenu);
}

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("ativo")) {
      alternarMenu();
    }
  });
});

// =========================================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================================

const campoAno = document.querySelector("#ano");

if (campoAno) {
  campoAno.textContent = new Date().getFullYear();
}

// =========================================================
// VOLTAR AO TOPO
// =========================================================

const botoesVoltarTopo = document.querySelectorAll(".voltar-topo");

botoesVoltarTopo.forEach(function (botao) {
  botao.addEventListener("click", function (evento) {
    evento.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// =========================================================
// ANIMAÇÃO LEVE AO ROLAR A PÁGINA
// =========================================================

const elementosParaAnimar = document.querySelectorAll(
  ".titulo-linha, .titulo-central, .cabecalho-secao, .modalidade-home, .estrutura-home-texto, .cafu-home-grade, .loja-home-caixa, .equipe-home article, .evento-home, .noticia-home, .grade-categorias article, .card-conteudo, .produto, .galeria-completa img, .contato-lista article, .endereco-card, .grade-equipe article"
);

elementosParaAnimar.forEach(function (elemento) {
  elemento.classList.add("animar");
});

const observador = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

elementosParaAnimar.forEach(function (elemento) {
  observador.observe(elemento);
});

// =========================================================
// CONTADOR DE ANOS DE HISTÓRIA
// =========================================================

const contadores = document.querySelectorAll(".contador");

const observadorContador = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) {
        return;
      }

      const contador = entrada.target;
      const numeroFinal = Number(contador.dataset.numero);
      const duracao = 1500;
      const inicio = performance.now();

      function atualizarContador(tempoAtual) {
        const progresso = Math.min((tempoAtual - inicio) / duracao, 1);
        contador.textContent = Math.floor(progresso * numeroFinal);

        if (progresso < 1) {
          requestAnimationFrame(atualizarContador);
        }
      }

      requestAnimationFrame(atualizarContador);
      observadorContador.unobserve(contador);
    });
  },
  {
    threshold: 0.6
  }
);

contadores.forEach(function (contador) {
  observadorContador.observe(contador);
});

// =========================================================
// MODAL DOS PRODUTOS DA LOJA
// =========================================================

const modalProduto = document.querySelector("#modal-produto");
const modalImagem = document.querySelector("#modal-imagem");
const modalTitulo = document.querySelector("#modal-titulo");
const modalDescricao = document.querySelector("#modal-descricao");
const modalTamanhos = document.querySelector("#modal-tamanhos");
const modalValor = document.querySelector("#modal-valor");
const modalWhatsapp = document.querySelector("#modal-whatsapp");
const botoesProduto = document.querySelectorAll(".produto-botao");

function abrirModalProduto(produto) {
  const caixaProduto = produto.closest(".produto");
  const nomeProduto = caixaProduto.dataset.produto;
  const imagemProduto = caixaProduto.dataset.imagem;
  const descricaoProduto = caixaProduto.dataset.descricao;
  const tamanhosProduto = caixaProduto.dataset.tamanhos;
  const valorProduto = caixaProduto.dataset.valor;
  const textoWhatsapp = encodeURIComponent("Olá! Tenho interesse no produto: " + nomeProduto + ".");

  modalTitulo.textContent = nomeProduto;
  modalDescricao.textContent = descricaoProduto;
  modalTamanhos.textContent = tamanhosProduto;
  modalValor.textContent = valorProduto;
  modalImagem.src = imagemProduto;
  modalImagem.alt = nomeProduto;
  modalWhatsapp.href = "https://api.whatsapp.com/send?phone=5511976509180&text=" + textoWhatsapp;

  modalProduto.classList.add("ativo");
  modalProduto.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

function fecharModalProduto() {
  if (!modalProduto) {
    return;
  }

  modalProduto.classList.remove("ativo");
  modalProduto.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

botoesProduto.forEach(function (botao) {
  botao.addEventListener("click", function () {
    abrirModalProduto(botao);
  });
});

document.querySelectorAll("[data-fechar-modal]").forEach(function (botao) {
  botao.addEventListener("click", fecharModalProduto);
});

// =========================================================
// LIGHTBOX DAS GALERIAS
// =========================================================

const lightbox = document.querySelector("#lightbox");
const lightboxImagem = document.querySelector("#lightbox-imagem");
const fotosGaleria = document.querySelectorAll(".galeria-completa img");

function abrirLightbox(foto) {
  lightboxImagem.src = foto.src;
  lightboxImagem.alt = foto.alt;
  lightbox.classList.add("ativo");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

function fecharLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("ativo");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

fotosGaleria.forEach(function (foto) {
  foto.addEventListener("click", function () {
    abrirLightbox(foto);
  });
});

document.querySelectorAll("[data-fechar-lightbox]").forEach(function (botao) {
  botao.addEventListener("click", fecharLightbox);
});

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    fecharModalProduto();
    fecharLightbox();
  }
});

// Projeto desenvolvido por Manuela Ramos - contato.manuelalramos@gmail.com