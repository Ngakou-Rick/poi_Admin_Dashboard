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
    <div className="space-y-8"> {/* Increased spacing */}
      <div className="flex items-center justify-between">
        {/* h1 styled by globals.css */}
        <h1 className="text-3xl font-bold">Points d'intérêt</h1>
        <Link href="/dashboard/points-of-interest/new">
          <Button 
            variant="primary" // Changed from gradient
            leftIcon={<PlusIcon className="h-5 w-5" />}
            glow
          >
            Ajouter un point d'intérêt
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <CardTitle>Liste des points d'intérêt</CardTitle>
            {/* Filters moved to a more prominent position or could be a separate filter component */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label htmlFor="category" className="text-sm font-medium text-secondary-700 whitespace-nowrap">
                  Catégorie:
                </label>
                <select
                  id="category"
                  className="flex-grow rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label htmlFor="status" className="text-sm font-medium text-secondary-700 whitespace-nowrap">
                  Statut:
                </label>
                <select
                  id="status"
                  className="flex-grow rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2"
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
                <tr className="border-b border-secondary-300">
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Nom</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Catégorie</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Adresse</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Vues</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">J'aimes</th>
                  <th className="py-3.5 px-3 text-center text-xs font-semibold uppercase text-secondary-600">Statut</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pointsOfInterest.map((poi) => (
                  <tr key={poi.id} className="border-b border-secondary-200 hover:bg-secondary-100/50 transition-colors">
                    <td className="py-4 px-3 text-sm text-secondary-900">
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-500 mr-2.5 flex-shrink-0" />
                        <span className="font-medium">{poi.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600">
                      {/* Using Badge component with appropriate variants */}
                      <Badge
                        variant={poi.category === 'Monument' ? 'primary' :
                                 poi.category === 'Musée' ? 'info' :
                                 poi.category === 'Religieux' ? 'warning' :
                                 'default'}
                        size="md"
                      >
                        {poi.category}
                      </Badge>
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600 max-w-xs truncate">
                      {poi.location.address}
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{poi.views.toLocaleString()}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{poi.likes.toLocaleString()}</td>
                    <td className="py-4 px-3 text-sm text-center">
                      <Switch
                        checked={poi.isActive}
                        onChange={() => handleToggleStatus(poi.id)}
                        size="sm" // Using the updated Switch
                      />
                    </td>
                    <td className="py-4 px-3 text-sm">
                      <div className="flex items-center gap-2.5">
                        <Link href={`/dashboard/points-of-interest/${poi.id}`}>
                          <Button
                            variant="outline" // Changed to outline for a cleaner look
                            size="sm"
                            leftIcon={<PencilIcon className="h-4 w-4" />}
                            // Removed specific blue class, rely on variant
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
          {/* Pagination - styled with theme colors */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-secondary-600">
              Affichage de {pointsOfInterest.length} points d'intérêt sur {pointsOfInterest.length}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm"> {/* Assuming there's a next page for demo */}
                Suivant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
