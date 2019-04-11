import { saveImgsHash } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'imgManager',

  state: {},

  effects: {
    *saveImgsHash({ payload }, { call, put }) {
      try {
        const response = yield call(saveImgsHash, payload);
        return response;
      } catch (error) {
        message.error(error.message);
      }
    },
  },

  reducers: {},
};
