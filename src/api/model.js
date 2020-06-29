import request from '@/utils/request'

export function getModelList(params) {
  return request({
    url: '/model',
    method: 'get',
    params
  })
}

export function addModel(data) {
  return request({
    url: '/model',
    method: 'post',
    data
  })
}

export function getModelDetails(modelId) {
  return request({
    url: `/model/${modelId}`,
    method: 'get',
  })
}

export function updateModel(modelId, data) {
  return request({
    url: `/model/${modelId}`,
    method: 'put',
    data
  })
}

export function getModelTree() {
  return request({
    url: '/model/tree',
    method: 'get'
  })
}
