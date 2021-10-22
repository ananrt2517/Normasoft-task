import axios from "../../config/axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchPostsSuccess, ICreate, IEdit, postDetailsSuccess } from "../actions/actions";
import { FETCH_POSTS_REQUEST, POST_DETAILS_REQUEST, EDIT_REQUEST, CREATE_REQUEST } from "../actions/actionTypes";
import { IPostDetails } from "../reducers/reducer";

export interface IAction { 
  type: string,
  payload: string,
}

export interface IActionEdit { 
  type: string,
  payload: IEdit,
}

export interface IActionCreate { 
  type: string,
  payload: ICreate,
}

const getPosts = async () => { 
  const { data } = await axios.get<IPostDetails[]>(" https://dummyapi.io/data/v1/post");
  return data;
}

const postDetails = async (id: string) => { 
  const { data } = await axios.get<IPostDetails>(`https://dummyapi.io/data/v1/post/${id}`);
  return data;
}
  
const editApi = async (payload: IEdit) => {
  const { id, ...rest} = payload;
  const { data } = await axios.put<IEdit>(`https://dummyapi.io/data/v1/post/${id}`, { ...rest });
  return data;
}

const createApi = async (payload: ICreate) => {
  const { data } = await axios.post<ICreate>('https://dummyapi.io/data/v1/post/create', payload);
  return data;
}

function* fetchPostSaga():any {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess(response.data)
    );
  } catch (e) {
    console.log(e)
  }
}

function* postDetailSaga(action:IAction):any {
  try {
    const data = yield call(postDetails, action.payload);
    yield put(postDetailsSuccess(data));
  } catch (e) {
    console.log(e)
  }
}

function* editSaga(action:IActionEdit):any {
  try {
    const data: any = yield call(editApi, action.payload);
    yield put(postDetailsSuccess(data));
  } catch (e) {
    console.log(e)
  }
}

function* createSaga(action:IActionCreate):any {
  try {
    const data = yield call(createApi, action.payload);
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    console.log(e)
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_POSTS_REQUEST, fetchPostSaga)]);
  yield all([takeLatest(POST_DETAILS_REQUEST, postDetailSaga)]);
  yield all([takeLatest(EDIT_REQUEST, editSaga)]);
  yield all([takeLatest(CREATE_REQUEST, createSaga)]);
}

export default todoSaga;