package marcos.linketinder.domain.model.empresa

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.Pessoa


class Empresa extends Pessoa implements PessoaJuridica{

    String pais;

    Empresa(String nome, String email, String cnpj, String estado, String pais,String cep, String descricao, List<Competencia> competencias) {
        super(nome, email, cnpj, estado, cep, descricao, competencias)
        this.pais = pais
    }

    @Override
    String toString() {
        return "Empresa { nome: $nome \nemailCorporativo: $email \ncnpj: $cpfCnpj \npais: $pais \nestado: $estado \ncep: $cep \ndescricao: $descricao \ncompetencias: $competencias }\n"
    }
}
