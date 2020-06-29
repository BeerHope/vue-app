import request from '@/utils/request'

/* 厂商列表 */
export function getVendorList(params) {
  return request({
    url: '/vendor',
    method: 'get',
    params
  })
}

/**
 * @export 新增厂商
 * @param {Object} data
 * @returns Object
 */
export function addVendor(data) {
  return request({
    url: '/vendor',
    method: 'post',
    data
  })
}

/**
 * @export 编辑厂商
 * @param {Object} data
 * @returns
 */
export function updateVendor(vendorId, data) {
  return request({
    url: `/vendor/${vendorId}`,
    method: 'put',
    data
  })
}

/* 获取厂商详情 */
export function getVendorDetails(vendorId) {
  return request({
    url: `/vendor/${vendorId}`,
    method: 'get',
  })
}

/* 厂商列表-下拉框 */
export function getAllvendors() {
  return request({
    url: '/vendor/all',
    method: 'get',
  })
}
