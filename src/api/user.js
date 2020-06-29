import request from '@/utils/request'

/* 用户登录 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/* 获取用户信息和菜单权限 */
export function getInfo() {
  return request({
    url: '/user/currentUser',
    method: 'get',
  })
}

/* 登出 */
export function logout() {
  return request({
    url: '/user/logout',
    method: 'get',
  })
}

/* 重置密码 */
export function resetPassword(data) {
  return request({
    url: `/user/resetPassword`,
    method: 'put',
    data
  })
}

/* 修改密码 */
export function updatePassword(data) {
  return request({
    url: `/user/updatePassword`,
    method: 'put',
    data
  })
}

/* 用户列表 */
export function getUserList(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}

/* 新增用户 */
export function addUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

/* 用户详情 */
export function getUserDetails(userId) {
  return request({
    url: `/user/${userId}`,
    method: 'get',
  })
}

/* 编辑用户信息 */
export function editUser(userId, data) {
  return request({
    url: `/user/${userId}`,
    method: 'put',
    data
  })
}

/* 更新用户权限 */
export function updateAuth(userId, data) {
  return request({
    url: `/user/${userId}/updateAuth`,
    method: 'put',
    data
  })
}

/* 获取角色权限列表 */
export function getUserRole() {
  return request({
    url: '/user/role',
    method: 'get',
  })
}

