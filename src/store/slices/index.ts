import { combineReducers } from "redux";
import { reducer as weatherSlice } from '../slices/weather';

export const rootReducer = combineReducers({
  weather: weatherSlice
});

export type AppState = ReturnType<typeof rootReducer>
