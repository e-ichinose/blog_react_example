import styled from 'styled-components';
import CircularProgress from './CircularProgress';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CenteredCircularProgress: React.FC = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default CenteredCircularProgress;
