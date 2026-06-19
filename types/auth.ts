export interface User {
  id: string;
  name: string;
  email: string;
  typeAccount: string;
}
export interface RegisterBody {
  email: string;
  name: string;
  password: string;
  typeAccount: string;
}
export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}
