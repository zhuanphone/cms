import { genQiniuToken } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'token',

  state: {
    qiniuConfig: {
      token: '',
      domain: '',
    },
  },

  effects: {
    *getQiniuToken({ payload }, { call, put }) {
      try {
        const response = yield call(genQiniuToken, payload);
        const { status, result } = response;
        yield put({
          type: 'saveToken',
          payload: result,
        });
      } catch (error) {
        message.error(error.message);
      }
    },
  },

  reducers: {
    saveToken(state, action) {
      return {
        ...state,
        qiniuConfig: action.payload,
      };
    },
  },
};
