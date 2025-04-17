import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NewPointOfInterestPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/points-of-interest">
          <Button variant="outline" size="sm" leftIcon={<ArrowLeftIcon className="h-4 w-4" />}>
            Retour
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Ajouter un point d'intérêt</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations du point d'intérêt</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="poi-form" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                />
                <p className="text-xs text-gray-500">
                  Le nom doit être unique et descriptif
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Catégorie <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Monument">Monument</option>
                  <option value="Musée">Musée</option>
                  <option value="Religieux">Religieux</option>
                  <option value="Quartier">Quartier</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Parc">Parc</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                ></textarea>
                <p className="text-xs text-gray-500">
                  Minimum 20 caractères, maximum 500 caractères
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
                  Latitude <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.000001"
                  id="latitude"
                  name="latitude"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
                  Longitude <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.000001"
                  id="longitude"
                  name="longitude"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Télécharger des fichiers</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-900">Paramètres</h3>
              <div className="mt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="active"
                      name="active"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      defaultChecked
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="active" className="font-medium text-gray-700">
                      Activer ce point d'intérêt
                    </label>
                    <p className="text-gray-500">
                      Les points d'intérêt actifs sont visibles par les utilisateurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => window.history.back()}>
            Annuler
          </Button>
          <div className="flex gap-2">
            <Button variant="primary" type="submit" form="poi-form">
              Créer le point d'intérêt
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Carte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-md flex items-center justify-center">
            <p className="text-gray-500">
              La carte interactive sera affichée ici pour sélectionner la position du point d'intérêt
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Détection des conflits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            Le système vérifiera automatiquement s'il existe déjà des points d'intérêt à proximité de la position que vous avez indiquée.
          </p>
          <div className="border rounded-md p-4 bg-yellow-50 border-yellow-200 hidden">
            <h3 className="text-sm font-medium text-yellow-800">Points d'intérêt à proximité détectés</h3>
            <ul className="mt-2 text-sm text-yellow-700 list-disc pl-5 space-y-1">
              <li>Tour Eiffel (à 50m)</li>
              <li>Restaurant Le Jules Verne (à 100m)</li>
            </ul>
            <p className="mt-2 text-sm text-yellow-700">
              Veuillez vérifier si votre point d'intérêt est différent de ceux listés ci-dessus.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
