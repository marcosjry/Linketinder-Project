package marcos.linketinder.domain.model.candidato

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.Pessoa


class Candidato extends Pessoa implements PessoaFisica{

    int idade

    Candidato(String nome, String email, String cpf, int idade, String estado, String cep, String descricao, List<Competencia> competencias) {
        super(nome, email, cpf, estado, cep, descricao, competencias)
        this.idade = idade
    }

    @Override
    String toString() {
        def name = nome.split(" ");
        def firstName = name[0]
        return "Candidato $firstName \n{ nome: $nome \nemail: $email \ncpf: $cpfCnpj \nidade: $idade \nestado: $estado \ncep: $cep \ndescricao: $descricao \ncompetencias: $competencias }\n"
    }

}
