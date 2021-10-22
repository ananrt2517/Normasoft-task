import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { editRequest, IEdit } from '../store/actions/actions';
import { StyledButton } from '../pages/PostDetails'
import { InitialState } from '../store/reducers/reducer';

interface Props {
  isVisible: boolean,
  onClose: () => void,
}

export const Modal = ({ isVisible, onClose }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams<any>();
  const state = useSelector((state: InitialState) => state?.postDetails)

  const [value, setValue] = useState<IEdit>({
    text: `${state?.text}`,
    tags: `${state?.tags}`,
    image: `${state?.image}`,
    id: id,
  });
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
  }));
  }

  const handleClick = useCallback(
    () => {
      dispatch(editRequest(value))
      onClose();
    },
    [dispatch, onClose, value],
  )
  
  return (
    <>
      {isVisible ?
        <>
          <StyledDiv>
           <CloseSpan onClick={onClose}>X</CloseSpan>
            <StyledInput type='text' placeholder='Text...' name='text' onChange={handleChange} value={value.text} />
            <StyledInput type='text' placeholder='Image...' name='image' onChange={handleChange} value={value.image} />
            <StyledInput type='text' placeholder='Tags...' name='tags' onChange={handleChange} value={value.tags} />
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