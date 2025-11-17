# Website para Médico - Portfolio Profissional

Website profissional desenvolvido para **Dr. Lucas Duarte**, médico recém-formado com atuação em Santa Catarina e Rio de Janeiro.

## 🚀 STATUS DO PROJETO

✅ Website completo e funcional
✅ Design moderno e responsivo implementado
✅ Workflow do GitHub Actions configurado
⚠️ **GitHub Pages precisa ser ativado** - [Ver instruções](ATIVACAO-PAGES.md)

## 📋 Características

- Design moderno com gradientes e glassmorphism
- Navegação intuitiva e fluida
- Seções completas:
  - Apresentação profissional
  - Especialidades e serviços
  - Localizações (SC e RJ)
  - Formulário de contato funcional
- Totalmente responsivo (mobile, tablet, desktop)
- Animações suaves e micro-interações
- Efeitos visuais modernos (hover, focus, scroll)

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 moderno (variáveis CSS, Grid, Flexbox, backdrop-filter)
- JavaScript ES6+ (validação, animações, interatividade)
- Google Fonts (Poppins)
- GitHub Actions (deploy automático)

## 🎨 Design Highlights

- **Paleta de cores**: Azul moderno (#0ea5e9, #06b6d4)
- **Tipografia**: Poppins (Google Fonts)
- **Efeitos**: Glassmorphism, gradientes, sombras em camadas
- **Animações**: Cubic-bezier para transições suaves
- **Responsivo**: 4 breakpoints (1024px, 968px, 640px, 480px)

## 📦 Como Ativar o Site

**IMPORTANTE**: O site está pronto mas precisa ser ativado no GitHub Pages.

👉 **[SIGA ESTE GUIA PASSO A PASSO](ATIVACAO-PAGES.md)** 👈

Resumo rápido:
1. Criar Pull Request e fazer merge para `main`
2. Ativar GitHub Pages em Settings
3. Configurar permissões do GitHub Actions
4. Aguardar deploy (~2 minutos)
5. Acessar: https://spyduarte.github.io/WebsiteLDClinica/

## ✏️ Personalização

### Informações que precisam ser atualizadas

Edite o arquivo `index.html` e substitua:

- [ ] **CRM-SC 00000** → Número real do CRM de Santa Catarina
- [ ] **CRM-RJ 00000** → Número real do CRM do Rio de Janeiro
- [ ] **Endereços** → Endereços reais dos consultórios
- [ ] **(48) 0000-0000** → Telefone real de SC
- [ ] **(21) 0000-0000** → Telefone real do RJ
- [ ] **contato@exemplo.com.br** → Email real
- [ ] **Links das redes sociais** → Instagram, Facebook, LinkedIn
- [ ] **Horários de atendimento** → Horários reais
- [ ] **Foto profissional** → Substituir placeholder de imagem

### Alterar cores (opcional)

Edite o arquivo `styles.css` na seção `:root`:
```css
:root {
    --primary-color: #0ea5e9;      /* Azul principal */
    --secondary-color: #0284c7;    /* Azul escuro */
    --accent-color: #06b6d4;       /* Azul claro */
    /* ... */
}
```

## 📁 Estrutura de Arquivos

```
WebsiteLDClinica/
├── .github/
│   └── workflows/
│       └── static.yml          # Workflow do GitHub Actions
├── .nojekyll                   # Previne processamento Jekyll
├── index.html                  # Página principal
├── styles.css                  # Estilos (20KB)
├── script.js                   # JavaScript (8.3KB)
├── ATIVACAO-PAGES.md          # Guia de ativação do GitHub Pages
├── DEPLOY.md                   # Documentação completa de deploy
├── QUICKSTART.md              # Guia rápido
└── README.md                   # Este arquivo
```

## 🎯 Funcionalidades

### Navegação
- Menu fixo com efeito glassmorphism
- Scroll suave entre seções
- Menu mobile responsivo (hamburger)
- Links ativos baseados na seção atual

### Formulário de Contato
- Validação de campos em tempo real
- Formatação automática de telefone (padrão brasileiro)
- Notificações visuais de sucesso/erro
- Design moderno com elevação ao focar

### Interatividade
- Efeitos hover em todos os elementos clicáveis
- Animações de entrada ao scroll
- Ripple effect nos botões
- Cards com elevação 3D

### Performance
- Transições otimizadas com GPU
- Lazy loading de animações
- CSS otimizado (sem frameworks pesados)
- JavaScript minimalista

## 🚀 Deploy Automático

Após ativar o GitHub Pages, qualquer push para a branch `main` vai:
1. Acionar o GitHub Actions automaticamente
2. Fazer build e deploy
3. Atualizar o site em ~2 minutos

## 📱 Suporte a Dispositivos

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 640px)

## 🔗 Links Úteis

- **Guia de Ativação**: [ATIVACAO-PAGES.md](ATIVACAO-PAGES.md)
- **Documentação Completa**: [DEPLOY.md](DEPLOY.md)
- **Quick Start**: [QUICKSTART.md](QUICKSTART.md)
- **GitHub Pages**: https://pages.github.com/

## 📄 Licença

Este projeto foi desenvolvido para uso pessoal do Dr. Lucas Duarte.

## 🆘 Suporte

Problemas com o deploy? Consulte:
1. [ATIVACAO-PAGES.md](ATIVACAO-PAGES.md) - Guia passo a passo
2. [DEPLOY.md](DEPLOY.md) - Troubleshooting detalhado
3. Logs em: https://github.com/spyDuarte/WebsiteLDClinica/actions

---

**Desenvolvido com ❤️ para o Dr. Lucas Duarte**
