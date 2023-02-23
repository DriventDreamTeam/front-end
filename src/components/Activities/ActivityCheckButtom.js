import { useContext, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import ActivityContext from '../../contexts/ActivityContext';
import { postActivitySchedule } from '../../services/activitiesApi';
import { toast } from 'react-toastify';

export default function ActivityCheckButtom() {
  const { selectedActivityId, setSelectedActivityId, selectedDay, setSelectedDay } = useContext(ActivityContext);
  const { userData } = useContext(UserContext);
  const token = userData.token;
  const [isDisabled, setIsDisabled] = useState(false);

  async function handleClick() {
    if (!isDisabled) {
      setIsDisabled(true);

      try {
        await postActivitySchedule({ token, selectedActivityId });
        setSelectedActivityId(0);
        setIsDisabled(false);
        setSelectedDay(selectedDay);
        toast('Incrição feita com sucesso!');
      } catch (error) {
        toast('O horario dessa atividade conflita com com outra atividade em que você esta inscrito!');
        setSelectedActivityId(0);
        setIsDisabled(false);
      }
    }
  }
  return (
    <Wrapper>
      <Modal>
        <ModalContainer>
          <ModalTitle>Reservar vaga?</ModalTitle>
          <ButtomContainer>
            <div
              onClick={() => {
                setSelectedActivityId(0);
              }}
            >
              Cancelar
            </div>
            <div
              onClick={() => {
                handleClick();
              }}
            >
              Confirmar
            </div>
          </ButtomContainer>
        </ModalContainer>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const Modal = styled.div`
  width: 60%;
  height: 200px;
  padding: 30px 50px;
  /* margin: 35px 0; */
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  background-color: #e0e0e0;
  /* font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center; */
  color: #000000;
  
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalTitle = styled.div`
  font-size: 20px;
`;

const ButtomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div{
    cursor: pointer;
  }
`;
