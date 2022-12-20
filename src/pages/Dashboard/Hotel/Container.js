import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Container({ value, selected, setSelected }) {
  function handleClick() {
    if(selected.id !== value.id) {
      setSelected({ ...value });
    }
  }

  function checkAccommodation(hotel) {
    value.Rooms.forEach(room => {
      if(room.capacity - room._count.Booking === 1) {
        hotel.accommodation = 'Single';
      }
      if(room.capacity - room._count.Booking === 2) {
        hotel.accommodation = 'Single e Double';
      }
      if(room.capacity - room._count.Booking > 2) {
        hotel.accommodation = 'Single, Double e Triple';
      }
    });
  }

  function checkCapacity(hotel) {
    hotel.capacity = 0;
    value.Rooms.forEach(room => {
      hotel.capacity += Number(room.capacity - room._count.Booking);
    });
  }

  checkAccommodation(value);
  checkCapacity(value);

  return (
    <UniqueHotel hotelid={value.id} selectedid={selected.id} onClick={handleClick}>
      <div>
        <img src={value.image} alt='Hotel' />
        <HotelName>{value.name}</HotelName>
        <DescriptionContainer>
          <span>Tipos de acomodação:</span>
          <AccommodationType>{value.accommodation}</AccommodationType>
        </DescriptionContainer>
        <DescriptionContainer>
          <span>Vagas disponíveis:</span>
          <AccommodationType>{value.capacity}</AccommodationType>
        </DescriptionContainer>
      </div>
    </UniqueHotel>
  );
}

const HotelName = styled(Typography)`
  width: 100%;
  row-gap: 8px;
  font-size: 21px!important;
  display: flex;
  justify-content: left;
`;

const UniqueHotel = styled.div`
  background-color: ${({ hotelid, selectedid }) => hotelid === selectedid ? '#FFEED2' : '#EBEBEB'};
  display: flex;
  justify-content: center;
  width: 196px;
  height: 264px;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;

  & img {
    object-fit: cover;
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  
  & > div {
    width: 100%;
    row-gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > div > span {
    display: flex;
    width: 100%;
    justify-content: left;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  margin-top: -2px;
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  & span {
    color: #3C3C3C;
    font-size: 14px;
    font-weight: 600;
  }
`;

const AccommodationType = styled(Typography)`
  color: #3C3C3C;
  font-size: 14px!important;
`;
