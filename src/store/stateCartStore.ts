import { create } from 'zustand';

interface Producto {
  price: number;
  name: string;
  count:number;
}

interface StoreStateMenu {
  statePrice: number;
  products: Producto[];
  addProduct: ( name: string,price: number,count:number) => void;
  updateProduct: ( name: string,price: number,count:number) => void;
  removeProducto: (name: string) => void;
  setStatePlusPrice: (value: number) => void;
  setStateMinusPrice: (value: number) => void;
}

const useStateCartStore = create<StoreStateMenu>((set) => ({
  statePrice: 0,
  products: [],
  addProduct: (name,price,count) => set((state) => ({
    products: [...state.products, { name,price,count }],
  })),
  updateProduct: (name, price, count) => set((state) => ({
    products: state.products.map((product) =>
      product.name === name
        ? { ...product, count: product.count + count, price: product.price + price }
        : product
    ),
  })),
  removeProducto: (name) => set((state) => ({
    products: state.products.filter((product) => product.name !== name),
  })),
  setStatePlusPrice: (value: number) =>
    set((state) => ({ statePrice: state.statePrice + value })),
  setStateMinusPrice: (value: number) =>
    set((state) => ({ statePrice: state.statePrice - value })),
}));

export default useStateCartStore;