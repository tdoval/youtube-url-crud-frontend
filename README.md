# YouTube URL CRUD Frontend

Este é o repositório do frontend do projeto CRUD de URLs do YouTube. O objetivo deste projeto é permitir o gerenciamento de URLs de vídeos do YouTube, com funcionalidades de criação, leitura, atualização e exclusão (CRUD).

## Tecnologias Utilizadas

- **Next.js 14**: Framework de React para desenvolvimento de aplicações web modernas e eficientes.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática opcional, ajudando a evitar erros e a melhorar a qualidade do código.
- **TailwindCSS**: Framework de CSS utilitário para estilização rápida e consistente.
- **ShadcnUI**: Biblioteca de componentes para uma UI consistente e rápida.
- **Context API**: Gerenciamento de estado global para a aplicação.
- **Custom Hooks**: Hooks personalizados foram utilizados para abstrair lógica de negócio e manipulação de dados.
- **Fetch API**: Utilizada para realizar requisições ao backend, conectado via uma API RESTful.

## Configuração do Projeto

Para a conexão com o backend em Python Django, utilize as variáveis de ambiente configuradas em `.env.example`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Este endpoint é utilizado para se comunicar com o backend.

## Como Clonar e Executar o Projeto

Siga os passos abaixo para clonar e executar o projeto localmente:

1. Clone o repositório:

   ```sh
   git clone https://github.com/tdoval/youtube-url-crud-frontend.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd youtube-url-crud-frontend
   ```

3. Instale as dependências utilizando `npm`:

   ```sh
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente conforme o arquivo `.env.example`.

5. Execute o projeto em ambiente de desenvolvimento:

   ```sh
   npm run dev
   ```

6. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Estrutura do Projeto

A estrutura do projeto foi organizada em diretórios principais, cada um responsável por uma parte específica da aplicação:

- **features**: Contém as funcionalidades principais do projeto (autenticação, dashboard, CRUD de URLs).
- **components**: Componentes reutilizáveis utilizados em várias partes do projeto.
- **context**: Implementação do Context API para o gerenciamento de estado global.
- **hooks**: Custom hooks para lógica específica, como autenticação e validação de URLs.
- **global**: Recursos globais, como navbar, modal, loader e Sidebar.

## Backend

O backend do projeto está implementado em Python Django e está disponível em [https://github.com/tdoval/youtube-url-crud-backend]().

Certifique-se de que o backend esteja sendo executado para que a aplicação funcione corretamente.

### Melhorias Futuras

1. **Integrar API do YouTube**

   - Implementar mais funcionalidades da API do YouTube, como:
     - **Pesquisa de vídeos**: Permitir que os usuários pesquisem vídeos do YouTube diretamente na aplicação.
     - **Recomendações**: Exibir vídeos recomendados com base nas preferências e no histórico do usuário.
     - **Autenticação via Google**: Permitir que os usuários façam login utilizando suas contas Google/YouTube, integrando o **OAuth 2.0**.

2. **Criar Profile para o Usuário**

   - Adicionar uma página de perfil para os usuários:
     - O usuário poderá atualizar informações de conta como nome, e-mail, e senha.
     - Exibir histórico de URLs salvas e vídeos assistidos.
     - Adicionar a capacidade de o usuário organizar seus vídeos salvos em **playlists** personalizadas.

3. **Melhor Exibição de Loading e Notificações Toast**

   - Implementar spinners ou skeleton loaders para melhorar a experiência do usuário enquanto a aplicação está carregando dados (URLs, vídeos, etc.).
   - Melhorar a experiência com **notificações toast**:
     - Exibir feedback mais granular e visual para ações como salvar, editar ou deletar URLs.
     - Adicionar diferentes níveis de notificações, como "sucesso", "erro" e "aviso".

4. **Melhoria na Responsividade**

   - Garantir que a interface seja totalmente responsiva e fluida em diferentes tamanhos de tela, especialmente para dispositivos móveis e tablets.
   - Implementar um **menu móvel** e layouts ajustáveis, otimizando o uso da tela em resoluções menores.

5. **Caching e Melhorias de Performance**

   - Implementar caching no frontend para melhorar a performance e reduzir o tempo de carregamento de dados:
     - Utilizar técnicas como **service workers** para habilitar o uso offline.
     - Adicionar **lazy loading** para carregamento de componentes apenas quando necessário.

6. **Dark Mode**

   - Implementar um **tema dark mode**, permitindo que os usuários alternem entre tema claro e escuro para melhorar a acessibilidade e a personalização da interface.

7. **Internacionalização (i18n)**

   - Adicionar suporte para **vários idiomas** na aplicação, permitindo que o usuário escolha o idioma de preferência.
   - Utilizar bibliotecas como **i18next** ou **react-intl** para facilitar a tradução e o gerenciamento de diferentes línguas.

8. **Aprimorar Acessibilidade (a11y)**

   - Melhorar a acessibilidade, seguindo as diretrizes do **WCAG (Web Content Accessibility Guidelines)**:
     - Garantir que a aplicação possa ser usada completamente com teclado.
     - Implementar suporte a leitores de tela e melhorar o contraste de cores para usuários com deficiência visual.

9. **Teste Automatizado de Frontend**

- Ampliar a cobertura de testes automatizados utilizando ferramentas como **Jest** e **React Testing Library**:
  - Testar componentes críticos como o player de vídeo, formulários de cadastro de URLs, e navegação.
  - Implementar testes end-to-end (E2E) com **Cypress** para simular o comportamento do usuário e garantir que tudo funcione corretamente.
