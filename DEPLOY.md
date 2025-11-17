# Guia de Deploy - GitHub Pages

## Status Atual

✅ Website personalizado com o nome **Dr. Lucas Duarte**
✅ Workflow do GitHub Actions configurado e otimizado
✅ Arquivo `.nojekyll` criado para evitar processamento Jekyll
✅ Código commitado e pronto para deploy

## ⚠️ Correções Aplicadas

- Workflow simplificado para melhor compatibilidade
- Adicionado suporte para múltiplas branches
- Arquivo `.nojekyll` para evitar conflitos com Jekyll
- Permissões corrigidas no workflow

## Como Ativar o GitHub Pages

### Opção 1: Via Pull Request (Recomendado)

1. Acesse seu repositório no GitHub:
   ```
   https://github.com/spyDuarte/WebsiteLDClinica
   ```

2. Crie um Pull Request:
   - Clique em "Pull requests"
   - Clique em "New pull request"
   - Base: `main` ← Compare: `claude/doctor-portfolio-website-01DRAi6cQcZDhTfxPL1HhBEz`
   - Clique em "Create pull request"
   - Revise as mudanças e clique em "Merge pull request"

3. Ative o GitHub Pages:
   - Vá em **Settings** (Configurações) do repositório
   - No menu lateral, clique em **Pages**
   - Em **Source**, selecione:
     - Source: `GitHub Actions`
   - Clique em **Save**

4. Aguarde o deploy:
   - Vá em **Actions** no topo do repositório
   - Você verá o workflow "Deploy to GitHub Pages" executando
   - Aguarde finalizar (leva ~2 minutos)

5. Acesse seu site:
   ```
   https://spyduarte.github.io/WebsiteLDClinica/
   ```

### Opção 2: Deploy Direto da Branch Atual

Se preferir não fazer merge com a main:

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione:
   - Branch: `claude/doctor-portfolio-website-01DRAi6cQcZDhTfxPL1HhBEz`
   - Folder: `/ (root)`
3. Clique em **Save**
4. Aguarde alguns minutos e acesse:
   ```
   https://spyduarte.github.io/WebsiteLDClinica/
   ```

## Próximas Personalizações

Agora que o site está no ar, você pode personalizar:

### Informações Obrigatórias:
- [ ] Números de CRM reais (atualmente: CRM-SC 00000 | CRM-RJ 00000)
- [ ] Endereços reais dos consultórios
- [ ] Telefones de contato reais
- [ ] Email de contato real
- [ ] Horários de atendimento

### Informações Opcionais:
- [ ] Foto profissional (substituir o avatar placeholder)
- [ ] Especialidades específicas
- [ ] Links das redes sociais (Instagram, Facebook, LinkedIn)
- [ ] Descrição personalizada na seção "Sobre"

### Como Editar:

1. Edite o arquivo `index.html`
2. Faça commit das mudanças:
   ```bash
   git add index.html
   git commit -m "Atualizar informações de contato"
   git push
   ```
3. O site será atualizado automaticamente em ~2 minutos

## Domínio Personalizado (Opcional)

Se desejar usar um domínio próprio (ex: www.drlucasduarte.com.br):

1. Compre um domínio em um registrador (Registro.br, GoDaddy, etc)
2. Configure os DNS apontando para o GitHub Pages:
   - Tipo A para: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME para: spyduarte.github.io
3. Em **Settings** → **Pages**, adicione seu domínio personalizado
4. Marque a opção "Enforce HTTPS"

## 🔧 Troubleshooting - Resolução de Problemas

### Erro: "GitHub Pages não está ativado"

**Solução:**
1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Salve e aguarde

### Erro: "Deploy failed" ou "Workflow failed"

**Solução:**
1. Vá em **Settings** → **Actions** → **General**
2. Em **Workflow permissions**, selecione:
   - ✅ **Read and write permissions**
3. Em **Actions permissions**, certifique-se de que:
   - ✅ **Allow all actions and reusable workflows** está selecionado
4. Clique em **Save**
5. Vá em **Actions** e clique em **Re-run all jobs**

### Erro: "404 - Page not found"

**Solução:**
1. Aguarde 2-5 minutos após o deploy (pode levar um tempo)
2. Limpe o cache do navegador (Ctrl+Shift+R)
3. Verifique se a URL está correta: `https://spyduarte.github.io/WebsiteLDClinica/`
4. Em **Settings** → **Pages**, verifique se o site está "Active"

### Erro: "Permission denied" ou "403"

**Solução:**
1. Vá em **Settings** → **Actions** → **General**
2. Em **Workflow permissions**:
   - ✅ Marque **Read and write permissions**
   - ✅ Marque **Allow GitHub Actions to create and approve pull requests**
3. Salve e tente novamente

### CSS/JS não está carregando

**Solução:**
- Os arquivos `styles.css` e `script.js` devem estar na raiz do repositório
- Verifique se o arquivo `.nojekyll` existe na raiz
- Force refresh com Ctrl+Shift+R

### Como verificar se o deploy funcionou

1. Vá em **Actions** no GitHub
2. Clique no workflow mais recente
3. Verifique se todas as etapas têm ✅ verde
4. Na etapa "Deploy to GitHub Pages", copie a URL do site

## 🆘 Suporte

Para problemas ou dúvidas:
- Verifique a aba **Actions** no GitHub para logs detalhados
- Consulte a documentação do GitHub Pages: https://docs.github.com/pages
- Verifique se as permissões estão corretas em Settings → Actions

## Checklist Final

- [ ] Pull request criado e aprovado (ou branch configurada diretamente)
- [ ] GitHub Pages ativado nas configurações
- [ ] Site acessível via URL do GitHub Pages
- [ ] Informações pessoais atualizadas
- [ ] Links de redes sociais configurados
- [ ] Testado em dispositivos móveis
