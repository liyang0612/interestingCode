# interestingCode
> 记录一些有趣的代码

------------


1. 扁平化数组并且去重

```javascript
  let data = [[ 1 , 2 ],[ 2, 3, 4, [ 4, 2, 7 ]], [ 8, 9, 10 ]]
  Array.from(new Set(data.flat(Infinity))).sort((a,b)=>{ return a-b})
```
