import { Candidato } from "../../model/candidato";
import { Empresa } from "../../model/empresa";
import { validaDadosCompartilhados } from "../../service/valida-empresa-&-candidato";
import { verificaInput } from "../../service/valida-empresa-&-candidato";

document.addEventListener("DOMContentLoaded", function () {

  const radioCandidato = document.getElementById('radioCandidato') as HTMLInputElement;
  const radioEmpresa = document.getElementById('radioEmpresa') as HTMLInputElement;
  const campoCandidato = document.getElementById('campoCandidato') as HTMLElement;
  const campoEmpresa = document.getElementById('campoEmpresa') as HTMLElement;

  if (!radioCandidato || !radioEmpresa || !campoCandidato || !campoEmpresa) {
    return; // Sai da função se a página não for a de registro
  }

  function toggleCampos(): void {
      if (radioCandidato.checked) {
          campoCandidato.style.display = 'block';
          campoEmpresa.style.display = 'none';
      } else if (radioEmpresa.checked) {
          campoEmpresa.style.display = 'block';
          campoCandidato.style.display = 'none';
      } else {
          campoCandidato.style.display = 'none';
          campoEmpresa.style.display = 'none';
      }
  }

  radioCandidato.addEventListener('change', toggleCampos);
  radioEmpresa.addEventListener('change', toggleCampos);

  function validaTipoConta(): boolean {
    // Verifica se alguma opção foi selecionada
    if (!radioCandidato.checked && !radioEmpresa.checked) {
      alert('Selecione se você é candidato ou empresa.');
      return false;
    }
    return true;
  }
  
  document.getElementById('turnBack')!.addEventListener('click', () => {
    window.location.href = '../../../index.html';
  });
  
  document.getElementById('registroForm')!.addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita o recarregamento da página
    if(validaTipoConta()) {
      // Captura os valores do formulário
      const nome = document.getElementById('contaNome')  as HTMLInputElement;
      const email = document.getElementById('contaEmail')  as HTMLInputElement;
      const cpfCnpj = document.getElementById('contaCpfCnpj')  as HTMLInputElement;
      const estado = document.getElementById('contaEstado')  as HTMLInputElement;
      const cep = document.getElementById('contaCEP')  as HTMLInputElement;
      const descricao = document.getElementById('contaDescricao')  as HTMLInputElement;
      const competencias = document.getElementById('contaCompetencias')  as HTMLInputElement;
    
      const comp = competencias.value.split(",");
      let conta;
      const dadosCompValidos = await validaDadosCompartilhados(nome, email, estado, cep);

      // verifica se os dados iguais em empresa ou candidato estão válidos
      if(!dadosCompValidos) return;

      if(radioCandidato.checked) {

        let idade = document.getElementById('contaIdade') as HTMLInputElement;
        const erroIdade = document.getElementById("erroIdade") as HTMLElement;
        const idadeValida = await verificaInput("idade", idade.value, idade, erroIdade, "Idade inválida.");
        if(!idadeValida) return;

        const erroCpf = document.getElementById("erroCpfCnpj") as HTMLElement;
        const cpfValido = await verificaInput("cpf", cpfCnpj.value, cpfCnpj, erroCpf, "CPF inválido. Ex: 123.456.789-09");
        if(!cpfValido) return;

        let idadeAsNumber = idade.valueAsNumber;
        conta = new Candidato (nome.value, email.value, cpfCnpj.value, estado.value, cep.value, descricao.value, comp, idadeAsNumber);
        let contas: any[] = JSON.parse(localStorage.getItem('contas-candidato') || '[]');
        contas.push(conta);
        localStorage.setItem('contas-candidato', JSON.stringify(contas)); // Salva no localStorage
        alert("Registro realizado com Sucesso!")
        //Redireciona de volta para a lista de tarefas
        window.location.href = '../../../index.html';
      }
      if(radioEmpresa.checked) {

        let pais = document.getElementById('contaPais') as HTMLInputElement;
        const erroPais = document.getElementById("erroPais") as HTMLElement;
        const paisValido = await verificaInput("nome", pais.value, pais, erroPais, "Não é aceito caracteres especiais e nem números.");
        if(!paisValido) return;

        const erroCpfCnpj = document.getElementById("erroCpfCnpj") as HTMLElement;
        const cpfValido = await verificaInput("cnpj", cpfCnpj.value, cpfCnpj, erroCpfCnpj, "CNPJ inválido. Ex: 12.345.678/0001-99 ou 12345678000199");
        if(!cpfValido) return;

        conta = new Empresa (nome.value, email.value, cpfCnpj.value, estado.value, cep.value, descricao.value, comp, pais.value);
        let contas: any[] = JSON.parse(localStorage.getItem('contas-empresa') || '[]');
        contas.push(conta);
        localStorage.setItem('contas-empresa', JSON.stringify(contas)); // Salva no localStorage
        alert("Registro realizado com Sucesso!")
        //Redireciona de volta para a lista de tarefas
        window.location.href = '../../../index.html';
      }       
    }}
  )
});

// Função de validação do formulário

