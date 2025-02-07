package Empresa

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.empresa.Empresa
import marcos.linketinder.domain.service.Impl.EmpresaServiceImpl
import spock.lang.Specification

class EmpresaServiceSpec extends Specification{
    def "deve adicionar uma empresa à lista de empresas"() {

        def listaEmpresas = []

        given: "uma lista de empresas e um serviço de empresa"
        def service = new EmpresaServiceImpl();
        def empresa = new Empresa(
                "Tech Solutions",
                "contato@techsolutions.com",
                "12345678000100",
                "Brasil",
                "SP",
                "01002-000",
                "Empresa de tecnologia",
                [Competencia.JAVA, Competencia.SPRINGFRAMEWORK]
        )

        when: "a empresa é adicionada à lista através do serviço"
        service.adicionaEmpresa(listaEmpresas, empresa)

        then: "a lista deve conter a empresa adicionada"
        listaEmpresas.size() >= 1
        listaEmpresas.contains(empresa)
    }
}
