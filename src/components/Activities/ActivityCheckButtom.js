import { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import ActivityContext from '../../contexts/ActivityContext';
import { postActivitySchedule } from '../../services/activitiesApi';

export default function ActivityCheckButtom() {
  const { selectedActivityId, setSelectedActivityId } = useContext(ActivityContext);
  const { userData } = useContext(UserContext);
  const token = userData.token;
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick() {
    if (!isDisabled) {
      // setIsDisabled(true);
      postActivitySchedule(token, selectedActivityId)
        .then((res) => {
          setSelectedActivityId(0);
          //   setIsDisabled(false);
        })
        .catch((error) => {
          setSelectedActivityId(0);
          //   setIsDisabled(false);
        });
    }
  }
  return (
    <Wrapper>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Reservar vaga
      </Button>
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

const Button = styled.div`
  width: 182px;
  height: 37px;
  margin: 35px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  background-color: #e0e0e0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  cursor: pointer;
`;
