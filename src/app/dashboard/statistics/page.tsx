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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600">Statistiques</h1>
        <Button 
          variant="success" 
          leftIcon={<ArrowDownTrayIcon className="h-5 w-5" />}
          glow
        >
          Exporter les données
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Total des points d'intérêt</span>
              <span className="text-3xl font-bold text-gray-900 mt-2">245</span>
              <span className="text-sm text-green-600 mt-1">+12% depuis le mois dernier</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Total des utilisateurs</span>
              <span className="text-3xl font-bold text-gray-900 mt-2">1,234</span>
              <span className="text-sm text-green-600 mt-1">+5.2% depuis le mois dernier</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Vues totales</span>
              <span className="text-3xl font-bold text-gray-900 mt-2">54.3K</span>
              <span className="text-sm text-green-600 mt-1">+18.7% depuis le mois dernier</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">J'aimes totaux</span>
              <span className="text-3xl font-bold text-gray-900 mt-2">32.1K</span>
              <span className="text-sm text-green-600 mt-1">+14.3% depuis le mois dernier</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vues mensuelles</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              labels={monthlyViews.labels}
              datasets={monthlyViews.datasets}
              height={300}
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
              height={300}
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
            labels={userActivity.labels}
            datasets={userActivity.datasets}
            height={300}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popularité par catégorie</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            labels={popularityByCategory.labels}
            datasets={popularityByCategory.datasets}
            height={300}
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
                <tr className="border-b">
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Catégorie</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Vues</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">J'aimes</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Taux d'engagement</th>
                </tr>
              </thead>
              <tbody>
                {topPOIs.map((poi, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 text-sm font-medium text-gray-900">{poi.name}</td>
                    <td className="py-4 text-sm text-gray-500">{poi.category}</td>
                    <td className="py-4 text-sm text-gray-500">{poi.views.toLocaleString()}</td>
                    <td className="py-4 text-sm text-gray-500">{poi.likes.toLocaleString()}</td>
                    <td className="py-4 text-sm text-gray-500">
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
