import { listOrders, readOrder } from '@/services/api';

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
    *fetch({ payload }, { call, put }) {
      const response = yield call(listOrders, payload);
      console.log('fetch orders: ', response);
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
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *fetchOrder({ payload, callback }, { call, put }) {
      const response = yield call(readOrder, payload);
      yield put({
        type: 'save',
        payload: {
          order: response.result,
        },
      });
      console.log('fetch order ====>', response);
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
