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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Dernière mise à jour: 15 Avril 2025</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Link href={stat.link} key={index}>
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:border-primary-300 border-2 border-transparent">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                    <p className={`text-sm mt-1 font-medium ${
                      stat.status === 'up' ? 'text-green-600' : 
                      stat.status === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`rounded-full p-3 ${index === 0 ? 'bg-primary-50 text-primary-600' : 
                                                      index === 1 ? 'bg-blue-50 text-blue-600' : 
                                                      index === 2 ? 'bg-green-50 text-green-600' : 
                                                      'bg-yellow-50 text-yellow-600'}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Points d'intérêt récents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Catégorie</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Vues</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPOIs.map((poi) => (
                    <tr key={poi.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 text-sm text-gray-900">{poi.name}</td>
                      <td className="py-3 text-sm text-gray-500">{poi.category}</td>
                      <td className="py-3 text-sm">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          poi.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {poi.status === 'active' ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-gray-500">{poi.views.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/points-of-interest" className="text-sm font-medium text-primary-600 hover:text-primary-700">
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
                  <tr className="border-b">
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 text-sm text-gray-900">{user.name}</td>
                      <td className="py-3 text-sm text-gray-500">{user.email}</td>
                      <td className="py-3 text-sm">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status === 'active' ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/users" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                Voir tous les utilisateurs →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
