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
