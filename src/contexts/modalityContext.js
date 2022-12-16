import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ModalityContext = createContext();

export function ModalityProvider({ children }) {
  const [ticketModality, setTicketModality] = useState({ type: null, price: null });
  const [accommodationModality, setAccommodationModality] = useState({ type: null, price: null });
  const [paymentData, setPaymentData] = useLocalStorage('paymentData', null);

  function chooseModality(modality) {
    if (modality.type !== 'presential' && modality.type !== 'online') return;
    if (modality.type === 'online') setAccommodationModality({ type: null, price: null });
    setTicketModality(modality);
  }

  function chooseAccommodationModality(modality) {
    if (modality.type !== 'withHotel' && modality.type !== 'withoutHotel') return;
    setAccommodationModality(modality);
  }

  return (
    <ModalityContext.Provider
      value={{
        ticketModality,
        accommodationModality,
        chooseModality,
        chooseAccommodationModality,
        paymentData,
        setPaymentData,
      }}
    >
      {children}
    </ModalityContext.Provider>
  );
}
