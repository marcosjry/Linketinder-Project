package marcos.linketinder.domain.service.Impl

import marcos.linketinder.domain.model.candidato.Candidato
import marcos.linketinder.domain.service.CandidatoService

class CandidatoServiceImpl implements CandidatoService{

    @Override
    void adicionaCandidato(List<Candidato> list, Candidato candidato) {
        list.add(candidato)
    }
}
