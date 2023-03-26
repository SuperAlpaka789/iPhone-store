import { createFeatureSelector } from '@ngrx/store';
import { StoreStateInterface } from '../state.interface';

export const selectAppState =
  createFeatureSelector<StoreStateInterface>('appState');
