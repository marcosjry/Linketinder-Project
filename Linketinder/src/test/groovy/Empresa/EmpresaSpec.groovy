package Empresa

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.empresa.Empresa
import spock.lang.Specification

class EmpresaSpec extends Specification {
    
    def "criação da empresa deve atribuir corretamente os valores"() {
        given: "dados para a criação da empresa"
        def nome = "Tech Solutions"
        def email = "contato@techsolutions.com"
        def cnpj = "12345678000100"
        def pais = "Brasil"
        def estado = "SP"
        def cep = "01002-000"
        def descricao = "Empresa de tecnologia"
        def competencias = [Competencia.JAVA, Competencia.SPRINGFRAMEWORK]

        when: "uma empresa é instanciado com os dados informados"
        def empresa = new Empresa(nome, email, cnpj, estado, pais, cep, descricao, competencias)

        then: "os atributos do empresa devem corresponder aos valores passados"
        empresa.nome == nome
        empresa.email == email
        empresa.cpfCnpj == cnpj
        empresa.pais == pais
        empresa.estado == estado
        empresa.cep == cep
        empresa.descricao == descricao
        empresa.competencias == competencias

    }
}
