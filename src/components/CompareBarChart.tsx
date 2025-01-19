"use client";

import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale
);

/**
 * Composant pour afficher un graphique en barres ou lignes comparant plusieurs groupes de données.
 * Permet à l'utilisateur de basculer entre les types de graphiques.
 * 
 * @param {Object} props - Propriétés du composant.
 * @param {number[][]} props.data - Liste des ensembles de données pour chaque groupe.
 * @param {string[]} props.labels - Labels des catégories (par exemple, les mois).
 * @param {"top" | "left" | "right" | "bottom" | "chartArea"} props.legendPosition - Position de la légende.
 * @param {string} props.title - Titre du graphique.
 * 
 * @returns {JSX.Element} - Un graphique avec la possibilité de basculer entre le type barre et ligne.
 */
const CompareBarChart = ({
  data,
  labels,
  legendPosition,
  title,
}: {
  data: number[][];
  labels: string[];
  legendPosition: "top" | "left" | "right" | "bottom" | "chartArea";
  title: string;
}) => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  const barColors = ["#FF5733", "#33FF57", "#3357FF"];
  const lineColors = ["#FF4500", "#32CD32", "#1E90FF"];

  const datasets = data.map((dataset, index) => ({
    label: `Groupe ${String.fromCharCode(65 + index)}`,
    data: dataset,
    backgroundColor: chartType === "bar" ? barColors[index] : "transparent",
    borderColor: chartType === "line" ? lineColors[index] : barColors[index],
    borderWidth: 2,
    tension: chartType === "line" ? 0.4 : 0,
    pointBackgroundColor: lineColors[index],
  }));

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: legendPosition,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setChartType(chartType === "bar" ? "line" : "bar")}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Switch to {chartType === "bar" ? "Line Chart" : "Bar Chart"}
      </button>
      
      {chartType === "bar" ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default CompareBarChart;
