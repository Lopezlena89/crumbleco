import { create } from 'zustand'

interface StoreStateMenu{
    stateMenu:boolean;
    setStateMenu:() => void;
}

const useStateMenuStore = create<StoreStateMenu>((set) => ({
  stateMenu: false,
  setStateMenu: () => set((state) => ({ stateMenu: !state.stateMenu })),
}));

export default useStateMenuStore;

