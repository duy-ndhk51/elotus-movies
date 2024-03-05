import { signal } from '@preact/signals-react';

enum EViewType {
  Grid = 'grid',
  List = 'list',
}

const currentViewType = signal<EViewType>(EViewType.Grid);

type IValue = {
  setCurrentViewType: (viewType?: EViewType) => void;
};

function useViewTypeSignal(): IValue {
  return {
    setCurrentViewType: (viewType): void => {
      currentViewType.value = viewType || EViewType.Grid;
    },
  };
}

export { currentViewType, EViewType, useViewTypeSignal };
