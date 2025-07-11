import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { 
  MapIcon, 
  UserIcon, 
  ChartBarIcon, 
  BellIcon,
  EyeIcon,
  StarIcon,
  CalendarIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import LineChart from '@/components/charts/LineChart';
import BarChart from '@/components/charts/BarChart';
import PieChart from '@/components/charts/PieChart';
import MetricCard from '@/components/ui/MetricCard';

export default function DashboardPage() {
  // Données pour les métriques principales
  const stats = [
    {
      title: 'Points d&apos;intérêt',
      value: '245',
      change: '+12%',
      changeValue: '+26',
      status: 'up' as const,
      icon: <MapIcon className="h-6 w-6" />,
      link: '/dashboard/points-of-interest',
      color: 'primary' as const,
      description: 'Total des POIs actifs'
    },
    {
      title: 'Utilisateurs actifs',
      value: '1,234',
      change: '+5.2%',
      changeValue: '+62',
      status: 'up' as const,
      icon: <UserIcon className="h-6 w-6" />,
      link: '/dashboard/users',
      color: 'blue' as const,
      description: 'Utilisateurs ce mois'
    },
    {
      title: 'Vues totales',
      value: '54.3K',
      change: '+18.7%',
      changeValue: '+8.5K',
      status: 'up' as const,
      icon: <EyeIcon className="h-6 w-6" />,
      link: '/dashboard/statistics',
      color: 'green' as const,
      description: 'Vues ce mois'
    },
    {
      title: 'Note moyenne',
      value: '4.8',
      change: '+0.2',
      changeValue: '+0.2',
      status: 'up' as const,
      icon: <StarIcon className="h-6 w-6" />,
      link: '/dashboard/statistics',
      color: 'yellow' as const,
      description: 'Note globale'
    },
  ];

  // Données pour le graphique des vues
  const viewsData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Vues',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Utilisateurs',
        data: [800, 1200, 1000, 1600, 1400, 1800],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      }
    ]
  };

  // Données pour le graphique des catégories
  const categoryData = {
    labels: ['Monuments', 'Musées', 'Restaurants', 'Parcs', 'Autres'],
    datasets: [{
      label: 'Points d\'intérêt',
      data: [45, 32, 28, 25, 20],
      backgroundColor: [
        '#8b5cf6',
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444'
      ],
    }]
  };

  // Données pour le graphique des performances
  const performanceData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [{
      label: 'Vues',
      data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
      backgroundColor: 'rgba(139, 92, 246, 0.8)',
      borderColor: '#8b5cf6',
      borderWidth: 2,
    }]
  };

  const recentPOIs = [
    {
      id: '1',
      name: 'Tour Eiffel',
      category: 'Monument',
      status: 'active',
      views: 1245,
      rating: 4.9,
      createdAt: '2025-04-10',
      image: '🏛️'
    },
    {
      id: '2',
      name: 'Musée du Louvre',
      category: 'Musée',
      status: 'active',
      views: 987,
      rating: 4.7,
      createdAt: '2025-04-08',
      image: '🏛️'
    },
    {
      id: '3',
      name: 'Arc de Triomphe',
      category: 'Monument',
      status: 'inactive',
      views: 654,
      rating: 4.5,
      createdAt: '2025-04-05',
      image: '🏛️'
    },
    {
      id: '4',
      name: 'Cathédrale Notre-Dame',
      category: 'Religieux',
      status: 'active',
      views: 832,
      rating: 4.8,
      createdAt: '2025-04-01',
      image: '⛪'
    },
  ];

  const recentUsers = [
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      status: 'active',
      joinedAt: '2025-04-12',
      avatar: '👤',
      visits: 15
    },
    {
      id: '2',
      name: 'Marie Martin',
      email: 'marie.martin@example.com',
      status: 'active',
      joinedAt: '2025-04-10',
      avatar: '👤',
      visits: 8
    },
    {
      id: '3',
      name: 'Pierre Dubois',
      email: 'pierre.dubois@example.com',
      status: 'inactive',
      joinedAt: '2025-04-08',
      avatar: '👤',
      visits: 3
    },
  ];

  const quickActions = [
    {
      title: 'Ajouter un POI',
      description: 'Créer un nouveau point d&apos;intérêt',
      icon: <MapIcon className="h-8 w-8" />,
      link: '/dashboard/points-of-interest/new',
      color: 'primary'
    },
    {
      title: 'Gérer les utilisateurs',
      description: 'Voir et modifier les utilisateurs',
      icon: <UserIcon className="h-8 w-8" />,
      link: '/dashboard/users',
      color: 'blue'
    },
    {
      title: 'Voir les statistiques',
      description: 'Analyser les performances',
      icon: <ChartBarIcon className="h-8 w-8" />,
      link: '/dashboard/statistics',
      color: 'green'
    },
    {
      title: 'Notifications',
      description: 'Gérer les alertes',
      icon: <BellIcon className="h-8 w-8" />,
      link: '/dashboard/notifications',
      color: 'yellow'
    },
  ];



  return (
    <div className="space-y-8">
      {/* Header avec métriques rapides */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-600 mt-1">Bienvenue dans votre espace d'administration</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarIcon className="h-4 w-4" />
            <span>Dernière mise à jour: 15 Avril 2025</span>
          </div>
        </div>
      </div>

      {/* Métriques principales */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Link href={stat.link} key={index}>
            <MetricCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeValue={stat.changeValue}
              status={stat.status}
              icon={stat.icon}
              color={stat.color}
              description={stat.description}
            />
          </Link>
        ))}
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Graphique des vues */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartBarIcon className="h-5 w-5 text-primary-500" />
              Évolution des vues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart 
              labels={viewsData.labels}
              datasets={viewsData.datasets}
              height={300}
            />
          </CardContent>
        </Card>

        {/* Graphique des catégories */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GlobeAltIcon className="h-5 w-5 text-primary-500" />
              Répartition par catégorie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart 
              labels={categoryData.labels}
              datasets={categoryData.datasets}
              height={300}
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link href={action.link} key={index} className="group">
                <div className="p-4 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 hover:border-primary-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                      {action.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{action.title}</h4>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Graphique des performances hebdomadaires */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChartBarIcon className="h-5 w-5 text-primary-500" />
            Performances de la semaine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart 
            labels={performanceData.labels}
            datasets={performanceData.datasets}
            height={250}
          />
        </CardContent>
      </Card>

      {/* Tableaux récents */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Points d'intérêt récents */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-primary-500" />
              Points d&apos;intérêt récents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPOIs.map((poi) => (
                <div key={poi.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">{poi.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">{poi.name}</h4>
                      <Badge variant={poi.status === 'active' ? 'success' : 'danger'} size="sm">
                        {poi.status === 'active' ? 'Actif' : 'Inactif'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{poi.category}</span>
                      <span className="flex items-center gap-1">
                        <EyeIcon className="h-4 w-4" />
                        {poi.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4" />
                        {poi.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link href="/dashboard/points-of-interest" className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors">
                Voir tous les points d&apos;intérêt →
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Utilisateurs récents */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary-500" />
              Utilisateurs récents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">{user.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">{user.name}</h4>
                      <Badge variant={user.status === 'active' ? 'success' : 'danger'} size="sm">
                        {user.status === 'active' ? 'Actif' : 'Inactif'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{user.email}</span>
                      <span className="flex items-center gap-1">
                        <HeartIcon className="h-4 w-4" />
                        {user.visits} visites
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link href="/dashboard/users" className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors">
                Voir tous les utilisateurs →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
