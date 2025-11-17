# 🚀 Quick Start - Deploy em 3 Passos

## Passo 1: Ativar GitHub Pages

1. Acesse: https://github.com/spyDuarte/WebsiteLDClinica/settings/pages

2. Em **"Source"**, selecione:
   ```
   Source: GitHub Actions
   ```

3. Clique em **Save**

## Passo 2: Configurar Permissões

1. Acesse: https://github.com/spyDuarte/WebsiteLDClinica/settings/actions

2. Em **"Workflow permissions"**, selecione:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

3. Clique em **Save**

## Passo 3: Aguardar Deploy

1. Vá em: https://github.com/spyDuarte/WebsiteLDClinica/actions

2. Aguarde o workflow "Deploy to GitHub Pages" finalizar (⏱️ ~2 minutos)

3. Acesse seu site:
   ```
   https://spyduarte.github.io/WebsiteLDClinica/
   ```

---

## ✅ Pronto!

Seu site estará no ar! 🎉

## 🔧 Se algo der errado

Consulte o arquivo `DEPLOY.md` para troubleshooting detalhado.

### Problemas mais comuns:

**Site mostra 404:**
- Aguarde 5 minutos
- Limpe o cache (Ctrl+Shift+R)

**Workflow falhou:**
- Verifique permissões no Passo 2
- Clique em "Re-run all jobs" na aba Actions

**CSS/JS não carregam:**
- Force refresh: Ctrl+Shift+R
- Aguarde alguns minutos

---

## 📱 Próximos Passos

Após o site estar no ar, personalize as informações no arquivo `index.html`:

- [ ] Números de CRM (SC e RJ)
- [ ] Endereços reais dos consultórios
- [ ] Telefones de contato
- [ ] Email
- [ ] Links das redes sociais
- [ ] Horários de atendimento

Cada mudança que você fizer e der push será automaticamente implantada!
