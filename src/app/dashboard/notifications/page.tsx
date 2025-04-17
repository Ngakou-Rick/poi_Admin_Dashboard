import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { BellIcon, PlusIcon, TrashIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NotificationsPage() {
  // Ces données seraient normalement chargées depuis une API
  const notifications = [
    {
      id: '1',
      title: 'Maintenance prévue',
      message: 'Une maintenance du système est prévue le 20 avril 2025 de 2h à 4h du matin. L\'application pourrait être indisponible pendant cette période.',
      type: 'info',
      recipients: 'all',
      sentAt: '15 Avril 2025 - 10:30',
      readCount: 156,
      totalRecipients: 1234,
    },
    {
      id: '2',
      title: 'Nouvelle fonctionnalité disponible',
      message: 'Vous pouvez maintenant créer des parcours personnalisés en regroupant plusieurs points d\'intérêt. Essayez dès maintenant !',
      type: 'success',
      recipients: 'active',
      sentAt: '12 Avril 2025 - 14:15',
      readCount: 532,
      totalRecipients: 980,
    },
    {
      id: '3',
      title: 'Mise à jour des conditions d\'utilisation',
      message: 'Nos conditions d\'utilisation ont été mises à jour. Veuillez les consulter dans la section "Paramètres" de votre profil.',
      type: 'warning',
      recipients: 'all',
      sentAt: '5 Avril 2025 - 09:45',
      readCount: 876,
      totalRecipients: 1234,
    },
    {
      id: '4',
      title: 'Concours photo',
      message: 'Participez à notre concours photo et gagnez des prix en partageant vos meilleures photos de points d\'intérêt. Date limite : 30 avril 2025.',
      type: 'info',
      recipients: 'custom',
      sentAt: '1 Avril 2025 - 12:00',
      readCount: 245,
      totalRecipients: 500,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <Link href="/dashboard/notifications/new">
          <Button leftIcon={<PlusIcon className="h-5 w-5" />}>
            Nouvelle notification
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Envoyer une notification rapide</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Titre
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Titre de la notification"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Contenu de la notification"
              ></textarea>
            </div>
            <div>
              <label htmlFor="recipients" className="block text-sm font-medium text-gray-700">
                Destinataires
              </label>
              <select
                id="recipients"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="all">Tous les utilisateurs</option>
                <option value="active">Utilisateurs actifs</option>
                <option value="inactive">Utilisateurs inactifs</option>
                <option value="custom">Sélection personnalisée</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                id="type"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="info">Information</option>
                <option value="success">Succès</option>
                <option value="warning">Avertissement</option>
                <option value="error">Erreur</option>
              </select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button 
            variant="gradient" 
            leftIcon={<PaperAirplaneIcon className="h-5 w-5" />}
            className="bg-gradient-to-r from-primary-500 via-blue-500 to-primary-600 hover:from-primary-600 hover:via-blue-600 hover:to-primary-700 px-6 py-2.5"
            glow
          >
            Envoyer la notification
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historique des notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Titre</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Type</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Destinataires</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Date d'envoi</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Taux de lecture</th>
                  <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification) => (
                  <tr key={notification.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 text-sm">
                      <div className="flex items-center">
                        <BellIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-900">{notification.title}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">
                      <Badge
                        variant={
                          notification.type === 'info'
                            ? 'info'
                            : notification.type === 'success'
                            ? 'success'
                            : notification.type === 'warning'
                            ? 'warning'
                            : 'danger'
                        }
                      >
                        {notification.type === 'info'
                          ? 'Information'
                          : notification.type === 'success'
                          ? 'Succès'
                          : notification.type === 'warning'
                          ? 'Avertissement'
                          : 'Erreur'}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-gray-500">
                      {notification.recipients === 'all'
                        ? 'Tous les utilisateurs'
                        : notification.recipients === 'active'
                        ? 'Utilisateurs actifs'
                        : notification.recipients === 'inactive'
                        ? 'Utilisateurs inactifs'
                        : 'Sélection personnalisée'}
                    </td>
                    <td className="py-4 text-sm text-gray-500">{notification.sentAt}</td>
                    <td className="py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className="bg-primary-600 h-2.5 rounded-full"
                            style={{ width: `${(notification.readCount / notification.totalRecipients) * 100}%` }}
                          ></div>
                        </div>
                        <span>
                          {Math.round((notification.readCount / notification.totalRecipients) * 100)}%
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {notification.readCount} sur {notification.totalRecipients}
                      </div>
                    </td>
                    <td className="py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          leftIcon={<PaperAirplaneIcon className="h-4 w-4" />}
                        >
                          Renvoyer
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          leftIcon={<TrashIcon className="h-4 w-4 text-red-500" />}
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
        </CardContent>
      </Card>
    </div>
  );
}
