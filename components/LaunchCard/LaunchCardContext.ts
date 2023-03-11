import ILaunch from '@/types/ILaunch';
import { createContext, useContext } from 'react';

const LaunchCardContext = createContext<{ launch: ILaunch } | null>(null);

export function useLaunchCardContext() {
  const context = useContext(LaunchCardContext);

  if (!context) {
    console.log('LaunchCardContext must be used within a LaunchCardContextProvider');
    throw new Error('LaunchCardContext must be used within a LaunchCardContextProvider');
  }
  return context;
}

export default LaunchCardContext;
