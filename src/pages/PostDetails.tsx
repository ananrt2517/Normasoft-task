import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postDetailsRequest } from '../store/actions/actions';
import styled from 'styled-components';
import { Modal } from '../components/Modal';
import Spinner from '../components/Spinner';
import { InitialState } from '../store/reducers/reducer';

const UserDetails = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: InitialState) => state?.postDetails)
  const loading = useSelector((state: InitialState) => state?.pending)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { id } = useParams<any>();

  useEffect(() => {
    dispatch(postDetailsRequest(id))
  }, [dispatch, id]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {loading ? <SpinnerDiv><Spinner/></SpinnerDiv> :
        <>
          <StyledDiv>
            <StyledImg src={state.image} />
            <TextSpan>DESCRIPTION: </TextSpan>
            <StyledSpan>Text: {state?.text}</StyledSpan>
            <StyledSpan>Publish date: {state?.publishDate}</StyledSpan>
            <StyledSpan>First Name: {state?.owner?.firstName}</StyledSpan>
            <StyledSpan>Last Name: {state?.owner?.lastName}</StyledSpan>
            <StyledSpan>Tags: {state?.tags}</StyledSpan>
            <StyledButton onClick={showModal}>Edit post</StyledButton>
          </StyledDiv>
          <Modal isVisible={isModalVisible} onClose={() => handleCancel()}></Modal>
        </>}
    </>
  )
}

export default UserDetails;

export const SpinnerDiv = styled.div`
  background-color: #343736;
  height: 100vh;
  width: 100%;
  margin-top: -9px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDiv = styled.div`
  background-color: #343736;
  height: 90vh;
  width: 100%;
  margin-top: -9px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  color: white;
`
const StyledImg = styled.img`
  margin: 10px auto;
  width: 500px;
  height: 500px;
`
const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 900px;
  margin: 5px;

`
const TextSpan = styled.span`
  font-size: 25px;
  color: #4EDEAE;
  font-weight: 900px;
`
export const StyledButton = styled.button`
  margin: 10px;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  background: #4EDEAE;
  color: white;
  font-weight: 900;
  cursor: pointer;
`
