import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Switch from '@/components/ui/Switch';
import { PlusIcon, PencilIcon, TrashIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PointsOfInterestPage() {
  // Ces données seraient normalement chargées depuis une API
  const pointsOfInterest = [
    {
      id: '1',
      name: 'Tour Eiffel',
      description: 'Monument emblématique de Paris',
      category: 'Monument',
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris',
      },
      isActive: true,
      views: 12453,
      likes: 8976,
      createdAt: '10 Avril 2025',
    },
    {
      id: '2',
      name: 'Musée du Louvre',
      description: 'Le plus grand musée d\'art et d\'antiquités au monde',
      category: 'Musée',
      location: {
        latitude: 48.8606,
        longitude: 2.3376,
        address: 'Rue de Rivoli, 75001 Paris',
      },
      isActive: true,
      views: 9872,
      likes: 7654,
      createdAt: '8 Avril 2025',
    },
    {
      id: '3',
      name: 'Arc de Triomphe',
      description: 'Monument historique situé à Paris',
      category: 'Monument',
      location: {
        latitude: 48.8738,
        longitude: 2.295,
        address: 'Place Charles de Gaulle, 75008 Paris',
      },
      isActive: false,
      views: 6543,
      likes: 4321,
      createdAt: '5 Avril 2025',
    },
    {
      id: '4',
      name: 'Cathédrale Notre-Dame',
      description: 'Cathédrale médiévale emblématique de Paris',
      category: 'Religieux',
      location: {
        latitude: 48.8529,
        longitude: 2.3499,
        address: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris',
      },
      isActive: true,
      views: 8321,
      likes: 6789,
      createdAt: '1 Avril 2025',
    },
    {
      id: '5',
      name: 'Montmartre',
      description: 'Quartier artistique sur une colline au nord de Paris',
      category: 'Quartier',
      location: {
        latitude: 48.8867,
        longitude: 2.3431,
        address: 'Montmartre, 75018 Paris',
      },
      isActive: true,
      views: 7654,
      likes: 5432,
      createdAt: '28 Mars 2025',
    },
  ];

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'Monument', label: 'Monument' },
    { value: 'Musée', label: 'Musée' },
    { value: 'Religieux', label: 'Religieux' },
    { value: 'Quartier', label: 'Quartier' },
  ];

  const handleToggleStatus = (id: string) => {
    // Cette fonction serait normalement implémentée pour appeler une API
    console.log(`Toggle status for POI with ID: ${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">Points d'intérêt</h1>
        <Link href="/dashboard/points-of-interest/new">
          <Button 
            variant="gradient" 
            leftIcon={<PlusIcon className="h-5 w-5" />}
            glow
          >
            Ajouter un point d'intérêt
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Liste des points d'intérêt</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="category" className="text-sm font-medium text-gray-700">
                  Catégorie:
                </label>
                <select
                  id="category"
                  className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="status" className="text-sm font-medium text-gray-700">
                  Statut:
                </label>
                <select
                  id="status"
                  className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option value="all">Tous</option>
                  <option value="active">Actifs</option>
                  <option value="inactive">Inactifs</option>
                </select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Catégorie</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Adresse</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Vues</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">J'aimes</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pointsOfInterest.map((poi) => (
                  <tr key={poi.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 text-sm text-gray-900">
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-500 mr-2" />
                        <span className="font-medium">{poi.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-500">
                      <Badge variant={poi.category === 'Monument' ? 'primary' : 'secondary'}>
                        {poi.category}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-gray-500 max-w-xs truncate">
                      {poi.location.address}
                    </td>
                    <td className="py-4 text-sm text-gray-500">{poi.views.toLocaleString()}</td>
                    <td className="py-4 text-sm text-gray-500">{poi.likes.toLocaleString()}</td>
                    <td className="py-4 text-sm">
                      <Switch
                        checked={poi.isActive}
                        onChange={() => handleToggleStatus(poi.id)}
                        size="sm"
                      />
                    </td>
                    <td className="py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Link href={`/dashboard/points-of-interest/${poi.id}`}>
                          <Button
                            variant="primary"
                            size="sm"
                            leftIcon={<PencilIcon className="h-4 w-4" />}
                            className="bg-blue-500 hover:bg-blue-600"
                          >
                            Éditer
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          size="sm"
                          leftIcon={<TrashIcon className="h-4 w-4" />}
                        >
                          Supprimer
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
              Affichage de {pointsOfInterest.length} points d'intérêt sur {pointsOfInterest.length}
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
