import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { ModalityContext } from '../../contexts/modalityContext';

import useTicketTypes from '../../hooks/api/useTicketTypes';
import useCreateTicket from '../../hooks/api/useCreateTicket';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ReserveTicketButton() {
  const { ticketModality, accommodationModality, loading } = useContext(ModalityContext);
  const { ticketTypes } = useTicketTypes();
  const { createTicket } = useCreateTicket();
  const navigate = useNavigate();

  if (ticketModality.type !== 'online' && accommodationModality.type === null) return null;
  const total = Number(ticketModality.price) + Number(accommodationModality.price);

  return (
    <Wrapper>
      <Subtitle variant="h5">
        Fechado! O total ficou em <strong>R$ {total}</strong>. Agora é só confirmar:
      </Subtitle>
      <Button
        onClick={() => {
          ticketTypes.map(async(ticketType) => {
            if (ticketType.price === total) {
              try {
                await createTicket({ ticketTypeId: ticketType.id });
                toast('Informações salvas com sucesso!');
              } catch (err) {
                toast('Não foi possível salvar suas informações!');
              }
            }
          });
          navigate('/dashboard/payment/resume');
        }}
        disabled={loading}
      >
        RESERVAR INGRESSO
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
  width: 162px;
  height: 37px;
  margin-top: 10px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`;
