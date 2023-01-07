import { useContext, useState, useEffect } from 'react';
import ActivitiesSection from '../../../components/Activities';
import { Section } from '../../../components/Dashboard/Section';
import MyLoader from '../../../components/Loading';
import UnauthorizedAccessMessage from '../../../components/UnauthorizedMessage';
import UserContext from '../../../contexts/UserContext';
import useTicket from '../../../hooks/api/useTicket';
import { getPayment } from '../../../services/paymentsApi';
import { getTicketTypes } from '../../../services/ticketApi';

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [payment, setPayment] = useState({});
  const [ticketType, setTicketType] = useState([]);
  const [isRemote, setIsRemote] = useState(false);
  const [loading, setLoading] = useState(true);
  const { ticket } = useTicket();

  const unauthorizedMessagePayment = 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem';
  const isRemoteMessage = 'Seu ticket é remoto, não há necessidade de escolher as atividades';

  useEffect(() => {
    if (ticket) {
      getPayment(userData?.token, ticket?.id)
        .then((res) => {
          setPayment({ ...res });
          setLoading(false);
        })
        .catch((error) => {});
        
      getTicketTypes(userData?.token)
        .then((res) => {
          setTicketType({ ...res });
        })
        .catch((error) => {});
    }
  }, [ticket]);

  const existsPayment = Object.keys(payment).length !== 0;

  // if (ticket && ticketType) {
  //   const type = ticketType.filter((value) => value.id === ticket.id);
  //   if (type[0]?.price === 100) {
  //   }
  //   setIsRemote(true);
  // }

  if (loading && existsPayment) {
    return <MyLoader />;
  }

  return (
    <Section>
      <Section.Title>Escolha de Atividades</Section.Title>
      {existsPayment ? (
        <ActivitiesSection />
      ) : (
        <UnauthorizedAccessMessage text={isRemote ? isRemoteMessage : unauthorizedMessagePayment} />
      )}
    </Section>
  );
}
