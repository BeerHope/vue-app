import request from '@/utils/request'

// get menu
export function getMenus() {
  return request({
    url: '/menu',
    method: 'get'
  })
}

/* add menu */
export function addMenu(data) {
  return request({
    url: '/menu',
    method: 'post',
    data
  })
}

/* menu details */
export function getMenuDetails(id) {
  return request({
    url: `/menu/${id}`,
    method: 'get',
  })
}

/* update menu */
export function updateMenu(id, data) {
  return request({
    url: `/menu/${id}`,
    method: 'put',
    data
  })
}
