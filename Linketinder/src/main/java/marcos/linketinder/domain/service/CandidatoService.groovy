package marcos.linketinder.domain.service

import marcos.linketinder.domain.model.candidato.Candidato

interface CandidatoService {

    void adicionaCandidato(List<Candidato> list, Candidato candidato)
}