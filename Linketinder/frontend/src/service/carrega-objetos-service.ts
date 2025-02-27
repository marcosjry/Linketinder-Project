export async function loadObjetos(candidatosOrEmpresa: any[], caminho: string, nomeArquivo:string) {
    try {
        const response = await fetch(`${caminho}/${nomeArquivo}.json`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        candidatosOrEmpresa = await response.json();
        await setCandidatos(candidatosOrEmpresa, nomeArquivo);
    } catch (error) {
        console.error('Houve um problema com a requisição:', error);
    }
    return candidatosOrEmpresa;
}

async function setCandidatos(candidatosOrEmpresa: any[], nomeArquivo:string) {
    localStorage.setItem(`${nomeArquivo}s`, JSON.stringify(candidatosOrEmpresa));
}

export async function setDataOnListComponent(candidatosOrEmpresa: any[], element: Element | null | undefined) {
    element!.setAttribute('data', JSON.stringify(candidatosOrEmpresa));
}

