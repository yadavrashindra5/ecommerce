interface IState {
  id: number;
  status: boolean;
  count: number;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  images?: string[];
  state?: Map<number,IState>;
}
