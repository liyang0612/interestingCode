// 重命名对象的key
exports.renameObjectKey = function(obj, mapObj) {
  if (!obj || !mapObj) {
    throw (new Error('Please pass parameters'))
  }

  const isObject = function (params) {
    return Object.prototype.toString.call(params).slice(8, -1) === 'Object'
  }

  if (!isObject(obj) || !isObject(mapObj)) {
    throw (new Error('expect a Object'))
  }

  const reg = new RegExp(Object.keys(mapObj).join('|'), 'gi')

  return JSON.parse(JSON.stringify(obj).replace(reg, matched => mapObj[matched]))
}

// 利用reduce 去重
exports.reduceUniq = (arr) => {
  return arr.reduce((newArr, val) => newArr.includes(val) ? newArr : [...newArr, val], [])
}