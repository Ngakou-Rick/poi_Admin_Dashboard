import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { MapIcon, UserIcon, ChartBarIcon, BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function DashboardPage() {
  // Ces données seraient normalement chargées depuis une API
  const stats = [
    {
      title: 'Points d\'intérêt',
      value: '245',
      change: '+12%',
      status: 'up',
      icon: <MapIcon className="h-8 w-8 text-primary-600" />,
      link: '/dashboard/points-of-interest',
    },
    {
      title: 'Utilisateurs',
      value: '1,234',
      change: '+5.2%',
      status: 'up',
      icon: <UserIcon className="h-8 w-8 text-blue-600" />,
      link: '/dashboard/users',
    },
    {
      title: 'Vues totales',
      value: '54.3K',
      change: '+18.7%',
      status: 'up',
      icon: <ChartBarIcon className="h-8 w-8 text-green-600" />,
      link: '/dashboard/statistics',
    },
    {
      title: 'Notifications',
      value: '12',
      change: 'Nouvelles',
      status: 'neutral',
      icon: <BellIcon className="h-8 w-8 text-yellow-600" />,
      link: '/dashboard/notifications',
    },
  ];

  const recentPOIs = [
    {
      id: '1',
      name: 'Tour Eiffel',
      category: 'Monument',
      status: 'active',
      views: 1245,
      createdAt: '2025-04-10',
    },
    {
      id: '2',
      name: 'Musée du Louvre',
      category: 'Musée',
      status: 'active',
      views: 987,
      createdAt: '2025-04-08',
    },
    {
      id: '3',
      name: 'Arc de Triomphe',
      category: 'Monument',
      status: 'inactive',
      views: 654,
      createdAt: '2025-04-05',
    },
    {
      id: '4',
      name: 'Cathédrale Notre-Dame',
      category: 'Religieux',
      status: 'active',
      views: 832,
      createdAt: '2025-04-01',
    },
  ];

  const recentUsers = [
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      status: 'active',
      joinedAt: '2025-04-12',
    },
    {
      id: '2',
      name: 'Marie Martin',
      email: 'marie.martin@example.com',
      status: 'active',
      joinedAt: '2025-04-10',
    },
    {
      id: '3',
      name: 'Pierre Dubois',
      email: 'pierre.dubois@example.com',
      status: 'inactive',
      joinedAt: '2025-04-08',
    },
  ];

  return (
    <div className="space-y-8"> {/* Increased spacing */}
      <div className="flex items-center justify-between">
        {/* h1 already styled by globals.css with primary color */}
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-secondary-600">Dernière mise à jour: 15 Avril 2025</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Link href={stat.link} key={index} className="group">
            <Card className="transition-all duration-300 group-hover:shadow-primary-500/20 group-hover:-translate-y-1 group-hover:border-primary-500 border-2 border-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-secondary-600">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-secondary-900 mt-1">{stat.value}</h3> {/* Larger value */}
                    <p className={`text-sm mt-1.5 font-semibold ${ // Bolder change text
                      stat.status === 'up' ? 'text-green-600' : 
                      stat.status === 'down' ? 'text-red-600' : 'text-secondary-700'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  {/* Icon background based on theme, primary for the first one */}
                  <div className={`rounded-full p-3.5 ${ // Larger padding for icon
                                      index === 0 ? 'bg-primary-500/10 text-primary-500' : // Purple for POIs
                                      index === 1 ? 'bg-blue-500/10 text-blue-500' : // Kept blue for users for variety
                                      index === 2 ? 'bg-green-500/10 text-green-500' : // Kept green for views
                                      'bg-yellow-500/10 text-yellow-500' // Kept yellow for notifications
                                    }`}>
                    {React.cloneElement(stat.icon, { className: "h-7 w-7" })} {/* Slightly smaller icon for balance */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent POIs and Users Tables */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2"> {/* Increased gap */}
        <Card>
          <CardHeader>
            {/* CardTitle already styled by Card.tsx component */}
            <CardTitle>Points d'intérêt récents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-secondary-300">
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Nom</th>
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Catégorie</th>
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Statut</th>
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Vues</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPOIs.map((poi) => (
                    <tr key={poi.id} className="border-b border-secondary-200 hover:bg-secondary-100/50 transition-colors">
                      <td className="py-3 px-3 text-sm text-secondary-900 font-medium">{poi.name}</td>
                      <td className="py-3 px-3 text-sm text-secondary-600">{poi.category}</td>
                      <td className="py-3 px-3 text-sm">
                        {/* Using the updated Badge component */}
                        <Badge variant={poi.status === 'active' ? 'success' : 'danger'} size="sm">
                          {poi.status === 'active' ? 'Actif' : 'Inactif'}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 text-sm text-secondary-600">{poi.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5"> {/* Increased margin */}
              <Link href="/dashboard/points-of-interest" className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors">
                Voir tous les points d'intérêt →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs récents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-secondary-300">
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Nom</th>
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Email</th>
                    <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-secondary-200 hover:bg-secondary-100/50 transition-colors">
                      <td className="py-3 px-3 text-sm text-secondary-900 font-medium">{user.name}</td>
                      <td className="py-3 px-3 text-sm text-secondary-600">{user.email}</td>
                      <td className="py-3 px-3 text-sm">
                        <Badge variant={user.status === 'active' ? 'success' : 'danger'} size="sm">
                          {user.status === 'active' ? 'Actif' : 'Inactif'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5"> {/* Increased margin */}
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
