import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import useEnrollment from '../../hooks/api/useEnrollment';
import TicketSelection from './TicketSelection';
import UnauthorizedAccessMessage from '../UnauthorizedMessage';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTickets } from '../../services/ticketsApi';
import UserContext from '../../contexts/UserContext';
import MyLoader from '../Loading';
import { Title } from '../utils';

export default function PaymentInformation() {
  const { enrollment } = useEnrollment();
  const [ticket, setTicket] = useState('');
  const { userData } = useContext(UserContext);
  const content = <TicketSelection />;
  const unauthorizedMessage = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';
  const unauthorizedComponent = <UnauthorizedAccessMessage text={unauthorizedMessage} />;
  const navigate = useNavigate();

  useEffect(() => {
    getTickets(userData?.token)
      .then((res) => {
        setTicket({ ...res });
        navigate('/dashboard/payment/resume');
      })
      .catch(() => {
        setTicket('Sem ticket no banco');
      });
  }, []);

  if (ticket) {
    return (
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
        <Title variant="h4">Ingresso e Pagamento</Title> 
        {enrollment ? content : unauthorizedComponent}
      </>
    );
  }
  return <MyLoader></MyLoader>;
}
