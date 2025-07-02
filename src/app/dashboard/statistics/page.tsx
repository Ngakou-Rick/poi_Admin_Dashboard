import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import PieChart from '@/components/charts/PieChart';
import Button from '@/components/ui/Button';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function StatisticsPage() {
  // Ces données seraient normalement chargées depuis une API
  const monthlyViews = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Vues',
        data: [1200, 1900, 3000, 5000, 4200, 3800, 4500, 5200, 6000, 5500, 6500, 7000],
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
      },
    ],
  };

  const categoryDistribution = {
    labels: ['Monument', 'Musée', 'Restaurant', 'Parc', 'Religieux', 'Quartier'],
    data: [35, 25, 15, 10, 8, 7],
  };

  const userActivity = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Nouveaux utilisateurs',
        data: [12, 19, 15, 8, 22, 30, 25],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
      {
        label: 'Points d\'intérêt créés',
        data: [8, 15, 12, 6, 18, 24, 20],
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
      },
    ],
  };

  const popularityByCategory = {
    labels: ['Monument', 'Musée', 'Restaurant', 'Parc', 'Religieux', 'Quartier'],
    datasets: [
      {
        label: 'Vues moyennes',
        data: [5200, 4100, 3500, 2800, 2200, 1800],
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
      },
      {
        label: 'J\'aimes moyens',
        data: [3800, 3200, 2700, 2100, 1600, 1200],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  const topPOIs = [
    { name: 'Tour Eiffel', views: 12453, likes: 8976, category: 'Monument' },
    { name: 'Musée du Louvre', views: 9872, likes: 7654, category: 'Musée' },
    { name: 'Notre-Dame de Paris', views: 8321, likes: 6789, category: 'Religieux' },
    { name: 'Arc de Triomphe', views: 6543, likes: 4321, category: 'Monument' },
    { name: 'Montmartre', views: 7654, likes: 5432, category: 'Quartier' },
  ];

  // Update chart colors to match the new theme
  const primaryColor = '#8b5cf6'; // primary-500
  const primaryColorTransparent = 'rgba(139, 92, 246, 0.5)';
  const secondaryTextColor = '#4a5568'; // secondary-700 (for labels, etc.)
  const gridColor = '#e2e8f0'; // secondary-300 (for chart grid lines)

  const updatedMonthlyViews = {
    ...monthlyViews,
    datasets: monthlyViews.datasets.map(ds => ({
      ...ds,
      backgroundColor: primaryColorTransparent,
      borderColor: primaryColor,
      pointBackgroundColor: primaryColor,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: primaryColor,
    })),
  };

  const updatedUserActivity = {
    ...userActivity,
    datasets: userActivity.datasets.map((ds, index) => ({
      ...ds,
      backgroundColor: index === 0 ? 'rgba(74, 222, 128, 0.5)' : 'rgba(251, 191, 36, 0.5)', // green-400, yellow-400
      borderColor: index === 0 ? '#4ade80' : '#facc15',
      pointBackgroundColor: index === 0 ? '#4ade80' : '#facc15',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: index === 0 ? '#4ade80' : '#facc15',
    })),
  };

  const updatedPopularityByCategory = {
    ...popularityByCategory,
    datasets: popularityByCategory.datasets.map((ds, index) => ({
      ...ds,
      backgroundColor: index === 0 ? primaryColorTransparent : 'rgba(239, 68, 68, 0.4)', // primary-500, red-500/40
      borderColor: index === 0 ? primaryColor : 'rgba(239, 68, 68, 0.7)',
      borderWidth: 1,
      hoverBackgroundColor: index === 0 ? 'rgba(139, 92, 246, 0.7)' : 'rgba(239, 68, 68, 0.6)',
      hoverBorderColor: index === 0 ? primaryColor : 'rgb(239, 68, 68)',
    })),
  };

  // Pie chart colors - can be an array of purples, grays, and other accent colors
  const pieChartColors = [
    '#8b5cf6', // primary-500
    '#a78bfa', // primary-400
    '#c4b5fd', // primary-300
    '#718096', // secondary-600
    '#a0aec0', // secondary-500
    '#cbd5e1', // secondary-400
  ];


  return (
    <div className="space-y-8"> {/* Increased spacing */}
      <div className="flex items-center justify-between">
        {/* h1 styled by globals.css */}
        <h1 className="text-3xl font-bold">Statistiques</h1>
        <Button 
          variant="primary" // Changed from success, as success is now green, primary is purple
          leftIcon={<ArrowDownTrayIcon className="h-5 w-5" />}
          glow
        >
          Exporter les données
        </Button>
      </div>

      {/* Stat Cards - Themed */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total des points d'intérêt", value: "245", change: "+12%", changeColor: "text-green-600" },
          { title: "Total des utilisateurs", value: "1,234", change: "+5.2%", changeColor: "text-green-600" },
          { title: "Vues totales", value: "54.3K", change: "+18.7%", changeColor: "text-green-600" },
          { title: "J'aimes totaux", value: "32.1K", change: "+14.3%", changeColor: "text-green-600" },
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-secondary-600">{stat.title}</span>
                <span className="text-3xl font-bold text-secondary-900 mt-2">{stat.value}</span>
                <span className={`text-sm font-semibold mt-1 ${stat.changeColor}`}>{stat.change} depuis le mois dernier</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts - Apply theme colors */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2"> {/* Increased gap */}
        <Card>
          <CardHeader>
            <CardTitle>Vues mensuelles</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              labels={updatedMonthlyViews.labels}
              datasets={updatedMonthlyViews.datasets}
              height={300}
              options={{
                scales: {
                  y: { ticks: { color: secondaryTextColor }, grid: { color: gridColor } },
                  x: { ticks: { color: secondaryTextColor }, grid: { color: gridColor } }
                },
                plugins: { legend: { labels: { color: secondaryTextColor } } }
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribution par catégorie</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              labels={categoryDistribution.labels}
              data={categoryDistribution.data}
              backgroundColor={pieChartColors} // Pass themed colors
              height={300}
              options={{ plugins: { legend: { labels: { color: secondaryTextColor } } } }}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activité hebdomadaire</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            labels={updatedUserActivity.labels}
            datasets={updatedUserActivity.datasets}
            height={300}
            options={{
              scales: {
                y: { ticks: { color: secondaryTextColor }, grid: { color: gridColor } },
                x: { ticks: { color: secondaryTextColor }, grid: { color: gridColor } }
              },
              plugins: { legend: { labels: { color: secondaryTextColor } } }
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popularité par catégorie</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            labels={updatedPopularityByCategory.labels}
            datasets={updatedPopularityByCategory.datasets}
            height={300}
            options={{
              scales: {
                y: { ticks: { color: secondaryTextColor }, grid: { color: gridColor } },
                x: { ticks: { color: secondaryTextColor }, grid: { color: gridColor } }
              },
              plugins: { legend: { labels: { color: secondaryTextColor } } }
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top 5 des points d'intérêt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-300">
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Nom</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Catégorie</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Vues</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">J'aimes</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Taux d'engagement</th>
                </tr>
              </thead>
              <tbody>
                {topPOIs.map((poi, index) => (
                  <tr key={index} className="border-b border-secondary-200 hover:bg-secondary-100/50 transition-colors">
                    <td className="py-4 px-3 text-sm font-medium text-secondary-900">{poi.name}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{poi.category}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{poi.views.toLocaleString()}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{poi.likes.toLocaleString()}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">
                      {Math.round((poi.likes / poi.views) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
