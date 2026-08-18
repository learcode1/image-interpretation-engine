# Deploy no Netlify

## Pré-requisitos
- Node.js 18+ instalado
- Conta no [Netlify](https://netlify.com)
- Repositório GitHub conectado

## Como fazer o deploy

### Opção 1: Netlify UI (Recomendado)

1. Acesse [https://app.netlify.com](https://app.netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Selecione seu repositório GitHub (learcode1/tela)
4. Configure as variáveis de ambiente (se necessário)
5. Clique em "Deploy site"

### Opção 2: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

## Configurações

O arquivo `netlify.toml` já está configurado com:
- **Build command**: `npm run build`
- **Publish directory**: `.output/public`
- **Functions directory**: `.output/server`
- **Redirects**: SPA fallback para index.html

## Variáveis de Ambiente (se necessário)

Se você precisar de variáveis de ambiente, adicione-as no painel do Netlify:
1. Vá para "Site settings" → "Build & deploy" → "Environment"
2. Clique "Edit variables"
3. Adicione suas variáveis

## Build Local

Para testar o build localmente antes de fazer deploy:

```bash
npm run build
npm run preview
```

## Funcionalidades

✅ **Total em Caixinhas**: O valor total é calculado automaticamente somando todos os valores das caixinhas

- Adicione novas caixinhas
- Edite nomes e valores
- O total é atualizado em tempo real

## Troubleshooting

### Build fails
- Verifique se `npm run build` funciona localmente
- Confirme que Node.js 18+ está instalado
- Limpe o cache do Netlify: "Site settings" → "Build & deploy" → "Clear cache"

### Deploy bem-sucedido mas site mostra erro
- Verifique os logs de build no Netlify
- Confirme que `.output/public` existe após build local

## URLs

- **Production**: Será fornecida após o primeiro deploy
- **Pull requests**: Deployments automáticos em PRs
- **Branch deploys**: Ativado por padrão

---

Para mais informações, veja: [Netlify Docs](https://docs.netlify.com)
