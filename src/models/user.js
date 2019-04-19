import { query as queryUsers, queryCurrent } from '@/services/user';
import { message } from 'antd';
import { getFromStorage } from '@/utils/authority';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *checkAuth(_, { call, put }) {
      const token = getFromStorage('token')
      console.log('token: ', token);
      if (!token) {
        console.log('go to login')
        yield put(
          // routerRedux.replace({
          //   pathname: '/user/login',
          //   search: stringify({
          //     redirect: window.location.href,
          //   }),
          // })

          routerRedux.replace('/user/login')
        );
      }
    },
    *fetchCurrent(_, { call, put }) {
      const res = yield call(queryCurrent);
      console.log('res: ', res);
      if (res && res.status === 200) {
        const { status, result } = res
        console.log('result: ', result);
        yield put({
          type: 'saveCurrentUser',
          payload: result,
        });
      } else {
        message.error('无法获取当前用户')
      }
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
