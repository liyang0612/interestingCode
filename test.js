const func = require('./index').renameObjectKey

const productInfo = {
  _id: '1',
  product_name: '啤酒（500ml）'
}

const MAP = {
  _id: 'id',
  product_name: 'productName'
}

console.log(func(productInfo, MAP))