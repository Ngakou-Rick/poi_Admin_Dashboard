export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
  isActive: boolean;
  createdAt: Date;
  lastLogin?: Date;
}

export interface PointOfInterest {
  id: string;
  name: string;
  description: string;
  category: string;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  images: string[];
  rating: number;
  createdBy: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  likes: number;
  popularity: number;
}

export interface GeoStory {
  id: string;
  title: string;
  description: string;
  pointsOfInterest: string[];
  createdBy: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  recipients: string[];
  read: string[];
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  updatedAt: Date;
}

export interface StatisticsData {
  totalUsers: number;
  activeUsers: number;
  totalPOIs: number;
  activePOIs: number;
  popularCategories: {
    category: string;
    count: number;
  }[];
  poiViews: {
    date: string;
    count: number;
  }[];
  poiCreationByMonth: {
    month: string;
    count: number;
  }[];
}

export interface PopularityData {
  views: {
    daily: number;
    weekly: number;
    monthly: number;
    total: number;
  };
  likes: {
    daily: number;
    weekly: number;
    monthly: number;
    total: number;
  };
  engagement: number; // Percentage
  trend: 'up' | 'down' | 'stable';
  rank: number;
}
