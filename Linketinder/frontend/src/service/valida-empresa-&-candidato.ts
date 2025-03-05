import { validaInput } from "./validacao";

export async function validaDadosCompartilhados(nome: HTMLInputElement, email: HTMLInputElement, estado: HTMLInputElement, cep: HTMLInputElement) {

    const erroNome = document.getElementById("erroNome") as HTMLElement;
    const erroEmail = document.getElementById("erroEmail") as HTMLElement;
    const erroCep = document.getElementById("erroCep") as HTMLElement;
    const erroEstado = document.getElementById("erroEstado") as HTMLElement;
    return (
        await verificaInput("nome", nome.value, nome, erroNome, "Não é aceito caracteres especiais e mínimo de 2 caractéres.") && 
        await verificaInput("email", email.value, email, erroEmail, "Email inválido. Ex: usuario@dominio.com") && 
        await verificaInput("nome", estado.value, estado, erroEstado, "Estado inválido. Não é aceito caracteres especiais.") &&
        await verificaInput("cep", cep.value, cep, erroCep, "CEP no formato (XXXXX-XXX ou XXXXXXXX)")
    );
}

export async function verificaInput( aValidar: string, valor: string, inputGenerico: HTMLInputElement, inputErroGenerico: HTMLElement, mensagem: string) {
    if(!validaInput(aValidar, valor)) {
        inputErroGenerico.textContent = mensagem;
        inputGenerico.classList.add("input-erro"); // Opcional: adiciona estilo
        return false;
    } else {
        inputErroGenerico.textContent = "";
        inputGenerico.classList.remove("input-erro");
        return true;
    }
}
