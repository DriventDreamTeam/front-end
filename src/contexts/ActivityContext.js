import { createContext, useState } from 'react';

const ActivityContext = createContext();
export default ActivityContext;

export function ActivityProvider({ children }) {
  const [selectedActivityId, setSelectedActivityId] = useState(0);
  
  return (
    <ActivityContext.Provider value={{ selectedActivityId, setSelectedActivityId }}>
      {children}
    </ActivityContext.Provider>
  );
}
