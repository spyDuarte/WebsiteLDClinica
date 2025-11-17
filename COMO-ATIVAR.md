# 🚀 COMO ATIVAR O GITHUB PAGES - GUIA DEFINITIVO

## ⚠️ LEIA ISTO PRIMEIRO

O website está **100% pronto e funcionando**. Você só precisa ativá-lo no GitHub.

**Tempo necessário:** 3 minutos
**Dificuldade:** Muito fácil

---

## 📋 PASSO 1: IR PARA O GITHUB

Abra este link no navegador:
```
https://github.com/spyDuarte/WebsiteLDClinica/settings/pages
```

Você deve ver uma página com o título **"GitHub Pages"**.

---

## 📋 PASSO 2: ATIVAR GITHUB PAGES

Na página que abriu, você vai ver uma seção chamada **"Build and deployment"**.

### Faça isto:

1. Em **"Source"** (Origem), clique no menu dropdown
2. Selecione: **GitHub Actions**
3. Pronto! A página salva automaticamente

**IMPORTANTE:** NÃO selecione "Deploy from a branch". Deve ser **"GitHub Actions"**.

---

## 📋 PASSO 3: CONFIGURAR PERMISSÕES

Agora abra este link:
```
https://github.com/spyDuarte/WebsiteLDClinica/settings/actions
```

### Faça isto:

1. Role a página até encontrar **"Workflow permissions"**
2. Selecione a opção: **"Read and write permissions"**
3. Marque a caixa: **"Allow GitHub Actions to create and approve pull requests"**
4. Clique no botão **"Save"** no final da seção

---

## 📋 PASSO 4: FAZER O DEPLOY

Agora abra este link:
```
https://github.com/spyDuarte/WebsiteLDClinica/actions
```

### Opção A: Se aparecer um workflow rodando
- Aguarde ele terminar (ícone amarelo girando → ícone verde ✓)
- Leva ~2 minutos

### Opção B: Se não aparecer nenhum workflow
1. Clique em **"Deploy to GitHub Pages"** na lista da esquerda
2. Clique no botão **"Run workflow"** (à direita)
3. Deixe "Branch: main" selecionado
4. Clique em **"Run workflow"** (botão verde)
5. Aguarde terminar (~2 minutos)

---

## 📋 PASSO 5: ACESSAR O SITE

Quando o workflow terminar (ícone verde ✓), seu site estará em:

```
https://spyduarte.github.io/WebsiteLDClinica/
```

**Dica:** Se não carregar imediatamente:
- Aguarde 1-2 minutos
- Pressione Ctrl + Shift + R (Windows) ou Cmd + Shift + R (Mac)
- Tente em aba anônima

---

## ❌ SE DER ERRO

### Erro: Workflow falha com erro vermelho (❌)

**Solução:**
1. Verifique se completou o PASSO 3 (permissões)
2. Vá em Actions → clique no workflow que falhou → clique "Re-run all jobs"

### Erro: "404 Page not found"

**Solução:**
1. Aguarde 5 minutos (cache do GitHub)
2. Verifique se o workflow terminou com sucesso (✓)
3. Force refresh: Ctrl + Shift + R

### Erro: CSS/JS não carregam (página sem estilo)

**Solução:**
1. Force refresh: Ctrl + Shift + R
2. Aguarde alguns minutos
3. Abra em aba anônima

---

## ✅ VERIFICAÇÃO FINAL

Após ativar, verifique:

- [ ] GitHub Pages ativado (Settings → Pages → Source = GitHub Actions)
- [ ] Permissões configuradas (Settings → Actions → Read and write)
- [ ] Workflow executado com sucesso (Actions → ícone verde ✓)
- [ ] Site acessível em: https://spyduarte.github.io/WebsiteLDClinica/
- [ ] CSS e imagens carregando corretamente

---

## 🎯 PRÓXIMOS PASSOS

Depois que o site estiver no ar, você pode personalizar:

1. Edite `index.html` e mude:
   - Números de CRM
   - Telefones
   - Emails
   - Endereços

2. Faça commit:
   ```bash
   git add index.html
   git commit -m "Atualizar informações de contato"
   git push
   ```

3. Aguarde 2 minutos → site atualiza automaticamente!

---

## 📞 AINDA COM DÚVIDA?

1. Volte ao PASSO 1 e siga exatamente como está escrito
2. Cada passo é simples - não pule nenhum
3. Os links já estão prontos - só clicar

**O site está pronto. São só 5 passos simples!** 🎉
