export interface User {
  id: number;
  name: string;
  username: string;
  phone: number;
  email: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}
