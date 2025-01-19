import { PolarArea } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, RadialLinearScale } from "chart.js";

// Enregistrer les modules nécessaires pour Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, RadialLinearScale);

/**
 * Composant graphique à aire polaire représentant des données.
 * Utilise react-chartjs-2 pour afficher un graphique à aire polaire avec des données fournies via props.
 *
 * Exemple d'utilisation :
 * ```jsx
 * <PolarAreaChart
 *   data={[12, 19, 3, 5, 2]}
 *   labels={["Janvier", "Février", "Mars", "Avril", "Mai"]}
 *   legendPosition="top"
 *   title="Répartition des ventes"
 * />
 * ```
 *
 * @param {Object} props - Les props du composant.
 * @param {Array} props.data - Les données à afficher dans le graphique.
 * @param {Array} props.labels - Les étiquettes associées aux sections de l'aire polaire.
 * @param {"top" | "left" | "right" | "bottom" | "chartArea"} props.legendPosition - Position de la légende.
 * @param {string} props.title - Le titre du graphique.
 *
 * @returns {JSX.Element} Le composant du graphique à aire polaire.
 */
const PolarAreaChart = ({
  data,
  labels,
  legendPosition = "top",
  title,
}: {
  data: number[];
  labels: string[];
  legendPosition?: "top" | "left" | "right" | "bottom" | "chartArea";
  title: string;
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Rouge
          "rgba(54, 162, 235, 0.6)", // Bleu
          "rgba(75, 192, 192, 0.6)", // Vert
          "rgba(153, 102, 255, 0.6)", // Violet
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Rouge
          "rgba(54, 162, 235, 1)", // Bleu
          "rgba(75, 192, 192, 1)", // Vert
          "rgba(153, 102, 255, 1)", // Violet
          "rgba(255, 159, 64, 1)", // Orange
        ],
        borderWidth: 1,
      },
    ],
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
      r: {
        beginAtZero: true,
      },
    },
  };

  return <PolarArea data={chartData} options={options} />;
};

PolarAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  legendPosition: PropTypes.oneOf([
    "top",
    "left",
    "right",
    "bottom",
    "chartArea",
  ]),
  title: PropTypes.string.isRequired,
};

export default PolarAreaChart;
