import request from '@/utils/request'

export function getTerminalList(params) {
  return request({
    url: '/terminal',
    method: 'get',
    params
  })
}

export function addTerminal(data) {
  return request({
    url: '/terminal',
    method: 'post',
    data
  })
}

export function getTerminalDetails(terminalId) {
  return request({
    url: `/terminal/${terminalId}`,
    method: 'get',
  })
}

export function updateTerminal(terminalId, data) {
  return request({
    url: `/terminal/${terminalId}`,
    method: 'put',
    data
  })
}

/* 下载导入模板 */
export function downloadImportTemplate() {
  return request({
    url: '/terminal/template/add',
    method: 'get',
    responseType: 'blob'
  })
}

/* 批量导入要录入的终端 */
export function importTerminals() {
  return request({
    url: '/terminal/batch',
    method: 'post',
  })
}

/* 下载绑定模板 */
export function downloadBindTemplate() {
  return request({
    url: '/terminal/template/binding',
    method: 'get',
    responseType: 'blob'
  })
}

/* 批量导入绑定机具 */
export function bindMachines() {
  return request({
    url: '/terminal/binding/machine',
    method: 'post'
  })
}

/* 解绑终端与设备*/
export function unbind(terminalId) {
  return request({
    url: `/terminal/${terminalId}/machine`,
    method: 'delete'
  })
}

/* 绑定终端和设备 */
export function bindSN(terminalId, sn) {
  return request({
    url: `/terminal/${terminalId}/machine/${sn}`,
    method: 'post'
  })
}

/* 解绑设备 信息查询 */
export function getBindMachineDetails(terminalId) {
  return request({
    url: `/terminal/${terminalId}/machine`,
    method: 'get'
  })
}

/* 绑定设备 sn查询 */
export function querySN(terminalId, sn) {
  return request({
    url: `/terminal/${terminalId}/${sn}`,
    method: 'get'
  })
}
