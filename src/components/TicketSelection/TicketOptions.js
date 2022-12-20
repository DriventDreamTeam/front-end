import styled from 'styled-components';
import TicketOption from './TicketOption';
import { Typography } from '@material-ui/core';

export default function TicketOptions() {
  return (
    <Options>
      <Subtitle variant="h5">Primeiro, escolha sua modalidade</Subtitle>
      <div>
        <TicketOption id="presential" title="Presencial" price="250" />
        <TicketOption id="online" title="Online" price="100" />
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
