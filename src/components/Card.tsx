import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../pages/PostDetails';
interface Props {
  text: string,
  id: string,
  publishDate: string,
  firstName: string,
  lastName: string,
  tags: string,
  img: string,
}

const Card = (props: Props) => {

  return (
    
    <StyledDiv>
        <StyledLink to={`/post/${props.id}`}>
        <StyledImg src={props.img} />
          <StyledText>
            <StyledSpan><SpanTitle>Title: </SpanTitle>{props.text}</StyledSpan>
            <StyledSpan><SpanTitle>Post date: </SpanTitle>{props.publishDate}</StyledSpan>
            <StyledSpan><SpanTitle>Creator user: </SpanTitle>{props.firstName} {props.lastName}</StyledSpan>
            <StyledSpan><SpanTitle>Tags: </SpanTitle>{props.tags}</StyledSpan>
            <StyledButtonCard>Details</StyledButtonCard>
        </StyledText>
      </StyledLink>
    </StyledDiv>
    
  )
}

export default Card

const StyledDiv = styled.div`
  background-color: #4A4D4C;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 250px;
  height: 450px;
`
const StyledLink = styled(Link)`
  color: lightgray;
  text-decoration: none;
`
const StyledImg = styled.img`
  width: 100%;
  height: 200px;
`
const StyledText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const StyledSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 3px 0;
`
const SpanTitle = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #4EDEAE;
`
const StyledButtonCard = styled(StyledButton)`
  background: #108BEB;
  margin: 10px 0;
`