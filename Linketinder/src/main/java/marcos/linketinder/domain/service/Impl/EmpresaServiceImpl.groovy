package marcos.linketinder.domain.service.Impl

import marcos.linketinder.domain.model.empresa.Empresa
import marcos.linketinder.domain.service.EmpresaService

class EmpresaServiceImpl implements EmpresaService{

    @Override
    void adicionaEmpresa(List<Empresa> empresaList, Empresa empresa) {
        empresaList.add(empresa)
    }
}
