import { useContext, useState, useEffect } from 'react';
import UserContext from '../../../contexts/UserContext';
import useTicket from '../../../hooks/api/useTicket';
import { getPayment } from '../../../services/paymentsApi';

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [payment, setPayment] = useState({});
  const { ticket } = useTicket();

  useEffect(() => {
    if (ticket) {
      getPayment(userData?.token, ticket?.id).then((res) => {
        setPayment({ ...res });
      }).catch(error => {
      });
    }
  }, [ticket]);

  return  (
    <>
      {Object.keys(payment).length!==0 ? 'Atividades: Em breve!' : 'Efetue o pagamento antes'}
    </>
  );
}
