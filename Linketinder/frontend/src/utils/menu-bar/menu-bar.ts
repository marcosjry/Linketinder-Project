export class MenuBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        try {
            // Carrega o HTML
            const response = await fetch("./src/utils/menu-bar/menu-bar.html");
            const html = await response.text();
            
            // Adiciona o HTML ao shadow root
            this.shadowRoot!.innerHTML = html;
            
            // Adiciona o CSS
            const linkElement = document.createElement("link");
            linkElement.setAttribute("rel", "stylesheet");
            linkElement.setAttribute("href", "./src/utils/menu-bar/menu-bar.css");
            this.shadowRoot!.appendChild(linkElement);
            
            // Configura os event listeners para menu de navegação
            this.setupNavigation();
            
            // Configura o dropdown
            this.setupDropdown();

        } catch (error) {
            console.error("Erro ao carregar o HTML:", error);
        }
    }
    
    setupNavigation(): void {
        // Seleciona todos os itens de menu que têm 'data-component'
        const menuItems = this.shadowRoot!.querySelectorAll("li[data-component]");
        menuItems.forEach((item) => {
            item.addEventListener("click", (event) => {
                const target = event.target as HTMLElement;
                const componentName = target.getAttribute("data-component");
                if(componentName === "registro-page") {
                    window.location.href = './src/pages/registro/registro-component.html';
                } 
                else {
                    this.dispatchEvent(new CustomEvent("menu-selecionado", {
                        detail: { componentName },
                        bubbles: true,
                        composed: true
                    }));
                }
                    
                
            });
        });
    }
    
    setupDropdown(): void {
        const loginButton = this.shadowRoot!.querySelector('#loginButton') as HTMLButtonElement;
        const dropdownMenu = this.shadowRoot!.querySelector('#dropdownMenu') as HTMLUListElement;
    
        if (!loginButton || !dropdownMenu) {
            console.error("Elementos do dropdown não encontrados no Shadow DOM");
            return;
        }
    
        // Garante que o dropdown começa fechado
        dropdownMenu.classList.add('show');
    
        // Toggle do dropdown ao clicar no botão de login
        loginButton.addEventListener('click', (event: Event) => {
            event.stopPropagation(); // Impede a propagação para o document
            dropdownMenu.classList.toggle('show');
        });
    
        // Fecha o dropdown apenas se o clique for fora do botão e do dropdown
        document.addEventListener('click', (event: Event) => {
            const target = event.target as HTMLElement;
            dropdownMenu.classList.add('show');
        });
    }
}

// Registra o componente
customElements.define("menubar-component", MenuBar);