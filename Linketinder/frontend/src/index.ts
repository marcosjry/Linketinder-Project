import "./utils/menu-bar/menu-bar";
import "./components/candidato-component/candidato-component";
import "./components/empresa-component/empresa-component";
import "./components/lista-component/lista-component";
import "./components/grafico-component/grafico-component";
// Seleciona o container de conteúdo
const conteudo = document.getElementById("content") as HTMLElement;

// Escuta o evento disparado pelo menu
document.addEventListener("menu-selecionado", (event: Event) => {
    const customEvent = event as CustomEvent;
    const componentName = customEvent.detail.componentName;
    if (componentName) {
        conteudo.innerHTML = ""; // Limpa o conteúdo anterior
        // Cria dinamicamente o novo componente
        const componentElement = document.createElement(componentName);
        conteudo.appendChild(componentElement);
    }
});