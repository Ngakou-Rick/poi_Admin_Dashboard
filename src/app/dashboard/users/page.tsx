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
    <div className="space-y-8"> {/* Increased spacing */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* h1 styled by globals.css */}
        <h1 className="text-3xl font-bold">Utilisateurs</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Stats Badges - using updated Badge component */}
          <div className="flex items-center gap-2">
            <Badge size="lg" variant="default">Total: {users.length}</Badge>
            <Badge size="lg" variant="success">Actifs: {users.filter(user => user.isActive).length}</Badge>
            <Badge size="lg" variant="danger">Inactifs: {users.filter(user => !user.isActive).length}</Badge>
          </div>
          <Button 
            variant="primary" // Changed from gradient
            leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            glow
          >
            Envoyer un email
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <CardTitle>Liste des utilisateurs</CardTitle>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              {/* Search Input - Modernized */}
              <div className="relative flex-grow md:flex-grow-0">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-secondary-300 bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              {/* Select Filters - Modernized */}
              <select
                className="rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2.5"
              >
                <option value="all">Tous les rôles</option>
                <option value="admin">Admin</option>
                <option value="user">Utilisateur</option>
              </select>
              <select
                className="rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2.5"
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
                <tr className="border-b border-secondary-300">
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Utilisateur</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Email</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Rôle</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Dernière connexion</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">POI Créés</th>
                  <th className="py-3.5 px-3 text-center text-xs font-semibold uppercase text-secondary-600">Statut</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-secondary-200 hover:bg-secondary-100/50 transition-colors">
                    <td className="py-4 px-3 text-sm text-secondary-900">
                      <div className="flex items-center">
                        <div className={`h-10 w-10 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 font-semibold`}>
                          {user.name.charAt(0)} {/* Avatar with initial */}
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-secondary-500">Inscrit le {user.createdAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{user.email}</td>
                    <td className="py-4 px-3 text-sm">
                      <Badge variant={user.role === 'admin' ? 'primary' : 'info'} size="md">
                        {user.role === 'admin' ? 'Admin' : 'Utilisateur'}
                      </Badge>
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{user.lastLogin}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{user.poiCreated}</td>
                    <td className="py-4 px-3 text-sm text-center">
                      <Switch
                        checked={user.isActive}
                        onChange={() => handleToggleStatus(user.id)}
                        size="sm"
                      />
                    </td>
                    <td className="py-4 px-3 text-sm">
                      <div className="flex items-center gap-2.5">
                        <Button
                          variant="outline"
                          size="sm"
                          leftIcon={<PencilIcon className="h-4 w-4" />}
                        >
                          Éditer
                        </Button>
                        <Button
                          variant="ghost" // Changed from gradient
                          size="sm"
                          leftIcon={<ChatBubbleLeftRightIcon className="h-4 w-4" />}
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
          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-secondary-600">
              Affichage de {users.length} utilisateurs sur {users.length}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm"> {/* Assuming next page */}
                Suivant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
