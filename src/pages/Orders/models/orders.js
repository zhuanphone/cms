import { listOrders, readOrder, deleteOrder } from '@/services/api';

export default {
  namespace: 'orders',

  state: {
    data: {
      list: [],
      pagination: {},
      order: {},
    },
  },

  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(listOrders, payload);
      const { status, result } = response;
      yield put({
        type: 'save',
        payload: result,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteOrder, payload);

      if (callback) callback();

      return response
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *read({ payload, callback }, { call, put }) {
      const response = yield call(readOrder, payload);
      yield put({
        type: 'save',
        payload: {
          order: response.result,
        },
      });
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
