import { signal } from '@preact/signals-react';

const DEFAULT_MESSAGE = 'An error occurred';

const toastError = signal<string | undefined>(undefined);
const enableToast = signal<boolean>(false);

type IValue = {
  enableToast: (message?: string) => void;
  dismissToast: () => void;
};

function useToastSignal(): IValue {
  return {
    enableToast: (message): void => {
      enableToast.value = true;
      toastError.value = message || DEFAULT_MESSAGE;
    },
    dismissToast: (): void => {
      enableToast.value = false;
    },
  };
}

export { enableToast, toastError, useToastSignal };
