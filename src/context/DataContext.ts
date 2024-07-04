import { createContext } from 'react';
import { DataContextType } from '../types';

const DataContext = createContext({} as DataContextType);

export default DataContext;
