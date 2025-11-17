# Guia de Deploy - GitHub Pages

## Status Atual

✅ Website personalizado com o nome **Dr. Lucas Duarte**
✅ Workflow do GitHub Actions configurado
✅ Código commitado na branch `claude/doctor-portfolio-website-01DRAi6cQcZDhTfxPL1HhBEz`

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

## Suporte

Para problemas ou dúvidas:
- Verifique a aba **Actions** no GitHub para logs de deploy
- Consulte a documentação do GitHub Pages: https://docs.github.com/pages

## Checklist Final

- [ ] Pull request criado e aprovado (ou branch configurada diretamente)
- [ ] GitHub Pages ativado nas configurações
- [ ] Site acessível via URL do GitHub Pages
- [ ] Informações pessoais atualizadas
- [ ] Links de redes sociais configurados
- [ ] Testado em dispositivos móveis
