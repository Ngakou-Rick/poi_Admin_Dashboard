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
    // Adjust height considering the header (h-16) and page padding (p-6 or p-8 from DashboardLayout)
    // For a more robust solution, use flex-grow in a container that is itself flex-1 within DashboardLayout's main area.
    // Current calc is an approximation: 100vh - header height (4rem) - approx page vertical padding (3rem or 4rem) - mb-8 from this page
    <div className="h-[calc(100vh-4rem-3rem-2rem)] md:h-[calc(100vh-4rem-4rem-2rem)] flex flex-col">
      <div className="flex items-center justify-between mb-8"> {/* Increased margin-bottom */}
        {/* h1 styled by globals.css */}
        <h1 className="text-3xl font-bold">Messages</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-secondary-600">
            {conversations.filter(c => c.user.isOnline).length} utilisateurs en ligne
          </span>
        </div>
      </div>

      <div className="flex flex-1 gap-8 h-full overflow-hidden"> {/* Increased gap */}
        {/* Conversations List - Themed */}
        <div className="w-1/3 flex flex-col bg-secondary-50 rounded-xl shadow-lg border border-secondary-300 p-1"> {/* Added padding for scrollbar */}
          <div className="p-4"> {/* Moved search inside to align padding */}
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                className="pl-10 pr-4 py-2.5 w-full rounded-lg border border-secondary-300 bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2 pb-2 space-y-1.5"> {/* Adjusted padding and spacing */}
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-150 group ${
                  conversation.id === selectedConversation.id
                    ? 'bg-primary-500 text-primary-foreground shadow-md' // Active: purple bg, white text
                    : 'hover:bg-primary-500/10' // Hover: light purple bg
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      {/* Themed Avatar */}
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center text-lg font-semibold
                                      ${conversation.id === selectedConversation.id ? 'bg-primary-300 text-primary-700' : 'bg-secondary-200 text-secondary-700 group-hover:bg-primary-100 group-hover:text-primary-600'}`}>
                        {conversation.user.name.charAt(0)}
                      </div>
                      {conversation.user.isOnline && (
                        <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2
                                        ${conversation.id === selectedConversation.id ? 'border-primary-500' : 'border-secondary-50 group-hover:border-primary-500/10'}`}></span>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <span className={`font-semibold ${conversation.id === selectedConversation.id ? 'text-primary-foreground' : 'text-secondary-900 group-hover:text-primary-600'}`}>{conversation.user.name}</span>
                        {conversation.unreadCount > 0 && (
                          <Badge variant={conversation.id === selectedConversation.id ? 'default' : 'primary'} size="sm" className="ml-2">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                      <p className={`text-sm truncate w-40 ${conversation.id === selectedConversation.id ? 'text-primary-100' : 'text-secondary-600 group-hover:text-primary-500/80'}`}>
                        {conversation.lastMessage.sentByUser ? '' : <span className="font-medium">Vous: </span>}
                        {conversation.lastMessage.content}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs ${conversation.id === selectedConversation.id ? 'text-primary-200' : 'text-secondary-500 group-hover:text-primary-500/70'}`}>{conversation.lastMessage.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area - Themed */}
        <div className="w-2/3 flex flex-col bg-secondary-50 rounded-xl shadow-lg border border-secondary-300 overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-secondary-300 bg-secondary-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-semibold">
                    {selectedConversation.user.name.charAt(0)}
                  </div>
                  {selectedConversation.user.isOnline && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-secondary-100"></span>
                  )}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-secondary-900">{selectedConversation.user.name}</div>
                  <div className="text-xs text-secondary-600">
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

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-secondary-100/30 space-y-4"> {/* Lighter bg for messages, increased padding */}
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sentByUser ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[70%] rounded-xl p-3 shadow-sm ${ // Softer shadow, rounded-xl
                    message.sentByUser
                      ? 'bg-secondary-50 border border-secondary-300 text-secondary-800' // User's own message: white bg
                      : 'bg-primary-500 text-primary-foreground' // Other user's message: purple bg, white text
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div
                    className={`text-xs mt-1.5 text-right ${ // Increased margin top
                      message.sentByUser ? 'text-secondary-500' : 'text-primary-200'
                    }`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input Area */}
          <div className="p-4 border-t border-secondary-300 bg-secondary-100">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Écrivez votre message..."
                className="flex-1 rounded-l-lg border border-secondary-300 bg-secondary-50 py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm" // Rounded-lg, themed focus
              />
              <Button
                variant="primary" // Changed from gradient
                className="rounded-l-none" // Keep sharp edge with input
                leftIcon={<PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />} // Adjusted rotation
                glow
                size="md" // Match input height better
              >
                Envoyer
              </Button>
            </div>
            {/* Typing indicator example (can be conditional) */}
            <div className="flex items-center mt-2 text-xs text-secondary-500">
              <span>Pierre est en train d'écrire...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
