export interface RoomResponse {
  data: Room[];
  message: string;
}

export interface Room {
  id: string;
  title: string;
  lastMessage: {
    user: {
      id: string;
      name: string;
    };
  };
  createdAt: string;
}

export interface Messages {
  user: [
    {
      id: string;
      name: string;
    }
  ];
  content: string;
  createdAt: string;
}
