import { listGoods, createGood, updateGood, deleteGood, readGood } from '@/services/api';
import { message } from 'antd';

export default {
  namespace: 'goods',

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      try {
        const response = yield call(listGoods, payload);
        const { status, result } = response;
        yield put({
          type: 'save',
          payload: result,
        });
      } catch (error) {
        message.error(error.message);
      }
    },
    *fetchGood({ payload }, { call, put }) {
      try {
        const response = yield call(readGood, payload);
        const { status, result } = response;
        yield put({
          type: 'save',
          payload: result,
        });
      } catch (error) {
        message.error(error.message);
      }
    },
    *create({ payload }, { call, put }) {
      try {
        const response = yield call(createGood, payload);
        console.log('create response: ', response, typeof response);
        return response;
      } catch (error) {
        message.error(error.message);
      }
    },

    *delete({ payload }, { call, put }) {
      const response = yield call(deleteGood, payload);
      console.log('response: ', response, typeof response);

      return response;
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateGood, payload);
      console.log('update response: ', response);
      return response;
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
