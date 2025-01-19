"use client";

import dynamic from "next/dynamic";

// Charger les composants dynamiquement
const BarChart = dynamic(() => import("../components/BarChart"), {
  ssr: false,
});

const CompareBarChart = dynamic(() => import("../components/CompareBarChart"), {
  ssr: false,
});

const StepperChart = dynamic(() => import("../components/StepperChart"), {
  ssr: false,
});

const PolarAreaChart = dynamic(() => import("../components/PolarAreaChart"), {
  ssr: false,
});

const Home = () => {
  const data = [
    [12, 19, 5, 8, 3, 7, 18, 12, 9, 15, 7, 13], // Données pour "Groupe A"
    [18, 12, 9, 18, 12, 4, 15, 7, 13, 3, 11, 7], // Données pour "Groupe B"
    [5, 8, 3, 18, 12, 9, 15, 7, 13, 7, 5, 44], // Données pour "Groupe C"
  ];

  const labels = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const legendPosition: "top" | "left" | "right" | "bottom" | "chartArea" =
    "top";
  const title = "Comparaison des ventes par groupes";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl mb-6">
        Exemple d&apos;intégration de Chart.js
      </h1>

      <div className="flex flex-wrap justify-center gap-2">
        {/* Premier graphique avec un seul groupe de données */}
        <div className="w-full sm:w-1/2 md:w-4/3 flex justify-center">
          <BarChart
            data={data[0]} // Passer les données pour le groupe A
            labels={labels} // Passer les étiquettes pour chaque mois
            legendPosition={legendPosition} // Position de la légende
            title="Graphique des ventes mensuelles - Groupe A"
          />
        </div>

        {/* Deuxième graphique (CompareBarChart) avec les données des groupes comparés */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <CompareBarChart
            data={data} // Passer les données des groupes
            labels={labels} // Passer les étiquettes pour chaque mois
            legendPosition={legendPosition} // Position de la légende
            title={title} // Titre du graphique
          />
        </div>

        {/* Section pour StepperChart */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <StepperChart data={data} labels={labels} />
        </div>

        {/* Nouveau graphique à aire polaire */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <PolarAreaChart
            data={[12, 19, 5, 8, 3]} // Exemple de données pour le graphique à aire polaire
            labels={["Janvier", "Février", "Mars", "Avril", "Mai"]} // Étiquettes pour l'aire polaire
            legendPosition={legendPosition} // Position de la légende
            title="Répartition des ventes mensuelles"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
