import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

/**
 * Composant graphique à barres représentant des données dynamiques.
 * Utilise react-chartjs-2 pour afficher un graphique à barres avec des données et des paramètres fournis.
 *
 * Exemple d'utilisation :
 * ```jsx
 * <BarChart
 *   data={[12, 19, 3, 5, 2, 3]}
 *   labels={["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]}
 *   legendPosition="top"
 *   title="Graphique des ventes mensuelles"
 * />
 * ```
 *
 * @param {Object} props - Les props du composant.
 * @param {Array} props.data - Les données à afficher dans le graphique.
 * @param {Array} props.labels - Les étiquettes des barres du graphique.
 * @param {"top" | "left" | "right" | "bottom" | "chartArea"} props.legendPosition - Position de la légende.
 * @param {string} props.title - Le titre du graphique.
 * @returns {JSX.Element} Le composant du graphique à barres.
 */
const BarChart = ({
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
        label: "Ventes",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
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
  };

  return <Bar data={chartData} options={options} />;
};

BarChart.propTypes = {
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

export default BarChart;
