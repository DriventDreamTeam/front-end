import { Typography } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

export function Section({ children }) {
  return <Container>{children}</Container>;
}

Section.Title = ({ children }) => {
  return <StyledTypography variant="h4">{children}</StyledTypography>;
};

Section.Loading = ({ color }) => {
  return (
    <StyledLoader>
      <Loader color={color ? color : '#8E8E8E'} />
    </StyledLoader>
  );
};

const Container = styled.section`
  height: 100%;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const StyledWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;

  p {
    width: 60%;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.25em;
    color: #8e8e8e;
  }
`;

const StyledLoader = styled(StyledWarning)`
  position: relative;
  top: -4.5px;
`;
