export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Order {
  _id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "paid" | "shipped" | "delivered";
  createdAt: string;
}