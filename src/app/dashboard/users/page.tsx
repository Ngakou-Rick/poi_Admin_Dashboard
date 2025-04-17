import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Switch from '@/components/ui/Switch';
import { UserIcon, PencilIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UsersPage() {
  // Ces données seraient normalement chargées depuis une API
  const users = [
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      role: 'user',
      isActive: true,
      createdAt: '12 Avril 2025',
      lastLogin: '15 Avril 2025',
      poiCreated: 12,
    },
    {
      id: '2',
      name: 'Marie Martin',
      email: 'marie.martin@example.com',
      role: 'user',
      isActive: true,
      createdAt: '10 Avril 2025',
      lastLogin: '14 Avril 2025',
      poiCreated: 8,
    },
    {
      id: '3',
      name: 'Pierre Dubois',
      email: 'pierre.dubois@example.com',
      role: 'user',
      isActive: false,
      createdAt: '8 Avril 2025',
      lastLogin: '9 Avril 2025',
      poiCreated: 3,
    },
    {
      id: '4',
      name: 'Sophie Leroy',
      email: 'sophie.leroy@example.com',
      role: 'admin',
      isActive: true,
      createdAt: '5 Avril 2025',
      lastLogin: '15 Avril 2025',
      poiCreated: 25,
    },
    {
      id: '5',
      name: 'Thomas Bernard',
      email: 'thomas.bernard@example.com',
      role: 'user',
      isActive: true,
      createdAt: '1 Avril 2025',
      lastLogin: '10 Avril 2025',
      poiCreated: 6,
    },
  ];

  const handleToggleStatus = (id: string) => {
    // Cette fonction serait normalement implémentée pour appeler une API
    console.log(`Toggle status for user with ID: ${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">Utilisateurs</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Total: {users.length}
            </span>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
              Actifs: {users.filter(user => user.isActive).length}
            </span>
            <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Inactifs: {users.filter(user => !user.isActive).length}
            </span>
          </div>
          <Button 
            variant="primary" 
            leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            className="bg-gradient-to-r from-blue-500 to-primary-500 hover:from-blue-600 hover:to-primary-600"
            glow
          >
            Envoyer un email
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Liste des utilisateurs</CardTitle>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un utilisateur..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="all">Tous les rôles</option>
                <option value="admin">Admin</option>
                <option value="user">Utilisateur</option>
              </select>
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actifs</option>
                <option value="inactive">Inactifs</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Utilisateur</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Email</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Rôle</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Dernière connexion</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Points d'intérêt</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 text-sm text-gray-900">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-500" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-gray-500">Inscrit le {user.createdAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{user.email}</td>
                    <td className="py-4 text-sm">
                      <Badge variant={user.role === 'admin' ? 'primary' : 'secondary'}>
                        {user.role === 'admin' ? 'Admin' : 'Utilisateur'}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{user.lastLogin}</td>
                    <td className="py-4 text-sm text-gray-500">{user.poiCreated}</td>
                    <td className="py-4 text-sm">
                      <Switch
                        checked={user.isActive}
                        onChange={() => handleToggleStatus(user.id)}
                        size="sm"
                      />
                    </td>
                    <td className="py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="primary"
                          size="sm"
                          leftIcon={<PencilIcon className="h-4 w-4" />}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          Éditer
                        </Button>
                        <Button
                          variant="gradient"
                          size="sm"
                          leftIcon={<ChatBubbleLeftRightIcon className="h-4 w-4" />}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        >
                          Message
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage de {users.length} utilisateurs sur {users.length}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm" disabled>
                Suivant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
