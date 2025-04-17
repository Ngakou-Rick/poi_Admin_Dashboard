import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { UserIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function ChatPage() {
  // Ces données seraient normalement chargées depuis une API
  const conversations = [
    {
      id: '1',
      user: {
        id: '101',
        name: 'Jean Dupont',
        avatar: null,
        isOnline: true,
      },
      lastMessage: {
        content: 'Bonjour, j\'ai un problème avec la création d\'un point d\'intérêt.',
        timestamp: '14:30',
        isRead: true,
        sentByUser: true,
      },
      unreadCount: 0,
    },
    {
      id: '2',
      user: {
        id: '102',
        name: 'Marie Martin',
        avatar: null,
        isOnline: false,
      },
      lastMessage: {
        content: 'Merci pour votre aide !',
        timestamp: '12:15',
        isRead: true,
        sentByUser: true,
      },
      unreadCount: 0,
    },
    {
      id: '3',
      user: {
        id: '103',
        name: 'Pierre Dubois',
        avatar: null,
        isOnline: true,
      },
      lastMessage: {
        content: 'Pouvez-vous m\'aider à modifier mon profil ?',
        timestamp: '10:45',
        isRead: false,
        sentByUser: true,
      },
      unreadCount: 2,
    },
    {
      id: '4',
      user: {
        id: '104',
        name: 'Sophie Leroy',
        avatar: null,
        isOnline: false,
      },
      lastMessage: {
        content: 'Je vous envoie les informations demandées.',
        timestamp: 'Hier',
        isRead: true,
        sentByUser: false,
      },
      unreadCount: 0,
    },
    {
      id: '5',
      user: {
        id: '105',
        name: 'Thomas Bernard',
        avatar: null,
        isOnline: false,
      },
      lastMessage: {
        content: 'Comment puis-je supprimer mon compte ?',
        timestamp: 'Hier',
        isRead: true,
        sentByUser: true,
      },
      unreadCount: 0,
    },
  ];

  const selectedConversation = {
    id: '3',
    user: {
      id: '103',
      name: 'Pierre Dubois',
      avatar: null,
      isOnline: true,
      email: 'pierre.dubois@example.com',
      lastActive: '15 Avril 2025 - 10:45',
    },
    messages: [
      {
        id: '301',
        content: 'Bonjour, j\'ai besoin d\'aide pour modifier mon profil.',
        timestamp: '10:30',
        sentByUser: true,
      },
      {
        id: '302',
        content: 'Bien sûr, je serais ravi de vous aider. Que souhaitez-vous modifier exactement ?',
        timestamp: '10:35',
        sentByUser: false,
      },
      {
        id: '303',
        content: 'Je voudrais changer mon adresse email et mon nom d\'utilisateur.',
        timestamp: '10:40',
        sentByUser: true,
      },
      {
        id: '304',
        content: 'Pouvez-vous m\'aider à modifier mon profil ?',
        timestamp: '10:45',
        sentByUser: true,
      },
    ],
  };

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">
            {conversations.filter(c => c.user.isOnline).length} utilisateurs en ligne
          </span>
        </div>
      </div>

      <div className="flex flex-1 gap-6 h-full overflow-hidden">
        <div className="w-1/3 flex flex-col">
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 rounded-lg cursor-pointer ${
                    conversation.id === selectedConversation.id
                      ? 'bg-primary-50 border-l-4 border-primary-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-500" />
                        </div>
                        {conversation.user.isOnline && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                        )}
                      </div>
                      <div className="ml-3">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">{conversation.user.name}</span>
                          {conversation.unreadCount > 0 && (
                            <Badge variant="primary" size="sm" className="ml-2">
                              {conversation.unreadCount}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 truncate w-40">
                          {conversation.lastMessage.sentByUser ? '' : 'Vous: '}
                          {conversation.lastMessage.content}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{conversation.lastMessage.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-2/3 flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-gray-500" />
                  </div>
                  {selectedConversation.user.isOnline && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                  )}
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900">{selectedConversation.user.name}</div>
                  <div className="text-xs text-gray-500">
                    {selectedConversation.user.isOnline ? 'En ligne' : `Dernière activité: ${selectedConversation.user.lastActive}`}
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  Voir le profil
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sentByUser ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sentByUser
                        ? 'bg-white border border-gray-200'
                        : 'bg-primary-500 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <div
                      className={`text-xs mt-1 text-right ${
                        message.sentByUser ? 'text-gray-500' : 'text-primary-100'
                      }`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Écrivez votre message..."
                className="flex-1 rounded-l-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Button
                variant="gradient"
                className="rounded-l-none bg-gradient-to-r from-primary-500 via-blue-500 to-primary-600 hover:from-primary-600 hover:via-blue-600 hover:to-primary-700"
                leftIcon={<PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />}
                glow
              >
                Envoyer
              </Button>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <span>Pierre est en train d'écrire...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
