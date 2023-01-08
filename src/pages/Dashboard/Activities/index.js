import { useContext, useState, useEffect } from 'react';
import ActivitiesSection from '../../../components/Activities';
import { Section } from '../../../components/Dashboard/Section';
import MyLoader from '../../../components/Loading';
import UnauthorizedAccessMessage from '../../../components/UnauthorizedMessage';
import UserContext from '../../../contexts/UserContext';
import useTicket from '../../../hooks/api/useTicket';
import { getPayment } from '../../../services/paymentsApi';

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [payment, setPayment] = useState({});
  const [isRemote, setIsRemote] = useState(false);
  const [loading, setLoading] = useState(true);
  const { ticket } = useTicket();

  const unauthorizedMessagePayment = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
  const isRemoteMessage =
    'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades';

  useEffect(() => {
    if (ticket) {
      getPayment(userData?.token, ticket?.id)
        .then((res) => {
          setPayment({ ...res });
          setLoading(false);
          const ticketType = ticket?.TicketType?.isRemote;
          setIsRemote(ticketType);
        })
        .catch((error) => {});
    } else {
      setLoading(false);
    }
  }, [ticket]);

  if (loading) {
    return <MyLoader />;
  }
  const existsPayment = Object.keys(payment).length !== 0;

  return (
    <Section>
      <Section.Title>Escolha de Atividades</Section.Title>
      {existsPayment && !isRemote ? (
        <ActivitiesSection />
      ) : (
        <UnauthorizedAccessMessage text={isRemote ? isRemoteMessage : unauthorizedMessagePayment} />
      )}
    </Section>
  );
}
