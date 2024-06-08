export interface ListResponse {
  data: List[];
  message: string;
}

export interface List {
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
