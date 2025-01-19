"use client";

import dynamic from "next/dynamic";

// Chargement des composants graphiques dynamiques
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
    [5, 8, 3, 18, 12, 9, 15, 7, 13, 7, 5, 44],  // Données pour "Groupe C"
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
      <h1 className="text-center text-3xl font-semibold mb-6">
        Exemple d&apos;intégration de Chart.js
      </h1>

      {/* Conteneur principal avec flex et espace entre chaque graphique */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Graphique en barres - Groupe A */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <BarChart
            data={data[0]} // Données pour le groupe A
            labels={labels} // Étiquettes mensuelles
            legendPosition={legendPosition} // Position de la légende
            title="Graphique des ventes mensuelles - Groupe A"
          />
        </div>

        {/* Graphique comparatif avec plusieurs groupes */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <CompareBarChart
            data={data} // Données des groupes
            labels={labels} // Étiquettes mensuelles
            legendPosition={legendPosition} // Position de la légende
            title={title} // Titre principal
          />
        </div>

        {/* Graphique à étapes */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <StepperChart data={data} labels={labels} />
        </div>

        {/* Graphique à aire polaire */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
          <PolarAreaChart
            data={[12, 19, 5, 8, 3]} // Exemple de données
            labels={["Janvier", "Février", "Mars", "Avril", "Mai"]} // Étiquettes des mois
            legendPosition={legendPosition} // Position de la légende
            title="Répartition des ventes mensuelles"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
