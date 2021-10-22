import { IPostDetails } from "../reducers/reducer";
import { IActionCreate, IActionEdit } from "../sagas/saga";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  EDIT_REQUEST,
  CREATE_REQUEST,
} from "./actionTypes";

interface IAction {
  type?: string,
  payload?: string,
}

export interface IEdit { 
  text: string,
  tags: string,
  image: string,
  id: string,
}

export interface ICreate { 
  text: string,
  image: string,
  likes: number,
  tags: string[],
  owner: string, 
}

interface IDetails { 
  type: string,
  payload: IPostDetails,
}

export const fetchPostsRequest = (): IAction => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (
  payload: IPostDetails
): IDetails => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const postDetailsRequest = (payload: string): IAction => ({
  type: POST_DETAILS_REQUEST,
  payload,
});

export const postDetailsSuccess = (
  payload: IPostDetails
): IDetails => ({
  type: POST_DETAILS_SUCCESS,
  payload,
});

export const editRequest = (payload: IEdit): IActionEdit => ({
  type: EDIT_REQUEST,
  payload,
});

export const createRequest = (payload: ICreate): IActionCreate => ({
  type: CREATE_REQUEST,
  payload,
});