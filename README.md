# 💸Simulador de investimentos

### Sobre

Este projeto feito com react é um simulador de investimento responsivo que exibe os resultados da simulação com base em uma API fake.

### Como funciona?

Para fazer a simulação, basta selecionar o tipo de investimento e o tipo de indexação que deseja, a partir disso, logo após clicar em simmular, o resultado é exibido
com todos os dados e o gráfico que compara o investimento com aporte e sem aporte.

```
<Imagem do fluxo de uso>
```

### Pré requisitos

1. Instale o node.js em https://nodejs.org/en/

2. Verifique se com o node, o npm (node package manager) está instalado com o seguinte comando:

```
<npm --version>
```

3. Para inicializar a api no seu servidor local você precisará também do npx, para verificar se está instalado, execute o comando:

```
<npx --version>
```

4. Clone o projeto

```
<Comando para clonar o repositorio>
```

### Como usar?

Com o repositório clonado, na pasta simulador.api (onde fica a api) execute o comando:

```
<npx json-server db.json>
```

Este comando irá rodar localmente a api fake (db.json)

Após isso, agora é hora de rodar o projeto em react, que fica na pasta simulador.react

Nesta pasta, entre em app-simulador (projeto react do simulador), e execute o comando:

```
<npm start>
```

No seu terminal, você verá a seguinte mensagem: "Já há algo rodando nessa porta, deseja rodar o projeto em outra porta? (y/n)"

Clique y (para yes), isso ocorre porque na porta 3000 do seu localhost, a api ja está rodando.

Pronto! agora você ja pode usar o simulador!

## Regras aplicadas

- Nos inputs do usuário, só é possível inserir números
- Toda vez que o simulador é renderizado, os valores fixos do IPCA e do CDI são preenchidos com um GET na API fake
- Toda vez que o usuário clica em *Simular*, é feito um GET na API, com os tipos de investimento e indexação selecionados pelo usuário

## Ferramentas utilizadas

- Prettier (formatador de código)
- React JS code snippets (atalhos para facilitar codar)
- Styled components

## Conceitos utilizados

- Mobile first (responsividade)
- React hooks
  - useState
  - useContext
  - useEffect
  
## Para onde prosseguir?
 - Implementar uma lógica para postar dados na API
 - Implementar mais testes de front para garantir
