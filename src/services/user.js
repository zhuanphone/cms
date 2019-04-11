import request from '@/utils/request';
import { getFromStorage } from '@/utils/authority';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  const token = getFromStorage('token')
  return request('/api/v1/users/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}
