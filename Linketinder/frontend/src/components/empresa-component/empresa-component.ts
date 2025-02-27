

export class EmpresaComponent extends HTMLElement {

    private candidatos:any = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {

        // Cria um link para o CSS externo
        const secondLinkElement = document.createElement("link");
        secondLinkElement.setAttribute("rel", "stylesheet");
        secondLinkElement.setAttribute("href", "./src/global.css");
    
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "./src/components/empresa-component/empresa-component.css");
        
        // Carrega o arquivo HTML externo
        try {
            const response = await fetch("./src/components/empresa-component/empresa-component.html");
            const html = await response.text();

            // Define o conteúdo do Shadow DOM
            this.shadowRoot!.innerHTML = html;

            // Adiciona o arquivo css ao Shadow DOM
            this.shadowRoot!.appendChild(linkElement);
            this.shadowRoot!.appendChild(secondLinkElement);
            

        } catch (error) {
            console.error("Erro ao carregar o HTML:", error);
        }
    }
}

// Registra o componente para ser usado no HTML
customElements.define("empresa-component", EmpresaComponent);
