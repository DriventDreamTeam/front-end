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

// function formatPrice(number)
// {
// //   const formatted = new Intl.NumberFormat('pt-BR');
// //   return formatted.format(number);
//   const formatedPrice = number?.toFixed(2).replace('.', ',');
//   return formatedPrice;
// }
