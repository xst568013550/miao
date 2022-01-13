var xst568013550 = {


  chunk: function chunk(array, size = 1) {              //1
    let wai = []
    let nei = []
    let sum = 0                             //要push进的外数组
    for (var i = 0; i < array.length; i++) {//每次行动的都是size的值来计算，从下标0开始计算                         //要push进的内数组
      nei.push(array[i])
      sum++
      if (sum == size || i == array.length - 1) {//当计数器=size的值的时候或者i的值==数组下标的时候，将内部的数组的值push进外部数组，然后将数组清空，计数器也清空
        wai.push(nei)
        nei = []
        sum = 0
      }
    }
    return wai                                 //输出外数组
  },


  compact: function (array) {                       //2
    let A = []                                    //创建一个数组
    for (var i = 0; i < array.length; i++) {          //从前往后，第0项开始循环
      if (array[i] > 0) {                         //array数组的i项循环大于0就push进数组
        A.push(array[i])
      }
    }
    return A                                      //输出数组
  },



  drop: function (array, n = 1) {                       //3
    let A = []                                    //创建一个空数组
    for (let i = 0; i < array.length; i++) {      //从前往后，第0项开始循环
      if (array[i] > n) {                        //筛选条件
        A.push(array[i])                          //push进空数组
      }
    }
    return A                                      //输出数组
  },



  dropRight: function (array, n = 1) {              //4
    let A = []                                    //创建一个空数组
    for (let i = 0; i < array.length - n; i++) {  //从前往后，第0项开始循环
      A.push(array[i])                            //push进空数组
    }
    return A                                      //输出数组
  },



  flatten: function flattens(array) {                       //5
    let a = []                                     //创建一个空数组
    for (i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {               //判断array的第i项是否是一个数组
        for (let j = 0; j < array[i].length; j++) {//是数组的话进行循环取出数组的项
          a.push(array[i][j])                      //将array第i项数组的第j项值取出，并push进数组
        }
      } else {
        a.push(array[i])                           //不是数组将直接push进数组
      }

    }
    return a
  },



  flattenDeep: function flattenDeep(array) {                  //6
    let a = []                                     //创建一个空数组
    for (var i = 0; i < array.length; i++) {
      let item = array[i]                      //array[i]的值给item
      if (Array.isArray(item)) {               //判断array的第i项是否是一个数组
        item = flattenDeep(item)               //让每一次循环的item代替上一个循环的自己(递进)
        for (var j = 0; j < item.length; j++) {//是数组的话进行循环取出数组的项
          a.push(item[j])                      //将array第i项数组的第j项值取出，并push进数组
        }
      } else {
        a.push(item)                           //不是数组将直接push进数组
      }
    }
    return a
  },




  flattenDepth: function flattenDepth(array, depth = 1) {                  //6
    let a = []                                     //创建一个空数组
    let sum = 0
    for (var i = 0; i < array.length; i++) {
      let item = array[i]                      //array[i]的值给item
      if (Array.isArray(item)) {               //判断array的第i项是否是一个数组
        sum++
        if (sum == depth) {
          break
        }
        item = flattenDeep(item)               //让每一次循环的item代替上一个循环的自己(递进)
        for (var j = 0; j < item.length; j++) {//是数组的话进行循环取出数组的项
          a.push(item[j])                      //将array第i项数组的第j项值取出，并push进数组
        }
      } else {
        a.push(item)                           //不是数组将直接push进数组
      }
    }
    return a
  },



  max: function (array) {                                  //7
    if (array.length == 0) {
      return undefined
    }
    let b = 0
    for (var i = 0; i < array.length; i++) {
      if (b < array[i]) {
        b = array[i]
      }
    }
    return b
  },



  sum: function f(array) {
    let A = 0
    for (var i = 0; i < array.length; i++) {
      A = A + array[i]
    }
    return A
  },




}









