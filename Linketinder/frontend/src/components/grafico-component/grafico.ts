import { Chart, BarController, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(BarController, CategoryScale, LinearScale, BarElement);

export async function criarGrafico(shadowRoot: ShadowRoot) {
  // Criar o elemento canvas dentro do shadowRoot
  const canvas = document.createElement("canvas");
  canvas.id = "chart";
  shadowRoot.appendChild(canvas);
  
  let candidatos: any[] = JSON.parse(localStorage.getItem('candidatos') || '[]');

  async function contarSkills(candidatos: { competencias: string[] }[]) {
    const contagem: Record<string, number> = {};
  
    candidatos.forEach(candidato => {
      candidato.competencias.forEach(skill => {
        contagem[skill] = (contagem[skill] || 0) + 1;
      });
    });
  
    return contagem;
  }

  const skillCounts = await contarSkills(candidatos);
  const labels = Object.keys(skillCounts);
  const data = Object.values(skillCounts);

  // Obter o contexto 2D do canvas
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Não foi possível obter o contexto 2D do canvas.");
    return;
  }

  // Criar o gráfico
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Quantidade de candidatos",
          data: data,
          backgroundColor: ["#FF5733", "#33FF57", "#3357FF"],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: "#ffffff", // Cor dos rótulos do eixo X (ex: "Java", "Python", "JavaScript")
            font: {
              size: 20, // Tamanho da fonte
              weight: "bold", // Negrito
            },
          },
        },
        y: {
          ticks: {
            color: "#ffffff", // Cor dos números do eixo Y
            font: {
              size: 20,
            },
          },
        },
      },
    },
  });
}

