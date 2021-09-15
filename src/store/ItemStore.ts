import create from "zustand";
import { Element } from "../model/element";

interface ItemState {
    currentElement: Element|null;
    changeCurrentElement: (element: Element) => void;
}

export const useItemStore = create<ItemState>((set,get) => ({
    // initial state
    currentElement: null,
    // methods for manipulating state
    changeCurrentElement: (element: Element) => {
// console.log( 'Item Store');        
// console.log( JSON.stringify(element) );        
      set((state) => ({
        currentElement: element,
      }));
    },
  }));
  