import { stringify } from 'qs';
import request from '@/utils/request';

const APIURL = '/api/v1';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile(id) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

/**
 * 登录
 * params:
 * {
 *  username: xxx,
 *  password: xxx
 * }
 */
export async function accountLogin(params) {
  console.log('params', params);
  return request(`${APIURL}/auth/login`, {
    method: 'POST',
    body: params,
  });
}

export async function accounRegister(params) {
  return request(`${APIURL}/auth/register`, {
    method: 'POST',
    body: params,
  });
}

/************************** 用户管理接口 ************************/
export async function readUser(params) {
  const { id } = params;
  return request(`${APIURL}/users/read/${id}`);
}

export async function listUsers(params) {
  if (params) {
    return request(`${APIURL}/users/list?${stringify(params)}`);
  } else {
    return request(`${APIURL}/users/list`);
  }
}

/************************** 商品接口 ****************************/
export async function createGood(params) {
  return request(`${APIURL}/goods/create`, {
    method: 'POST',
    body: params,
  });
}

export async function listGoods(params) {
  if (params) {
    return request(`${APIURL}/goods/list?${stringify(params)}`);
  } else {
    return request(`${APIURL}/goods/list`);
  }
}

export async function readGood(params) {
  const { id } = params;
  return request(`${APIURL}/goods/read/${id}`);
}

export async function updateGood(params) {
  const { id, data } = params;
  return request(`${APIURL}/goods/update/${id}`, {
    method: 'POST',
    body: data,
  });
}

export async function deleteGood(params) {
  const { id } = params;
  return request(`${APIURL}/goods/delete/${id}`, {
    method: 'DELETE',
  });
}

/*********************** 订单接口 ***********************/
export async function createOrder(params) {
  return request(`${APIURL}/orders/create`, {
    method: 'POST',
    body: params,
  });
}

export async function listOrders(params) {
  if (params) {
    return request(`${APIURL}/orders/list?${stringify(params)}`);
  } else {
    return request(`${APIURL}/orders/list`);
  }
}

export async function readOrder(id) {
  return request(`${APIURL}/orders/read/${id}`);
}

export async function updateOrder(params) {
  const { id, data } = params;
  return request(`${APIURL}/orders/update/${id}`, {
    method: 'POST',
    body: data,
  });
}

export async function deleteOrder(params) {
  const { id } = params;
  return request(`${APIURL}/orders/delete/${id}`, {
    method: 'DELETE',
  });
}

/*********************** 获取七牛token **********************/
export async function genQiniuToken() {
  return request(`${APIURL}/auth/qiniu/token`);
}

export async function saveImgsHash(params) {
  return request(`${APIURL}/imgs/create`, {
    method: 'POST',
    body: params,
  });
}
