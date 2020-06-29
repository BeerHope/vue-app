import request from '@/utils/request'

/* 增加角色 */
export function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

/* 角色详情 */
export function getRoleDetails(roleId) {
  return request({
    url: `/role/${roleId}`,
    method: 'get',
  })
}

/* 角色列表 */
export function getRoleList(params) {
  return request({
    url: '/role',
    method: 'get',
    params
  })
}

/* 修改角色 */
export function updateRole(roleId, data) {
  return request({
    url: `/role/${roleId}`,
    method: 'put',
    data
  })
}

/* 获取管理用户列表 */
export function getRoleUser(roleId, params) {
  return request({
    url: `/role/${roleId}/user`,
    method: 'get',
    params
  })
}

/* 移除用户 */
export function deleteUser(roleId, userId) {
  return request({
    url: `/role/${roleId}/user/${userId}`,
    method: 'delete',
  })
}

/* 新增时，菜单树获取 */
export function getRoleTree() {
  return request({
    url: '/role/tree',
    method: 'get',
  })
}
