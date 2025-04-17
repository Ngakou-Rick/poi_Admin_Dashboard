import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Switch from '@/components/ui/Switch';
import LineChart from '@/components/charts/LineChart';
import { 
  ArrowLeftIcon, 
  MapPinIcon, 
  EyeIcon, 
  HeartIcon, 
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function PointOfInterestDetailPage({ params }: PageProps) {
  // Ces données seraient normalement chargées depuis une API en fonction de l'ID
  const poi = {
    id: params.id,
    name: 'Tour Eiffel',
    description: 'Monument emblématique de Paris, la tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur située à Paris, à l\'extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement.',
    category: 'Monument',
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris',
    },
    images: [
      '/placeholder-image.jpg',
      '/placeholder-image.jpg',
      '/placeholder-image.jpg',
    ],
    isActive: true,
    createdAt: '10 Avril 2025',
    createdBy: 'Jean Dupont',
    updatedAt: '15 Avril 2025',
    popularity: {
      views: {
        daily: 450,
        weekly: 2800,
        monthly: 12453,
        total: 54321,
      },
      likes: {
        daily: 120,
        weekly: 780,
        monthly: 3200,
        total: 8976,
      },
      engagement: 16.5, // Pourcentage
      trend: 'up',
      rank: 1,
    },
  };

  // Données pour les graphiques
  const viewsData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Vues',
        data: [320, 380, 420, 450, 520, 580, 450],
        borderColor: 'rgba(14, 165, 233, 1)',
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
      },
    ],
  };

  const likesData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'J\'aimes',
        data: [80, 95, 110, 120, 140, 150, 120],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/points-of-interest">
          <Button variant="outline" size="sm" leftIcon={<ArrowLeftIcon className="h-4 w-4" />}>
            Retour
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{poi.name}</h1>
        <Badge variant={poi.isActive ? 'success' : 'danger'}>
          {poi.isActive ? 'Actif' : 'Inactif'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Informations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Description</h3>
                  <p className="mt-1 text-sm text-gray-900">{poi.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Catégorie</h3>
                    <p className="mt-1 text-sm text-gray-900">{poi.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Créé par</h3>
                    <p className="mt-1 text-sm text-gray-900">{poi.createdBy}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date de création</h3>
                    <p className="mt-1 text-sm text-gray-900">{poi.createdAt}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Dernière mise à jour</h3>
                    <p className="mt-1 text-sm text-gray-900">{poi.updatedAt}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Adresse</h3>
                  <p className="mt-1 text-sm text-gray-900">{poi.location.address}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Latitude</h3>
                    <p className="mt-1 text-sm text-gray-900">{poi.location.latitude}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Longitude</h3>
                    <p className="mt-1 text-sm text-gray-900">{poi.location.longitude}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-500">Statut:</span>
                <Switch
                  checked={poi.isActive}
                  onChange={() => console.log(`Toggle status for POI with ID: ${poi.id}`)}
                  label={poi.isActive ? 'Actif' : 'Inactif'}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  leftIcon={<PencilIcon className="h-4 w-4" />}
                >
                  Éditer
                </Button>
                <Button
                  variant="danger"
                  leftIcon={<TrashIcon className="h-4 w-4" />}
                >
                  Supprimer
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Popularité</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="flex items-center">
                      <EyeIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-sm font-medium text-blue-700">Vues</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-blue-900">{poi.popularity.views.total.toLocaleString()}</span>
                      <div className="mt-1 text-xs">
                        <span className="font-medium text-blue-700">Aujourd'hui: </span>
                        <span className="text-blue-900">{poi.popularity.views.daily}</span>
                      </div>
                      <div className="mt-1 text-xs">
                        <span className="font-medium text-blue-700">Cette semaine: </span>
                        <span className="text-blue-900">{poi.popularity.views.weekly}</span>
                      </div>
                      <div className="mt-1 text-xs">
                        <span className="font-medium text-blue-700">Ce mois: </span>
                        <span className="text-blue-900">{poi.popularity.views.monthly}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <div className="flex items-center">
                      <HeartIcon className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-sm font-medium text-red-700">J'aimes</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-red-900">{poi.popularity.likes.total.toLocaleString()}</span>
                      <div className="mt-1 text-xs">
                        <span className="font-medium text-red-700">Aujourd'hui: </span>
                        <span className="text-red-900">{poi.popularity.likes.daily}</span>
                      </div>
                      <div className="mt-1 text-xs">
                        <span className="font-medium text-red-700">Cette semaine: </span>
                        <span className="text-red-900">{poi.popularity.likes.weekly}</span>
                      </div>
                      <div className="mt-1 text-xs">
                        <span className="font-medium text-red-700">Ce mois: </span>
                        <span className="text-red-900">{poi.popularity.likes.monthly}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {poi.popularity.trend === 'up' ? (
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <ArrowTrendingDownIcon className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="text-sm font-medium text-gray-700">Tendance</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      poi.popularity.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {poi.popularity.trend === 'up' ? '+12.5%' : '-5.3%'}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Taux d'engagement</span>
                    <span className="text-sm font-medium text-gray-900">{poi.popularity.engagement}%</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Classement</span>
                    <span className="text-sm font-medium text-gray-900">#{poi.popularity.rank}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vues (7 derniers jours)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              labels={viewsData.labels}
              datasets={viewsData.datasets}
              height={250}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>J'aimes (7 derniers jours)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              labels={likesData.labels}
              datasets={likesData.datasets}
              height={250}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {poi.images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-gray-500">Image {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Localisation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="h-8 w-8 text-primary-500 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">
                Latitude: {poi.location.latitude}, Longitude: {poi.location.longitude}
              </p>
              <p className="text-sm text-gray-500">
                La carte interactive sera affichée ici
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
