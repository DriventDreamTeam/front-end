import styled from 'styled-components';
import PresentialTicketOption from './PresentialTicketOption';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { ModalityContext } from '../../contexts/modalityContext';

export default function PresentialTicketOptions() {
  const { ticketModality } = useContext(ModalityContext);

  if (ticketModality.type !== 'presential') return null;

  return (
    <Options>
      <Subtitle variant="h5">Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <div>
        <PresentialTicketOption id="withoutHotel" title="Sem Hotel" price="0" />
        <PresentialTicketOption id="withHotel" title="Com Hotel" price="350" />
      </div>
    </Options>
  );
}

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5px;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
  & > div {
    display: flex;
    column-gap: 25px;
  }
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif;
`;
