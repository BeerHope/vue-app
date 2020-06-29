import request from '@/utils/request'

export function getAllocationList(params) {
  return request({
    url: '/machine/allocation',
    method: 'get',
    params
  })
}

// 批量调拨
export function batchAllocation(data) {
  return request({
    url: '/machine/allocation',
    method: 'post',
    data
  })
}

export function batchImportAllocation(companyId, data) {
  return request({
    url: `/machine/allocation/${companyId}`,
    method: 'post',
    headers: {
      "Content-Type": 'multipart/form-data'
    },
    data
  })
}

/* 导出 */
export function exportAllocation(allocationId) {
  return request({
    url: `/machine/allocation/export/${allocationId}`,
    method: 'post'
  })
}

/* 详情 */
export function getAllocationDetails(allocationId) {
  return request({
    url: `/machine/allocation/${allocationId}`,
    method: 'get'
  })
}

export function downloadTemplate() {
  return request({
    url: '/machine/allocation/template',
    method: 'get',
    responseType: 'blob'
  })
}
