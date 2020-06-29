import request from '@/utils/request'

// 获取时区
export function getTimezone() {
  return request({
    url: '/timezone',
    method: 'get',
  })
}
