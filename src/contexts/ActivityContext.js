import { createContext, useState } from 'react';

const ActivityContext = createContext();
export default ActivityContext;

export function ActivityProvider({ children }) {
  const [selectedActivityId, setSelectedActivityId] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <ActivityContext.Provider value={{ selectedDay, setSelectedDay, selectedActivityId, setSelectedActivityId }}>
      {children}
    </ActivityContext.Provider>
  );
}
