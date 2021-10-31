# TypeScript parte 2: Avançando na linguagem

## Módulo 1

- Inspiração no React para criação de templates declarativos e dinâmicos
- Manipulação declarativa do DOM através de template
- Template dinâmico

A View das negociações, que renderiza uma tabela, depende diretamente da classe `Negociacoes` para construir o template, então a recebemos uma instância dela como parâmetro dos métodos `template()` e `update()`. Chamamos o método `update()` no `constructor()` e no método `adiciona()` de `NegociacaoController`, ou seja, ao carregar a página e depois de adicionar uma nova negociação.

- Formatação de datas usando Intl

```js
  new Intl.DateTimeFormat().format(negociacao.data)  // Formata para padrão do navegador
  new Intl.DateTimeFormat('pt-BR').format(negociacao.data)
```

## Módulo 2

- Herança com TypeScript
- Classes com tipo genérico

Aqui utilizamos o tipo genérico `T` que funciona como "parâmetro de tipo". Esse tipo será definido quando uma classe filha herdar dessa classe. Assim, o `T` será substituído pelo tipo definido, em todos os lugares que foi utilizado.

```ts
abstract class View<T> {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    // aqui podemos fazer alguma verificação para escapar o retorno do método `template`, já que está sendo atribuído ao `innerHTML` de um elemento.
    this.elemento.innerHTML = this.template(model);
  }
}

class MensagemView extends View<string> {
  protected template(model: string): string {
    return `
      <p>${model}</p>
    `;
  }
}

// Para esse exemplo, o tipo Negociacoes é um array de objetos com os atributos "quantidade" e "valor"
class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
      <ul>
        ${model.lista().map(negociacao => {
          return `
            <li>${negociacao.quantidade}</li>
            <li>${negociacao.valor}</li>
          `;
        }).join('')}
      </ul>
    `;
  }
}
```

Perceba que precisamos repetir o tipo definido nos outros lugares que foi utilizado, nesse caso no parâmetro do método `template`. Achei um pouco redundante, mas esse artifício de parâmetro de tipo genérico nos fornece um controle maior sobre a classe mãe, "obrigando" que o mesmo tipo seja utilizado em diferentes lugares, por exemplo.

- Classes abstratas
- O modificador protected

## Módulo 3

- Visibilidade de métodos
- Validando negociações em dias úteis
- Vantagens do uso de enums
- Cuidados com enums

## Módulo 4

- Revisão da lógica de conversão de negociações
- Método estáticos
- Parâmetros opcionais

## Módulo 5

- Remoção de comentários do código compilado

Adicionar essa configuração em `compilerOptions`:

```json
    "removeComments": true
```

- Ativação do `strictNullChecks`

Adicionar essa configuração em `compilerOptions`:

```json
    "strictNullChecks": true
```

- Como suprimir erros, quando fizer sentido, resultantes do `strictNullChecks`
- Benefícios do strictNullChecks no controle do fluxo da sua aplicação

Às vezes não faz muito sentido tratar possíveis erros provenientes do `strictNullChecks`, como em alguns seletores de elementos HTML, nesse caso podemos realizar um *casting* como abaixo:

```ts
const input = document.querySelector('input') as HTMLInputElement;
```

Ou:

```ts
const input = <HTMLInputElement>document.querySelector('input');
```

Em outros casos pode ser interessante tratar o erro, lançando uma mensagem de erro ou substituindo algum valor da aplicação.
