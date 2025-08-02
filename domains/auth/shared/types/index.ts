export interface UserData {
  name: string;
  userKey: string;
  role: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: UserData | null;
  login: (user: UserData) => void;
  logout: () => void;
}

export interface AuthModalState {
  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export interface ModalState {
  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export interface LoginParams {
  id: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  token: string;
  userKey: string;
  role: string;
}

export interface ReviewRequest {
  lectureName: string;
  userNumber: number;
  starLating: number;
  postTitle: string;
  postContent: string;
}

// export interface ReviewResponse {}
