# Calculadora de Dólar e Medidas

Este projeto é uma aplicação web desenvolvida com **React** e **Vite**, que oferece ferramentas simples para conversão de moeda (Real para Dólar) e unidades de medida (Centímetros para Metros e vice-versa).

## Funcionalidades

- **Conversor de Moeda:** Converta valores de reais (BRL) para dólares americanos (USD) utilizando uma cotação informada pelo usuário.
- **Conversor de Medidas:** Realize conversões entre centímetros e metros de forma prática.
- **Validação de Campos:** Todos os campos aceitam apenas números e exibem mensagens de erro em caso de preenchimento incorreto.
- **Interface Responsiva:** Utiliza Bootstrap para garantir uma boa experiência em diferentes dispositivos.

## Estrutura do Projeto

```
src/
  components/
    Banner/
    CalcDollar/
    CalcMedida/
    Menu/
    Rodape/
    Titulo/
  functions/
    validarCampo.js
  pages/
    Home.jsx
    Layout.jsx
    Medida.jsx
    Moeda.jsx
    NoPage.jsx
    Sobre.jsx
  App.jsx
  App.css
  main.jsx
public/
  01.jpg
  02.jpg
  03.jpg
  dollar.png
```

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router DOM](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Scripts Disponíveis

- `npm run dev` — Inicia o ambiente de desenvolvimento.
- `npm run build` — Gera a versão de produção.
- `npm run preview` — Visualiza a versão de produção localmente.
- `npm run lint` — Executa o ESLint para análise de código.

## Autor

Desenvolvido por [Henrique Marques](https://linkedin.com/in/henrymarques) no [Senac Americana](https://sp.senac.br/americana).

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
