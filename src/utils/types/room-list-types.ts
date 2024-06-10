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
      message: string
    };
  };
  createdAt: string;
}

