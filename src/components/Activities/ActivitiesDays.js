import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getDays } from '../../services/activitiesApi';

export default function ChooseDay({ selectedDay, setSelectedDay }) {
  const [reload, setReload] = useState(false);
  const [days, setDays] = useState([]);
  const { userData } = useContext(UserContext);
  const token = userData.token;

  useEffect(() => {
    getDays({ token }).then((res) => {
      setDays(res);
      setReload(true);
    });
  }, []);

  return (
    <Wrapper>
      {reload ? (
        <Container>
          {days.map((value, index) => {
            return (
              <Day
                selectedDay={selectedDay}
                id={value.id}
                onClick={() => {
                  setSelectedDay(value.id);
                }}
                key={index}
              >
                {value.date}
              </Day>
            );
          })}
        </Container>
      ) : (
        <>Infelizmente não há datas disponiveis!</>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  h1 {
    margin: 35px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 135px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${(props) => (props.selectedDay === props.id ? '#FFD37D' : '#E0E0E0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
