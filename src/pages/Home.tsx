import styled from 'styled-components';
import { StyledDiv } from './Post';

const Home = () => {
  return (
    <StyledDivHome>
      <StyledSpan>Welcome to NORMASOFT task!</StyledSpan>
    </StyledDivHome>
  )
}

export default Home

const StyledSpan = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: white;
  margin-left: 10px;
`
const StyledDivHome = styled(StyledDiv)`
  height: 100vh;
`