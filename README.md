This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. **Tableau de Bord avec Statistiques Dynamiques**
**Objectif** : Concevoir un tableau de bord affichant des graphiques interactifs.  

**Description** :  
- Construit une interface utilisateur qui affiche des statistiques (e.g., nombre de développeurs par compétence, tâches par statut).
- Utilise une bibliothèque de graphiques comme **Chart.js**.
- Intègre des filtres dynamiques pour explorer les données.

**Tech stack** : Next.js, TailwindCSS, Chart.js.

# Intégration de Chart.js avec Next.js

Ce projet est une application démontrant l'utilisation de différents types de graphiques avec **Chart.js** et **Next.js**. Il inclut plusieurs composants graphiques dynamiques (graphiques en barres, graphiques comparatifs, graphiques à étapes, et graphiques à aire polaire), tout en restant **responsive** et **esthétiquement centré**.

---

## Fonctionnalités

- **Composants dynamiques** : Chargement à la demande pour optimiser les performances (via `next/dynamic`).
- **Chart.js** : Utilisation d'une puissante bibliothèque pour les graphiques interactifs.
- **Design responsive** : Les graphiques s'adaptent à toutes les tailles d'écran.
- **Disposition centrée** : Les composants sont alignés pour une expérience utilisateur agréable.

---

## Aperçu du Projet

La page affiche plusieurs graphiques intégrés :

1. **Graphique en barres** : Données pour un seul groupe.
2. **Graphique comparatif** : Comparaison entre plusieurs groupes.
3. **Graphique à étapes** : Visualisation séquentielle des données.
4. **Graphique à aire polaire** : Répartition des données par catégorie.

---

## Structure du Projet

Voici un aperçu des principaux fichiers :

```plaintext
├── components/
│   ├── BarChart.js          // Composant pour le graphique en barres
│   ├── CompareBarChart.js   // Composant pour le graphique comparatif
│   ├── StepperChart.js      // Composant pour le graphique à étapes
│   ├── PolarAreaChart.js    // Composant pour le graphique à aire polaire
├── pages/
│   ├── index.js             // Page principale intégrant les composants
├── public/                  // Actifs publics
├── styles/                  // Styles globaux et TailwindCSS
