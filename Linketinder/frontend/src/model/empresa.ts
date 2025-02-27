import { Pessoa } from "./pessoa";

export class Empresa implements Pessoa {
    nome!: string;
    email!: string;
    cpfCnpj!: string;
    estado!: string;
    cep!: string;
    descricao!: string;
    competencias!: string[];
    pais!: string

    constructor(nome: string, email: string, cpfCnpj: string, estado: string, cep: string, descricao: string, competencias: string[], pais: string) {
        this.nome = nome;
        this.email = email;
        this.estado = estado;
        this.cep = cep;
        this.competencias = competencias;
        this.cpfCnpj = cpfCnpj;
        this.descricao = descricao;
        this.pais = pais;
    }
}