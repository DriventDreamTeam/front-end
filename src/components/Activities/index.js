import { useContext, useState } from 'react';
import { Section } from '../Dashboard/Section';
import ActivityList from './ActivityList';
import { useGetActivitiesByDateId } from '../../hooks/api/useActivity';
import ChooseDay from './ActivitiesDays';
import ActivityCheckButtom from './ActivityCheckButtom.js';
import ActivityContext from '../../contexts/ActivityContext';
export default function ActivitiesSection() {
  const [selectedDay, setSelectedDay] = useState(0);
  const { selectedActivityId } = useContext(ActivityContext);

  function Main() {
    const { activities } = useGetActivitiesByDateId(selectedDay);

    return <>{activities && <ActivityList activities={activities} />}</>;
  }

  return (
    <>
      <ChooseDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      {selectedDay ? <Main /> : <Section.Loading />}
      {selectedActivityId ? <ActivityCheckButtom /> : <></>}
    </>
  );
}
