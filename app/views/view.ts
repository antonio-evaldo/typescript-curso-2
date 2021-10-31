export abstract class View<T> {
  private elemento: HTMLElement;
  private escapar: boolean;

  constructor(seletor: string, escapar = false) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor '${seletor}' não existe no DOM.`);
    }

    this.escapar = escapar;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }
}