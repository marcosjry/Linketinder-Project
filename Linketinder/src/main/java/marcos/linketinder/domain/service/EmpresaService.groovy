package marcos.linketinder.domain.service

import marcos.linketinder.domain.model.empresa.Empresa

interface EmpresaService {

    void adicionaEmpresa(List<Empresa> empresaList, Empresa empresa)
}