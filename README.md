# TypeScript parte 2: Avançando na linguagem

## Módulo 1

- Inspiração no React para criação de templates declarativos e dinâmicos
- Manipulação declarativa do DOM através de template
- Template dinâmico

A View das negociações, que renderiza uma tabela, depende diretamente da classe `Negociacoes` para construir o template, então a recebemos como parâmetro nos métodos `template()` e `update()`. Chamamos o método `update()` no construtor de `NegociacaoController` e no método `adiciona()`.

- Formatação de datas usando Intl

```js
  new Intl.DateTimeFormat().format(negociacao.data)
```