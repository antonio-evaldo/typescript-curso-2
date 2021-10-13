# TypeScript parte 2: Avançando na linguagem

## Módulo 1

- Inspiração no React para criação de templates declarativos e dinâmicos
- Manipulação declarativa do DOM através de template
- Template dinâmico

A View das negociações, que renderiza uma tabela, depende diretamente da classe `Negociacoes` para construir o template, então a recebemos uma instância dela como parâmetro dos métodos `template()` e `update()`. Chamamos o método `update()` no `constructor()` e no método `adiciona()` de `NegociacaoController`, ou seja, ao carregar a página e depois de adicionar uma nova negociação.

- Formatação de datas usando Intl

```js
  new Intl.DateTimeFormat().format(negociacao.data)
```

## Módulo 2

- Herança com TypeScript
- Classes com tipo genérico
- Classes abstratas
- O modificador protected