import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketSelection from './TicketSelection';
import UnauthorizedAccessMessage from '../UnauthorizedMessage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTicket from '../../hooks/api/useTicket';

export default function PaymentInformation() {
  const { enrollment } = useEnrollment();
  const { ticket } = useTicket();
  const content = <TicketSelection />;
  const unauthorizedMessage = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';
  const navigate = useNavigate();

  useEffect(() => {
    if (ticket) navigate('/dashboard/payment/resume');
  }, [ticket]);

  return (  
    <>
      <Title variant="h4">Ingresso e Pagamento</Title>
      <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
      {enrollment ? content : <UnauthorizedAccessMessage text={unauthorizedMessage} />}
    </>
  );
}

const Title = styled(Typography)`
  margin-bottom: 20px !important;
`;
