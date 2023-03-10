import { useContext, useState, useEffect } from 'react';
import MyLoader from '../../../components/Loading';
import Container from '../../../components/TicketPayment/PaymentResume';
import UserContext from '../../../contexts/UserContext';
import { getTickets } from '../../../services/ticketsApi';

export default function Payment() {
  const { userData } = useContext(UserContext);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    if (ticket.length === 0) {
      getTickets(userData?.token)
        .then((res) => {
          setTicket({ ...res });
        })
        .catch((error) => {});
    }
  }, [ticket]);

  if (ticket.length !== 0) {
    return <Container ticket={ticket} setTicket={setTicket}></Container>;
  }
  return <MyLoader></MyLoader>;
}
