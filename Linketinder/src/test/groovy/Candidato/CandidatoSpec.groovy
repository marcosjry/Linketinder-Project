package Candidato

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.candidato.Candidato
import spock.lang.Specification


class CandidatoSpec extends  Specification  {

    def "criação de candidato deve atribuir corretamente os valores"() {
        given: "dados para a criação do candidato"
        def nome = "João da Silva"
        def email = "joao@example.com"
        def cpf = "123.456.789-00"
        def idade = 30
        def estado = "SP"
        def cep = "12345-678"
        def descricao = "Candidato a vaga de desenvolvedor"
        def competencias = [Competencia.JAVA, Competencia.GROOVY]

        when: "um candidato é instanciado com os dados informados"
        def candidato = new Candidato(nome, email, cpf, idade, estado, cep, descricao, competencias)

        then: "os atributos do candidato devem corresponder aos valores passados"
        candidato.nome == nome
        candidato.email == email
        candidato.cpfCnpj == cpf
        candidato.idade == idade
        candidato.estado == estado
        candidato.cep == cep
        candidato.descricao == descricao
        candidato.competencias == competencias

    }
}
