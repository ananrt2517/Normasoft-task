import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPostsRequest } from '../store/actions/actions';
import Card from '../components/Card';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import { SpinnerDiv } from './PostDetails';
import { CreatePostModal } from '../components/CreatePostModal';
import { StyledButton } from './PostDetails';
import { InitialState } from '../store/reducers/reducer';

export const User = () => {

  const dispatch = useDispatch()
  const state = useSelector((state: InitialState) => state?.post)
  const loading = useSelector((state: InitialState) => state?.pending)

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [dispatch]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {loading ? <SpinnerDiv><Spinner /></SpinnerDiv> :
        <>
          <StyledDiv>
            <StyledText>After creating the post refresh the page to see results!</StyledText>
            <StyledButtonUser onClick={showModal}>Create post</StyledButtonUser>
            <CardDiv>
              {state?.map((item: any) => {
                return (
                  <Card key={item.id} id={item.id} text={item.text} publishDate={item.publishDate} firstName={item.owner?.firstName}
                    lastName={item.owner?.lastName} tags={`${item.tags},`} img={item.image}
                  />
                )
              })}
            </CardDiv>
          </StyledDiv>
          <CreatePostModal isVisible={isModalVisible} onClose={() => handleCancel()}></CreatePostModal>
        </>
      }
    </>
  )
}

export const StyledDiv = styled.div`
  background-color: #343736;
  height: 100%;
  width: 100%;
  margin-top: -9px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`
export const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledButtonUser = styled(StyledButton)`
  width: 150px;
`
const StyledText = styled.span`
  margin: 10px;
  font-size: 18px;
  color: white
`