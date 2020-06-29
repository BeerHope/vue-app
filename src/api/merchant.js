import request from '@/utils/request'

export function getMerchantList(params) {
  return request({
    url: '/merchant',
    method: 'get',
    params
  })
}

export function addMerchant(data) {
  return request({
    url: '/merchant',
    method: 'post',
    data
  })
}

/* 批量录入 */
export function batchInput(data) {
  return request({
    url: '/merchant',
    method: 'post',
    data
  })
}

export function getMerchantDetails(merchantId) {
  return request({
    url: `/merchant/${merchantId}`,
    method: 'get',
  })
}

export function updateMerchant(merchantId, data) {
  return request({
    url: `/merchant/${merchantId}`,
    method: 'put',
    data
  })
}

export function downloadTemplate() {
  return request({
    url: '/merchant/template',
    method: 'get',
    responseType: 'blob'
  })
}

/* 获取当前渠道商直属商户 */
export function getDirectMerchants() {
  return request({
    url: '/merchant/direct',
    method: 'get'
  })
}
