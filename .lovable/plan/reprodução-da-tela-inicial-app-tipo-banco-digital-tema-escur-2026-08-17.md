# Reprodução da tela inicial (app tipo banco digital, tema escuro)

Vou reproduzir fielmente, em mobile, a interface dos dois prints como uma única tela rolável na home (`/`).

## Estrutura da tela (de cima para baixo)

1. **Header roxo**: avatar circular com indicador, e à direita os ícones de olho (ocultar saldo), ajuda e escudo/segurança. Abaixo, saudação "Olá, Lucas".
2. **Saldo em conta**: título com chevron, valor `R$ 44,33`.
3. **Ações rápidas**: 4 botões circulares escuros com rótulos em duas linhas — Área Pix e Transferir, Pagar, Pagar com Pix QR code, Recarga de celular.
4. **Meus cartões**: barra escura larga com ícone e texto.
5. **Total em Caixinhas**: título com chevron, `R$ 0,09`; carrossel horizontal com 3 tiles (MOTO `R$ 0,09` com seta verde, Futuro `R$ 0,00`, Acessar todas com mini-grid de imagens).
6. **Compre sem sair do app**: banner roxo com texto "Gift cards para você comprar as marcas que mais curte", botão escuro "Conhecer" e formas gráficas diagonais no canto direito.
7. **Descubra mais**: carrossel de cards (imagem no topo + título + descrição + botão roxo), com o segundo card parcialmente visível na borda, como nos prints.
8. **Rodapé**: "Avalie esta tela" com ícone de coração, em roxo, centralizado.

Divisores finos entre as seções, exatamente como nas imagens.

## Detalhes visuais

- Tema escuro (fundo quase preto), roxo de marca no header, banners e botões.
- Tipografia geométrica arredondada, títulos em peso forte.
- Cantos bem arredondados em tiles, banners e botões (pill).
- Toque de interação: chevrons e botões clicáveis (sem navegação real, é uma reprodução visual).

## Notas técnicas

- Reescrevo `src/routes/index.tsx` com componentes de seção em `src/components/home/`.
- Tokens de cor (roxo, superfícies escuras, texto secundário, verde de alta) adicionados em `src/styles.css` via `@theme inline` — sem cores hardcoded nos componentes.
- Fonte carregada por `<link>` no `__root.tsx`.
- Imagens dos tiles de Caixinhas e dos cards "Descubra mais" serão geradas (não uso os prints como asset).
- `head()` da rota com título/descrição próprios.
