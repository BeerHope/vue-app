/* 文件管理 -- 我的系统包接口 */

import request from '@/utils/request'

export function getOtaList(params) {
  return request({
    url: '/ota',
    method: 'get',
    params
  })
}

export function addOta(data) {
  return request({
    url: '/ota',
    method: 'post',
    data
  })
}

export function getOtaDetails(otaId) {
  return request({
    url: `/ota/${otaId}`,
    method: 'get'
  })
}

export function getDeletedOtaList(params) {
  return request({
    url: '/ota/deletedOta',
    method: 'get',
    params
  })
}

/* 编辑系统包基本信息 */
export function updateOtaBasicInfo(otaId, data) {
  return request({
    utl: `/ota/${otaId}`,
    method: 'put',
    data
  })
}

/* 删除系统包版本 */
export function deleteOtaVersion(otaId, versionId) {
  return request({
    url: `/ota/${otaId}/version/${versionId}`,
    method: 'delete'
  })
}

/* 删除系统包 */
export function deleteOta(otaId) {
  return request({
    url: `/ota/${otaId}`,
    method: 'delete'
  })
}

/* 发布新版系统包 */
export function updateOtaVersion(data) {
  return request({
    url: `/ota/${otaId}/version`,
    method: 'put',
    data
  })
}
