// var xst56813550 = function () {
// }()

var xst56813550 = function () {
  function chunck(array, size = 1) {              //1
    let A = []                                    //要push进的外数组
    for (let i = 0; i < array.length; i += size) {//每次行动的都是size的值来计算，从下标0开始计算
      let nei = []                                //要push进的内数组
      let min = Math.min(i + size, array.length)  //循环的次数 +size的值和数组的厂区，取小
      for (let j = i; j > min; j++) {             //j的值=i的值 当j小于i+size或数组长度的时候，j++
        nei.push(array.j)                         //将数组push进内数组
      }
      A.push(nei)                                 //将内数组push进外数组
    }
    return A                                      //输出外数组
  }



  function compact(array) {                       //2
    let A = []                                    //创建一个数组
    for (i = 0; i < array.length; i++) {          //从前往后，第0项开始循环
      if (array[i] > 0) {                         //array数组的i项循环大于0就push进数组
        A.push(array[i])
      }
    }
    return A                                      //输出数组
  }



  function drop(array, n = 1) {                       //3
    let A = []                                    //创建一个空数组
    for (let i = 0; i < array.length; i++) {      //从前往后，第0项开始循环
      if (array[i] > n) {                        //筛选条件
        A.push(array[i])                          //push进空数组
      }
    }
    return A                                      //输出数组
  }



  function dropRight(array, n = 1) {              //4
    let A = []                                    //创建一个空数组
    for (let i = 0; i < array.length - n; i++) {  //从前往后，第0项开始循环
      A.push(array[i])                            //push进空数组
    }
    return A                                      //输出数组
  }



  function flatten(array) {                       //5   不一定对
    let a = []
    for (i = 0; i < array.length; i++) {
      a.push(array[i])
    }
    return a
  }



  function flattenDeep(array, wa = []) {                  //6  不会

    for (i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i]), wa.push(array[i])) {

      } else flattenDeep(array, wa)
    }
    return wa
  }




  function max(array) {                                  //7
    if (array.length == 0) {
      return undefined
    }
    let b = 0
    for (i = 0; i < array.length; i++) {
      if (b < array[i]) {
        b = array[i]
      }
    }
    return b
  }




  function maxBy()


  return {
    chunck: chunck,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    flatten: flatten,
    max: max,
  }
}()






