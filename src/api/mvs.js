import {request} from '@/utils/request';

// mv地址
export function allMvs({ area, order, type, offset }) {
  return request({
    url: '/mv/all',
    method: 'get',
    params: {
      limit: 48,
      area,
      order,
      type,
      offset
    }
  });
}
