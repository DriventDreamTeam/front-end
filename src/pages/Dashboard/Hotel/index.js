import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';

export default function Hotel() {
  const hotel = {
    id: 1,
    name: 'hotel bonito',
    image: 'belaImagem.jpeg',
    createdAt: 'aaaaaa',
    updatedAt: 'aaaaaa',
    Rooms: [{
      id: 1,
      name: '112',
      capacity: 1,
      hotelId: 1,
      Booking: 0,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 2,
      name: '212',
      capacity: 2,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 3,
      name: '312',
      capacity: 3,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    },
    {
      id: 4,
      name: '412',
      capacity: 5,
      hotelId: 1,
      Booking: 2,
      createdAt: true,
      updatedAt: true,
    }]
  };

  return (
    <Wrapper>
      <h1>
        Ótima pedida! Agora escolha seu quarto:
      </h1>
      <Container>
        {hotel.Rooms.map((room, index) => {
          return (
            <Room key={index}>
              <h2>{room.name}</h2>
              <div> <BsPersonFill/> <BsPerson/> </div>
            </Room>
          );
        })}
      </Container>

    </Wrapper>

  );
}

const Wrapper = styled.div`
  width: 100%;
  h1{
    margin-bottom: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
  };
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Room = styled.div`
  width: 190px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-radius: 10px;
  border: solid 1px #CECECE;
  display: flex;
  background-color: "";
  div{
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  };
  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #454545;
    margin-left: 10px;
  };
  svg{
    /* fill: blue; */
  }
`;
