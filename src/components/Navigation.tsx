import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <StyledDiv>
      <StyledUl>
        <StyledLi><StyledLink to='/'>Home</StyledLink></StyledLi>
        <StyledLi><StyledLink to='/post'>Posts</StyledLink></StyledLi>
      </StyledUl>
    </StyledDiv>
  )
}

export default Navigation

const StyledDiv = styled.div`
  width: 100%;
  background-color: #4A4D4C;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: sticky;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
`
const StyledUl = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
`
const StyledLi = styled.li`
  list-style: none;
  padding: 30px 0px 30px 30px;

`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4EDEAE;
  font-weight: 900;
  font-size: 20px;
`
