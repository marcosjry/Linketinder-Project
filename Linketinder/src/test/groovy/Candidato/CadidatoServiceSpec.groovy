package Candidato

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.candidato.Candidato
import marcos.linketinder.domain.service.Impl.CandidatoServiceImpl
import spock.lang.Specification

class CadidatoServiceSpec extends Specification{
    def "deve adicionar um candidato à lista de candidatos"() {


        given: "uma lista de candidatos e um serviço de candidatos"
        def listaCandidatos = []
        def service = new CandidatoServiceImpl();
        def candidato = new Candidato(
                "João da Silva",
                "joao@example.com",
                "123.456.789-00",
                30,
                "SP",
                "12345-678",
                "Candidato a vaga de desenvolvedor",
                [Competencia.JAVA, Competencia.GROOVY]
        )

        when: "o candidato é adicionado à lista"
        service.adicionaCandidato(listaCandidatos, candidato)

        then: "a lista deve conter o candidato adicionado"
        listaCandidatos.size() >= 1
        listaCandidatos.contains(candidato)
    }
}
