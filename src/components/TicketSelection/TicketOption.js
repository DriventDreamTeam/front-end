import styled from 'styled-components';
import { useContext } from 'react';
import { ModalityContext } from '../../contexts/modalityContext';

export default function TicketOption({ id, title, price }) {
  const { ticketModality, chooseModality } = useContext(ModalityContext);
  const selected = ticketModality.type === id;
  const bgColor = selected ? '#FFEED2' : '#0000';

  return (
    <Modality bgColor={bgColor} onClick={() => chooseModality({ type: id, price: price })}>
      <span>{title}</span>
      <span>R$ {price}</span>
    </Modality>
  );
}

const Modality = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  &:hover {
    cursor: pointer;
  }

  & > span:first-child {
    font-size: 16px;
    color: #454545;
  }

  & > span:last-child {
    font-size: 14px;
    color: #898989;
  }
`;
