export default function getTicketType(ticket) {
  const { TicketType } = ticket;
  const ticketData = { price: TicketType?.price };
  if (TicketType?.isRemote) {
    return { ...ticketData, title: 'Online' };
  } else if (TicketType?.includesHotel) {
    return { ...ticketData, title: 'Presencial + Com Hotel' };
  } else {
    return { ...ticketData, title: 'Presencial + Sem Hotel' };
  }
}
