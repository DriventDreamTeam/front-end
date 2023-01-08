import TicketOptions from './TicketOptions';
import PresentialTicketOptions from './PresentialTicketOptions';
import ReserveTicketButton from './ReserveTicketButton';
import { Title } from '../utils';

export default function TicketSelection() {
  return (
    <>
      <Title variant="h4">Ingresso e Pagamento</Title> 
      <TicketOptions />
      <PresentialTicketOptions />
      <ReserveTicketButton />
    </>
  );
}
