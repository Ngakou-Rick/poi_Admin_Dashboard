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
    <div className="space-y-8"> {/* Increased spacing */}
      <div className="flex items-center justify-between">
        {/* h1 styled by globals.css */}
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Link href="/dashboard/notifications/new">
          <Button variant="primary" leftIcon={<PlusIcon className="h-5 w-5" />}> {/* Themed button */}
            Nouvelle notification
          </Button>
        </Link>
      </div>

      {/* Quick Notification Card - Modernized Form */}
      <Card>
        <CardHeader>
          <CardTitle>Envoyer une notification rapide</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5"> {/* Increased spacing in form */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">
                Titre
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2.5"
                placeholder="Titre de la notification"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4} // Slightly more rows
                className="mt-1 block w-full rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2.5"
                placeholder="Contenu de la notification"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="recipients" className="block text-sm font-medium text-secondary-700 mb-1">
                  Destinataires
                </label>
                <select
                  id="recipients"
                  className="mt-1 block w-full rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2.5"
                >
                  <option value="all">Tous les utilisateurs</option>
                  <option value="active">Utilisateurs actifs</option>
                  <option value="inactive">Utilisateurs inactifs</option>
                  <option value="custom">Sélection personnalisée</option>
                </select>
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-secondary-700 mb-1">
                  Type
                </label>
                <select
                  id="type"
                  className="mt-1 block w-full rounded-lg border-secondary-300 bg-secondary-100 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm p-2.5"
                >
                  <option value="info">Information (Bleu)</option>
                  <option value="success">Succès (Vert)</option>
                  <option value="warning">Avertissement (Jaune)</option>
                  <option value="danger">Erreur (Rouge)</option> {/* Changed from error to danger to match Badge */}
                </select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end pt-5"> {/* Added pt for spacing */}
          <Button 
            variant="primary" // Changed from gradient
            leftIcon={<PaperAirplaneIcon className="h-5 w-5" />}
            glow
            size="lg" // Larger button
          >
            Envoyer la notification
          </Button>
        </CardFooter>
      </Card>

      {/* Notification History Table - Modernized */}
      <Card>
        <CardHeader>
          <CardTitle>Historique des notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-300">
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Titre</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Type</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Destinataires</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Date d'envoi</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Taux de lecture</th>
                  <th className="py-3.5 px-3 text-left text-xs font-semibold uppercase text-secondary-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((notification) => (
                  <tr key={notification.id} className="border-b border-secondary-200 hover:bg-secondary-100/50 transition-colors">
                    <td className="py-4 px-3 text-sm">
                      <div className="flex items-center">
                        <BellIcon className="h-5 w-5 text-primary-500 mr-2.5 flex-shrink-0" />
                        <span className="font-medium text-secondary-900">{notification.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-sm">
                      <Badge
                        variant={notification.type as ('info' | 'success' | 'warning' | 'danger')} // Cast to Badge variant type
                        size="md"
                      >
                        {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600">
                      {notification.recipients === 'all'
                        ? 'Tous les utilisateurs'
                        : notification.recipients === 'active'
                        ? 'Utilisateurs actifs'
                        : notification.recipients === 'inactive'
                        ? 'Utilisateurs inactifs'
                        : 'Sélection personnalisée'}
                    </td>
                    <td className="py-4 px-3 text-sm text-secondary-600">{notification.sentAt}</td>
                    <td className="py-4 px-3 text-sm text-secondary-600">
                      <div className="flex items-center">
                        <div className="w-full bg-secondary-200 rounded-full h-2.5 mr-2">
                          <div
                            className="bg-primary-500 h-2.5 rounded-full" // Themed progress bar
                            style={{ width: `${(notification.readCount / notification.totalRecipients) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">
                          {Math.round((notification.readCount / notification.totalRecipients) * 100)}%
                        </span>
                      </div>
                      <div className="text-xs text-secondary-500 mt-1">
                        {notification.readCount} sur {notification.totalRecipients}
                      </div>
                    </td>
                    <td className="py-4 px-3 text-sm">
                      <div className="flex items-center gap-2.5">
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
                          className="text-red-600 hover:bg-red-500/10" // Danger action
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
        </CardContent>
      </Card>
    </div>
  );
}
