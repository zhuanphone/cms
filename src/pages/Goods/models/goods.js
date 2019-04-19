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
        console.log('fetch result: ', result);
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
        console.log('fetchGood result: ', result);
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
        return response;
      } catch (error) {
        message.error(error.message);
      }
    },

    *delete({ payload, callback }, { call, put }) {
      const response = yield call(deleteGood, payload);

      if (callback) callback();
      return response;
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateGood, payload);
      if (callback) callback();
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
