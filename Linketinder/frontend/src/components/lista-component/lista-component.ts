    
export class ListaComponent extends HTMLElement {

    private data: any[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['data'];
    }

    async connectedCallback() {
        this.render();
    }
    
    async attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'data' && newValue) {
            try {
                this.data = JSON.parse(newValue);
                this.render();
            } catch (e) {
                console.error("Erro ao parsear data:", e);
            }
        }
    }
    

    private render() {
        this.shadowRoot!.innerHTML = `
        <div class="item-wrapper">
            <ul>
              ${this.data.map((item) => `
                <div class="item-list">
                    <li class="esconde-dado">
                        <h3 ><span>${item.nome}</span></h3>
                    </li>
                    <li class="esconde-dado">
                        <p>
                            <span>${item.email}</span>
                        </p>
                    </li>
                    <li class="esconde-dado">
                        <p>CPF/CNPJ</p>
                        <span>${item.cpfcnpj}</span>
                    </li>
                    <li>
                        <p>Estado</p>
                        <span>${item.estado}</span>
                    </li>
                    <li>
                        <p>Cep</p>
                        <span>${item.cep}</span>
                    </li>
                    <li>
                        <p>Descricao</p>
                        <span>${item.descricao}</span>
                    </li>
                    <li>
                        <p>Competências</p>
                        <span>${item.competencias}</span>
                    </li>
                </div>`).join("")}
            </ul>
        </div>
          `;
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "./src/components/lista-component/lista-component.css");

        this.shadowRoot!.appendChild(linkElement);
    }
}

// Registra o componente para ser usado no HTML
customElements.define("lista-component", ListaComponent);
