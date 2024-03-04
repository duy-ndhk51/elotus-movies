import { signal } from '@preact/signals-react';

const totalPages = signal<number>(0);
const currentMovieID = signal<string | undefined>(undefined);

type IValue = {
  setCurrentMovieID: (movieID: string) => void;
  clearMovieID: () => void;
  DOMRemoveDisableScroll: () => void;
  DOMAddDisableScroll: () => void;
};

function useMoviesSignal(): IValue {
  return {
    setCurrentMovieID: (movieID: string): void => {
      currentMovieID.value = movieID;
    },

    clearMovieID: (): void => {
      currentMovieID.value = undefined;
    },
    DOMRemoveDisableScroll: (): void => {
      document.documentElement.classList.remove('disable-scroll');
    },
    DOMAddDisableScroll: (): void => {
      document.documentElement.classList.add('disable-scroll');
    },
  };
}

export { currentMovieID, totalPages, useMoviesSignal };
