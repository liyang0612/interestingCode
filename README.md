# interestingCode [![Build Status](https://travis-ci.org/yangsenlin/snsdemo.svg?branch=master)](https://travis-ci.org/liyang0612/interestingCode.svg?branch=master)
> 记录一些有趣的代码

------------


1. 扁平化数组并且去重

```javascript
  let data = [[ 1 , 2 ],[ 2, 3, 4, [ 4, 2, 7 ]], [ 8, 9, 10 ]]
  Array.from(new Set(data.flat(Infinity))).sort((a,b)=>{ return a-b})
```

2. 重命名对象的key
   
```javascript
  const productInfo = {
    _id: '1',
    product_name: '啤酒（500ml）'
  }

  const MAP = {
    _id: 'id',
    product_name: 'productName'
  }

  const reg = new RegExp(Object.keys(MAP).join('|'), 'gi')
  return JSON.parse(JSON.stringify(productInfo).replace(reg, matched => MAP[matched]))
```
