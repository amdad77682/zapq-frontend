import { MODE } from 'src/utils/helper';
import { create } from 'zustand';

export type IMode = 'story' | 'branching';
export type Global = {
  mode: IMode;
  onModeChange: (mode: IMode) => void;
};
// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useGlobalStore = create<Global>((set, get) => ({
  mode: 'story',
  onModeChange: (changes: IMode) => {
    set({
      mode: changes,
    });
  },
}));

export default useGlobalStore;
