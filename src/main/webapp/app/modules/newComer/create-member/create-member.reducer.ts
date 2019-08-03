import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICreateMember, defaultValue } from 'app/shared/model/create-member.model';

export const ACTION_TYPES = {
  FETCH_CREATEMEMBER_LIST: 'createMember/FETCH_CRETEMEMBER_LIST',
  FETCH_CREATEMEMBER: 'createMember/FETCH_CREATERMEMBER',
  CREATE_CREATEMEMBER: 'createMember/CREATE_CREATERMEMBER',
  UPDATE_CREATEMEMBER: 'createMember/UPDATE_CREATEMEMBER',
  DELETE_CREATEMEMBER: 'createMember/DELETE_CREATEMEMBER',
  RESET: 'createMember/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICreateMember>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type CreateMemberState = Readonly<typeof initialState>;

// Reducer

export default (state: CreateMemberState = initialState, action): CreateMemberState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CREATEMEMBER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CREATEMEMBER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_CREATEMEMBER):
    case REQUEST(ACTION_TYPES.UPDATE_CREATEMEMBER):
    case REQUEST(ACTION_TYPES.DELETE_CREATEMEMBER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_CREATEMEMBER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CREATEMEMBER):
    case FAILURE(ACTION_TYPES.CREATE_CREATEMEMBER):
    case FAILURE(ACTION_TYPES.UPDATE_CREATEMEMBER):
    case FAILURE(ACTION_TYPES.DELETE_CREATEMEMBER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_CREATEMEMBER_LIST):
      const links = parseHeaderForLinks(action.payload.headers.link);

      return {
        ...state,
        loading: false,
        links,
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_CREATEMEMBER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_CREATEMEMBER):
    case SUCCESS(ACTION_TYPES.UPDATE_CREATEMEMBER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_CREATEMEMBER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/register-members';

// Actions

export const getEntities: ICrudGetAllAction<ICreateMember> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_CREATEMEMBER_LIST,
    payload: axios.get<ICreateMember>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ICreateMember> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CREATEMEMBER,
    payload: axios.get<ICreateMember>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICreateMember> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CREATEMEMBER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<ICreateMember> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CREATEMEMBER,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICreateMember> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CREATEMEMBER,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
