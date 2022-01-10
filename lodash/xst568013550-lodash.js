// var xst56813550 = function () {
// }()

var xst56813550 = {
  chunck: function (array, size = 1) {//1
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
  },




  compact: function (array) {//2
    let A = []                                    //创建一个数组
    for (i = 0; i < array.length; i++) {          //从前往后，第0项开始循环
      if (array[i] > 0) {                         //array数组的i项循环大于0就push进数组
        A.push(array[i])
      }
    }
    return A                                      //输出数组
  }

}
return {
  chunck: chunck,
  compact: compact,
}()






