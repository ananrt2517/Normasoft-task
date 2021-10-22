import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createRequest, ICreate } from '../store/actions/actions';
import { StyledButton } from '../pages/PostDetails';

interface Props {
  isVisible: boolean,
  onClose: () => void,
}

export const CreatePostModal = ({ isVisible, onClose }: Props) => {
  const dispatch = useDispatch();

  const [valueState, setValueState] = useState<ICreate>({
    text: '',
    image: '',
    likes: 0,
    tags: [],
    owner: '60d0fe4f5311236168a10a12', 
  });
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValueState(prevState => ({...prevState, [name]: value}));
  }

  const handleClick = useCallback(
    () => {
      dispatch(createRequest(valueState))
      onClose();
    },
    [dispatch, onClose, valueState],
  )
  
  return (
    <>
      {isVisible ?
        <>
          <StyledDiv>
           <CloseSpan onClick={onClose}>X</CloseSpan>
            <StyledInput type='text' placeholder='Text...' name='text' onChange={handleChange} value={valueState.text}/>
            <StyledInput type='text' placeholder='Image...' name='image' onChange={handleChange} value={valueState.image} />
            <StyledInput type='text' placeholder='Tags...' name='tags' onChange={handleChange} value={valueState.tags} />
            <StyledButton onClick={handleClick}>SUBMIT</StyledButton>
          </StyledDiv>
          <Overlay></Overlay>
        </>
      : null}
    </>
  )
}

const StyledDiv = styled.div`
  transform: translate(0%, -29%);
  position: fixed;
  top: 40%;
  right: 35%;
  background: white;
  width: 50vh;
  height: 30vh;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 10px;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
`

const CloseSpan = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
`

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  background: lightgrey;
  border-radius: 5px;
  margin: 10px;
`