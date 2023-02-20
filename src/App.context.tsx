import React, { useState } from 'react';
import { AppContextType } from './@types/context/app';

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.ReactNode> = () => {
  const [metaData] = useState<Record<string, any>>({});

  return <AppContext.Provider value={{ metaData }}></AppContext.Provider>;
};

export default AppProvider;
