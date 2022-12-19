import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Container({ value, selected, setSelected }) {
  function handleClick() {
    if(selected.id !== value.id) {
      setSelected({ ...value });
    }
  }

  return (
    <UniqueHotel hotelid={value.id} selectedid={selected.id} onClick={handleClick}>
      <div>
        <img src={value.image} alt='Hotel' />
        <span>{value.name}</span>
      </div>
    </UniqueHotel>
  );
}

const UniqueHotel = styled(Typography)`
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
    font-size: 18px;
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
