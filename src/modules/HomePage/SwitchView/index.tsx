import { useSignals } from '@preact/signals-react/runtime';
import type { FC } from 'react';
import React from 'react';

import type { MoviesResponse } from '@/interfaces/movies';
import { currentViewType } from '@/stores/view';

import GridView from './Grid';
import ListView from './List';

interface ISwitchViewProps {
  isLoading: boolean;
  movies?: MoviesResponse;
}
const SwitchView: FC<ISwitchViewProps> = ({ isLoading, movies }) => {
  useSignals();
  if (currentViewType.value === 'grid') {
    return <GridView isLoading={isLoading} movies={movies} />;
  }

  return <ListView isLoading={isLoading} movies={movies} />;
};

export default SwitchView;
