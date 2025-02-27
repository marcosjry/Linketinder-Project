import { Pessoa } from "./pessoa";

export class Candidato implements Pessoa{
    nome!: string;
    email!: string;
    cpfCnpj!: string;
    estado!: string;
    cep!: string;
    descricao!: string;
    competencias!: string[]; 
    idade!: number;

    constructor(nome: string, email: string, cpfCnpj: string, estado: string, cep: string, descricao: string, competencias: string[], idade: number) {
        this.nome = nome;
        this.email = email;
        this.estado = estado;
        this.cep = cep;
        this.competencias = competencias;
        this.cpfCnpj = cpfCnpj;
        this.descricao = descricao;
        this.idade = idade;
    }

}