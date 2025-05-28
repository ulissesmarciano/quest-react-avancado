# Quest React Avançado - Pokédex

Este projeto foi desenvolvido como parte do desafio técnico proposto pelo curso **DevQuest**, com o objetivo de simular um teste técnico real em um processo seletivo para uma vaga de desenvolvedor frontend.

## 🚀 Sobre o Projeto

A aplicação consiste em uma Pokédex que lista Pokémons utilizando dados da [PokeAPI](https://pokeapi.co/). O usuário pode visualizar uma lista inicial com 10 Pokémons, carregar mais Pokémons dinamicamente, acessar uma página de detalhes de cada Pokémon e alternar entre os temas claro e escuro da interface.

## 🔍 Funcionalidades

- Página inicial com listagem de 10 Pokémons (nome e imagem);
- Botão "Carregar mais" para exibir mais 10 Pokémons por vez;
- Cada card de Pokémon é clicável e leva a uma página com os seguintes detalhes:
  - Imagem do Pokémon;
  - Nome;
  - Tipo(s);
  - Lista de movimentos (moves);
  - Lista de habilidades (abilities), incluindo nome e descrição;
- Alternância entre tema claro e escuro (light/dark);
- Responsividade para diferentes tamanhos de tela;
- (Bônus) Filtro de Pokémons por tipo;
- (Bônus) Testes unitários com Jest.

## 🛠 Tecnologias e Ferramentas Utilizadas

- **React.js**: Biblioteca principal para criação da SPA.
- **React Router DOM**: Gerenciamento de rotas entre páginas (home e detalhe).
- **Context API**: Implementação do sistema de tema (light/dark).
- **styled-components**: Estilização dos componentes de forma modular e com suporte a temas.
- **Jest**: Biblioteca de testes (opcional para bônus).
- **PokeAPI**: API pública gratuita para obter dados dos Pokémons.

## 💡 Decisões Técnicas

- Utilizei `styled-components` por sua integração nativa com o ThemeProvider, facilitando a alternância de temas;
- A estrutura de pastas foi pensada para manter separação clara entre componentes, páginas e contextos;
- Implementei carregamento incremental dos Pokémons para evitar sobrecarga de dados e melhorar a performance;
- Optei por usar a Context API em vez de outras ferramentas de gerenciamento de estado por simplicidade e adequação ao escopo.

## ▶️ Como Rodar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
