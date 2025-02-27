import { criarGrafico } from "./grafico";

class GraficoCandidatos extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Criar o gráfico dentro do shadow DOM
    criarGrafico(shadow);
  }
}

// Definir o Web Component
customElements.define("grafico-candidatos", GraficoCandidatos);
