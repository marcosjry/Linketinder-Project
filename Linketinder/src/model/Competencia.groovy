package model

enum Competencia {
    PYTHON("python"),
    JAVA("java"),
    ANGULAR("angular"),
    SPRINGFRAMEWORK("springframework"),
    JAVASCRIPT("javascript"),
    GROOVY("groovy"),
    POSTGRESQL("postgresql")

    Competencia(String competencia) {
        this.competencia = competencia
    }
    private String competencia
}