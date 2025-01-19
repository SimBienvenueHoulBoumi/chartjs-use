"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Charger le composant BarChart dynamiquement
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Enregistrer les composants nécessaires pour Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StepperChart = ({ data, labels }: { data: number[][]; labels: string[] }) => {
  const [step, setStep] = useState(0); // Suivre l'étape actuelle

  // Définir un tableau de couleurs vives pour chaque groupe
  const colors = [
    "rgba(255, 99, 71, 0.6)",   // Rouge tomate
    "rgba(255, 165, 0, 0.6)",   // Orange vif
    "rgba(34, 193, 195, 0.6)",  // Teal lumineux
    "rgba(253, 72, 104, 0.6)",  // Rose vif
    "rgba(0, 199, 255, 0.6)",   // Bleu cyan électrique
  ];
  
  const borderColors = [
    "rgba(255, 99, 71, 1)",     // Rouge tomate
    "rgba(255, 165, 0, 1)",     // Orange vif
    "rgba(34, 193, 195, 1)",    // Teal lumineux
    "rgba(253, 72, 104, 1)",    // Rose vif
    "rgba(0, 199, 255, 1)",     // Bleu cyan électrique
  ];
  

  const getStepData = (step: number) => {
    return {
      labels: labels.slice(0, step + 1),
      datasets: data.map((groupData, index) => ({
        label: `Groupe ${data.indexOf(groupData) + 1}`,
        data: groupData.slice(0, step + 1),
        backgroundColor: colors[index % colors.length], // Appliquer la couleur du groupe
        borderColor: borderColors[index % borderColors.length], // Couleur de la bordure
        borderWidth: 1,
      })),
    };
  };

  const handleNextStep = () => {
    if (step < labels.length - 1) {
      setStep(step + 1); // Passer à l'étape suivante
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1); // Passer à l'étape précédente
    }
  };

  // Options de personnalisation du graphique
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Progression des ventes",
      },
    },
  };

  return (
    <div className="w-full p-4 rounded shadow-md">
      <h1 className="text-center mb-6">Stepper des Ventes Mensuelles</h1>

      {/* Graphique à Barres */}
      <Bar data={getStepData(step)} options={options} />

      {/* Boutons de contrôle pour passer à l'étape suivante */}
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={handlePrevStep}
          disabled={step === 0}
        >
          Étape précédente
        </button>
        <span>Étape {step + 1} / {labels.length}</span>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
          onClick={handleNextStep}
          disabled={step === labels.length - 1}
        >
          Étape suivante
        </button>
      </div>
    </div>
  );
};

export default StepperChart;
