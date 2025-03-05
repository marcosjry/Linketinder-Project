function validaEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

  // Valida CPF (Formato: 000.000.000-00 ou 00000000000)
function validaCPF(cpf: string): boolean {
    const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    return regex.test(cpf);
}

  // Valida CNPJ (Formato: 00.000.000/0000-00 ou 00000000000000)
function validaCNPJ(cnpj: string): boolean {
    const regex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/;
    return regex.test(cnpj);
}

  // Valida telefone (com ou sem DDD, com ou sem máscara)
function validaTelefone(telefone: string): boolean {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);
}

function validaCep(cep: string): boolean {
  const regex = /^(\d{5}-\d{3}|\d{8})$/;
  return regex.test(cep);
}

function validaNome(nome: string): boolean {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,50}$/;
    return regex.test(nome);
}

function validaIdade(idade: string): boolean {
  const regex = /^(1[6-9]|[2-8]\d|90)$/;
  return regex.test(idade);
}

export function validaInput(tipoValidacao: string, dadoInput: string) {
    const validacoes: { [key: string]: (dado: string) => boolean } = {
        nome: validaNome,
        email: validaEmail,
        cpf: validaCPF,
        cnpj: validaCNPJ,
        telefone: validaTelefone,
        cep: validaCep,
        idade: validaIdade
    };
    const validacao = validacoes[tipoValidacao];

    if (!validacao) {
      throw new Error(`Tipo de validação desconhecido: ${tipoValidacao}`);
    }
  
    return validacao(dadoInput);
}