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
  const [loading, setLoading] = useState(true);
  const { ticket } = useTicket();

  const unauthorizedMessagePayment = 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem';

  useEffect(() => {
    if (ticket) {
      getPayment(userData?.token, ticket?.id)
        .then((res) => {
          setPayment({ ...res });
          setLoading(false);
        })
        .catch((error) => {});
    }
  }, [ticket]);

  if (loading) {
    return <MyLoader />;
  }

  const existsPayment = Object.keys(payment).length !== 0;

  return (
    <Section>
      <Section.Title>Escolha de Atividades</Section.Title>
      {existsPayment ? <ActivitiesSection /> : <UnauthorizedAccessMessage text={unauthorizedMessagePayment} />}
    </Section>
  );
}
