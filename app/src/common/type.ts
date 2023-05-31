export interface BaseAPIResponse {
  message: string;
  code: number;
}

export interface Article {
  article_id: number;
  user_id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  username: string;
}

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserResponse extends Success {
  data: {
    id: string;
    username: string;
    token: string;
  }
}

export interface Success {
  message: string;
  code: number;
}