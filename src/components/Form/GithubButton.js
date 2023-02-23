import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function GithubButton({ variant='contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  background-color: #222 !important;
`;
