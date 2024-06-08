export interface RoomResponse {
  data: Room[];
  message: string;
}

export interface Room {
  id: string;
  title: string;
  participants: [
    {
      id: string;
      name: string;
    }
  ];
  messages: Messages[]
  createdAt: string;
}


export interface Messages {
  user: {
    id: string;
    name: string;
  };
  content: string;
  createdAt: string;
}
