const renameObjectKey = require('./index').renameObjectKey

const productInfo = {
  _id: '1',
  product_name: '啤酒（500ml）'
}

const MAP = {
  _id: 'id',
  product_name: 'productName'
}

test('重命名之后的对象', () => {
  expect(renameObjectKey(productInfo, MAP)).toStrictEqual({"id": "1", "productName": "啤酒（500ml）"})
})



// reduceUniq test

const reduceUniq = require('./index').reduceUniq
const arr = [1, 2, 3, 5, 5, 's', 's']
test('用reduce 去重', () => {
  expect(reduceUniq(arr)).toEqual([1, 2, 3, 5, 's'])
})