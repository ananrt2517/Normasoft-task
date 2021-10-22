import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,  
} from "../actions/actionTypes";

export interface InitialState { 
  post: IPostDetails[],
  postDetails: any,
  pending: boolean,
}

export interface IPostDetails { 
  id: string,
  image: string,
  likes: number,
  link: string,
  owner: IOwner,
  publishDate: string,
  tags: string[],
  text: string
  updatedDate: string,
}

interface IOwner { 
  id: string,
  title: string,
  firstName: string,
  lastName: string,
  picture: string,
}

const initialState: InitialState = {
  post: [],
  postDetails: {},
  pending: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        post: action.payload,
        pending: false,
      };
    case POST_DETAILS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case POST_DETAILS_SUCCESS:
      return {
        ...state,
        postDetails: action.payload,
        pending: false
      };
    default:
      return {
        ...state,
      };
  }
};