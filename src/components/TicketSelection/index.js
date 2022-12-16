import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketSelection from './TicketSelection';
import UnauthorizedAccessMessage from '../UnauthorizedMessage';

export default function PaymentInformation() {
  const { enrollment } = useEnrollment();
  const content = <TicketSelection />;
  const unauthorizedMessage = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';

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
