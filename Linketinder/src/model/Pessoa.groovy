package model

class Pessoa {
    String nome
    String email
    String cpfCnpj
    String estado
    String cep
    String descricao
    List<Competencia> competencias = []

    Pessoa(String nome, String email, String cpf, String estado, String cep, String descricao, List<Competencia> competencias) {
        this.nome = nome
        this.email = email
        this.cpfCnpj = cpf
        this.estado = estado
        this.cep = cep
        this.descricao = descricao
        this.competencias = competencias
    }
}
