# Redesign — Grêmio Esportivo Campo Grande

Projeto simples feito apenas com HTML, CSS e JavaScript.

Protótipo acadêmico desenvolvido por Manuela.

## Estrutura

```text
gremio/
├── index.html
├── pages/
│   ├── cdc.html
│   ├── futebol.html
│   ├── loja.html
│   ├── galeria.html
│   └── contato.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── home.css
│   │   ├── cdc.css
│   │   ├── futebol.css
│   │   ├── contato.css
│   │   ├── loja.css
│   │   ├── galeria.css
│   │   └── responsive.css
│   ├── js/
│   │   └── script.js
│   └── media/
│       └── imagens do projeto
└── manual/
    └── manual-visual-gecg.png
```

## Como o CSS foi separado

- `main.css`: arquivo único chamado nos HTMLs. Ele faz os imports.
- `base.css`: cores, fontes, configurações gerais e estilos comuns.
- `components.css`: botões, menu, hero, rodapé e componentes reutilizáveis.
- `home.css`: estilos da página inicial.
- `cdc.css`, `futebol.css`, `contato.css`, `loja.css`, `galeria.css`: estilos específicos de cada página.
- `responsive.css`: ajustes para tablet e celular.

## Observações

- As fotos ficam em `assets/media`.
- O Font Awesome é carregado pelo kit no HTML.
- Este projeto é um protótipo acadêmico e não possui vínculo oficial com o clube.
