package marcos.linketinder.domain.util

import marcos.linketinder.domain.model.Competencia
import marcos.linketinder.domain.model.candidato.Candidato
import marcos.linketinder.domain.model.empresa.Empresa


class Menu {

    List<Candidato> candidatos = [
            new Candidato("Alice Silva", "alice@example.com", "12345678900", 28, "SP", "01001-000", "Desenvolvedora fullstack", [Competencia.JAVA, Competencia.ANGULAR, Competencia.GROOVY]),
            new Candidato("Bruno Souza", "bruno@example.com", "98765432100", 32, "RJ", "20010-000", "Engenheiro de software", [Competencia.JAVA, Competencia.JAVASCRIPT, Competencia.POSTGRESQL]),
            new Candidato("Carla Dias", "carla@example.com", "11122233344", 26, "MG", "30110-000", "Analista de sistemas", [Competencia.PYTHON, Competencia.ANGULAR, Competencia.SPRINGFRAMEWORK]),
            new Candidato("Daniela Lima", "daniela@example.com", "55566677788", 30, "RS", "90010-000", "Especialista em DevOps", [Competencia.JAVASCRIPT, Competencia.GROOVY, Competencia.POSTGRESQL]),
            new Candidato("Eduardo Costa", "eduardo@example.com", "99988877766", 35, "BA", "40010-000", "Arquiteto de soluções", [Competencia.PYTHON, Competencia.JAVA])
    ]

    List<Empresa> empresas = [
            new Empresa("Tech Solutions", "contato@techsolutions.com", "12345678000100", "Brasil", "SP", "01002-000", "Empresa de tecnologia", [Competencia.JAVA, Competencia.SPRINGFRAMEWORK]),
            new Empresa("InovaCorp", "rh@inovacorp.com", "98765432000199", "Brasil", "RJ", "20020-000", "Inovação e soluções digitais", [Competencia.PYTHON, Competencia.ANGULAR]),
            new Empresa("DevMasters", "contato@devmasters.com", "11122233000155", "Brasil", "MG", "30120-000", "Especializada em desenvolvimento de software", [Competencia.JAVASCRIPT, Competencia.JAVA, Competencia.SPRINGFRAMEWORK]),
            new Empresa("Softwares XYZ", "rh@softwaresxyz.com", "55566677000122", "Brasil", "RS", "90020-000", "Desenvolvimento de sistemas personalizados", [Competencia.PYTHON, Competencia.SPRINGFRAMEWORK]),
            new Empresa("FutureTech", "contato@futuretech.com", "99988877000133", "Brasil", "BA", "40020-000", "Tecnologia e inovação", [Competencia.PYTHON, Competencia.JAVA, Competencia.ANGULAR])
    ]

    Scanner scanner = new Scanner(System.in)
    def loop = true
    void exibeMenu() {
        do {
            println "\nListar Candidatos -> [1]"
            println "Listar Empresas -> [2]"
            println "Sair -> [0]"
            def input = scanner.next()
            switch (input) {
                case "1":
                    println "Listando candidatos..."
                    listaPorOpcao(candidatos)
                    break
                case "2":
                    println "listando empresas..."
                    listaPorOpcao(empresas)
                    break
                case "0":
                    println "Saindo..."
                    loop = false
                    break
                default:
                    print "Input inválido."
                    break
            }

        } while (loop);
    }


    static void listaPorOpcao(List<?> lista) {
        lista.each {opcao -> println opcao.toString()}
    }
}
