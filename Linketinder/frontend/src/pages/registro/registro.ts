import { Candidato } from "../../model/candidato";
import { Empresa } from "../../model/empresa";

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
  function validateForm(): boolean {
    // Verifica se alguma opção foi selecionada
    if (!radioCandidato.checked && !radioEmpresa.checked) {
      alert('Selecione se você é candidato ou empresa.');
      return false;
    }
  
    // Valida o campo específico conforme a opção escolhida
    if (radioCandidato.checked) {
      const idadeInput = document.getElementById('contaIdade') as HTMLInputElement;
      let idade = idadeInput.valueAsNumber;
      console.log(idade);
      if (idade < 18) {
        alert('Por favor, informe sua idade.');
        return false;
      }
    }
  
    if (radioEmpresa.checked) {
      const paisInput = document.getElementById('contaPais') as HTMLInputElement;
      if (!paisInput.value.trim()) {
        alert('Por favor, informe o país da empresa.');
        return false;
      }
    }
  
    // Outras validações podem ser adicionadas aqui
    return true;
  }
  
  document.getElementById('turnBack')!.addEventListener('click', () => {
    console.log("clicado");
    window.location.href = '../../../index.html';
  });
  
  document.getElementById('registroForm')!.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página
    if(validateForm()) {
      // Captura os valores do formulário
      const nome = document.getElementById('contaNome')  as HTMLInputElement;
      const email = document.getElementById('contaEmail')  as HTMLInputElement;
      const cpfCnpj = document.getElementById('contaCpfCnpj')  as HTMLInputElement;
      const estado = document.getElementById('contaEstado')  as HTMLInputElement;
      const cep = document.getElementById('contaCEP')  as HTMLInputElement;
      const descricao = document.getElementById('contaDescricao')  as HTMLInputElement;
      const competencias = document.getElementById('contaCompetencias')  as HTMLInputElement;
    
      const comp = competencias.value.split(",");
    
      let inputDiferente;
      let conta;
      if(radioCandidato.checked) {
        inputDiferente = document.getElementById('contaIdade') as HTMLInputElement;
        let idade = inputDiferente.valueAsNumber;
        conta = new Candidato (nome.value, email.value, cpfCnpj.value, estado.value, cep.value, descricao.value, comp, idade);
        let contas: any[] = JSON.parse(localStorage.getItem('contas-candidato') || '[]');
        contas.push(conta);
        localStorage.setItem('contas-candidato', JSON.stringify(contas)); // Salva no localStorage
      }
      if(radioEmpresa.checked) {
        inputDiferente = document.getElementById('contaPais') as HTMLInputElement;
        conta = new Empresa (nome.value, email.value, cpfCnpj.value, estado.value, cep.value, descricao.value, comp, inputDiferente.value);
        console.log(conta);
        let contas: any[] = JSON.parse(localStorage.getItem('contas-empresa') || '[]');
        contas.push(conta);
      
        localStorage.setItem('contas-empresa', JSON.stringify(contas)); // Salva no localStorage
      }      
    
      alert("Registro realizado com Sucesso!")
      // Redireciona de volta para a lista de tarefas
      window.location.href = '../../../index.html';
    }}
  )
});

// Função de validação do formulário

