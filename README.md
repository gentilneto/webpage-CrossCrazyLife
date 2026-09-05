<div align="center">
  <img src="https://lh3.googleusercontent.com/aida/AEtjO1UuezUkKQnJl9ROxS-KRmGDYXSY3-Ukcadywya9YIatOipXfSDqzmlhNKngY26kHQE89rVjdsPYnes5-jEBcx0BomI0zbHsn0dJvATMZUrfTU71vRSNuq2bkBT_ERiBYqsk_Ed7TKA8EZOQiuvP_krwJFe2SGXr2sYvEAGQFHzNUk68Rjaj3EORsxeVJIZd6RrX42H_f9js70bBzcDq_Jw8IlyDsODUhMknzSLM30dR2ZszJDYhIwhhABM" alt="Cross Crazy Life Logo" width="300"/>

  # Cross Crazy Life - Landing Page Oficial
</div>

---

Olá! Seja muito bem-vindo(a) ao projeto **Cross Crazy Life**. 🏁 

Este projeto é a página oficial (Landing Page) de um complexo radical de motocross e off-road. Ele foi criado para impressionar visualmente, sendo muito rápido, responsivo (funciona perfeitamente no celular e no computador) e utilizando tecnologias modernas da web.

Se você é novo(a) na programação, não se preocupe! Este guia foi feito passo a passo para que você consiga entender, rodar e até modificar este projeto na sua própria máquina.

## 🛠️ Quais tecnologias usamos aqui?

Para construir este site incrível, utilizamos algumas das ferramentas mais famosas do mercado:

- **ReactJS**: Uma biblioteca (uma caixa de ferramentas) criada pelo Facebook que nos ajuda a construir a interface visual do site em "peças de Lego" chamadas componentes (como o `Header`, `Hero`, `Footer`, etc).
- **Vite**: É o "motor" que faz o nosso projeto rodar super rápido durante o desenvolvimento. Antigamente a galera usava algo chamado Webpack, mas o Vite é muito mais moderno e veloz!
- **CSS Puro (Modules)**: Para deixar o site bonito (cores, fontes, animações), usamos arquivos CSS normais, mas separados para cada "peça de Lego". Isso garante que o estilo de um botão não bagunce o estilo de outro lugar.

## 🚀 Como rodar o projeto no seu computador

Você vai precisar de apenas uma ferramenta instalada no seu computador antes de começar: o **Node.js** (ele é como se fosse o tradutor que permite rodar códigos modernos no seu PC). Se não tiver, baixe e instale no site oficial: [nodejs.org](https://nodejs.org/).

Siga os passos abaixo no seu terminal (Prompt de Comando ou PowerShell):

**1. Abra a pasta do projeto**
Primeiro, você precisa navegar até a pasta onde o projeto está salvo.
```bash
cd caminho/para/a/pasta/cross-crazy-life
```

**2. Instale as "peças" necessárias (Dependências)**
O nosso código precisa de alguns pacotes externos (como o próprio React). Para baixar todos eles automaticamente, digite:
```bash
npm install
```
*(Isso vai criar uma pasta chamada `node_modules`. Ela é pesada, mas você não precisa mexer nela!)*

**3. Ligue o motor! (Rodar o servidor local)**
Agora é a hora da mágica. Para ver o site rodando, digite:
```bash
npm run dev
```
O seu terminal vai mostrar um endereço parecido com este: `http://localhost:5173/`. 
Segure a tecla **CTRL** e clique nesse link (ou copie e cole no seu navegador). Pronto! O site está rodando na sua máquina! 🎉

## 📁 Entendendo a estrutura (Como se achar no código)

Se você abrir este projeto no seu editor de código (como o VS Code), vai ver várias pastas. Aqui estão as mais importantes:

- `public/`: Aqui ficam coisas públicas, como ícones ou vídeos pesados (ex: o vídeo de fundo `MT_1.mp4`).
- `src/`: É aqui que a diversão acontece! Todo o código que escrevemos fica aqui dentro.
  - `components/`: Lembra das "peças de Lego"? Estão todas aqui. O Cabeçalho (Header), o Rodapé (Footer), a seção de Aluguel de Motos (Rental), etc.
  - `styles/`: Aqui ficam as cores oficiais e configurações globais do site (ex: `theme.css`).
  - `App.jsx`: É o arquivo principal que junta todas as peças do site em uma tela só.

## ✏️ Como fazer alterações?

A melhor parte do Vite é que ele atualiza o site na mesma hora!
Tente fazer o seguinte:
1. Com o `npm run dev` rodando, abra o arquivo `src/components/Header/Header.jsx`.
2. Procure pelo texto **"CRAZY LIFE"** ou qualquer outro título.
3. Mude para **"MEU PRIMEIRO SITE"** e salve o arquivo (Ctrl + S).
4. Olhe para o seu navegador: a mudança aparece instantaneamente sem você precisar apertar F5!

---

**Dica de Ouro para Iniciantes:** Não tenha medo de quebrar o código! A programação se aprende testando. Se algo der errado, aperte `CTRL + Z` para desfazer, ou apenas apague a pasta e baixe o projeto de novo. Divirta-se acelerando no código! 🏍️💨

