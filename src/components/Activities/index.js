import { useState } from 'react';
import { Section } from '../Dashboard/Section';
import ActivityList from './ActivityList';
import { useGetActivitiesByDateId } from '../../hooks/api/useActivity';
import ChooseDay from './ActivitiesDays';

export default function ActivitiesSection() {
  const [selectedDay, setSelectedDay] = useState(0);

  function Main() {
    const { activities } = useGetActivitiesByDateId(selectedDay);

    return <>{activities && <ActivityList activities={activities} />}</>;
  }

  return (
    <Section>
      <Section.Title>Escolha de Atividades</Section.Title>
      <ChooseDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      {selectedDay ? <Main /> : <Section.Loading />}
    </Section>
  );
}
