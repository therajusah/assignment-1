
import { create } from 'zustand';

export interface Page {
  id: string;
  name: string;
  checked: boolean;
}

interface CheckboxState {
  pages: Page[];
  allChecked: boolean;
  

  setAllChecked: (checked: boolean) => void;
  togglePage: (id: string, checked: boolean) => void;
  updateAllChecked: () => void;
}

export const useCheckboxStore = create<CheckboxState>((set, get) => ({
  pages: [
    { id: "page1", name: "Page 1", checked: false },
    { id: "page2", name: "Page 2", checked: false },
    { id: "page3", name: "Page 3", checked: false },
    { id: "page4", name: "Page 4", checked: false },
  ],
  allChecked: false,
  

  setAllChecked: (checked: boolean) => set(state => ({
    allChecked: checked,
    pages: state.pages.map(page => ({ ...page, checked }))
  })),
  
  togglePage: (id: string, checked: boolean) => {
    set(state => ({
      pages: state.pages.map(page => 
        page.id === id ? { ...page, checked } : page
      )
    }));
    
    get().updateAllChecked();
  },
  
  updateAllChecked: () => {
    const allPagesChecked = get().pages.every(page => page.checked);
    set({ allChecked: allPagesChecked });
  }
}));
