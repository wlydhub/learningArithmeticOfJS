/**
 * 题目:电话号码的字母组合
 * 具体请查看:https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
export default (str) => {
  // 建立电话号码键盘映射
  const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  // 将传入的字符串变为数组 [2, 3]
  const num = str.split('');
  // 将num对应map [2,3] => ['abc', 'def']
  const code = num.map((item) => {
    return map[item];
  })

  // 递归code数组，得到最后的结果
  const comb = (arr) => {
    let temp = [];
    for(let i = 0; i < arr[0].length; i ++){
      for(let j = 0; j < arr[1].length; j ++){
        temp.push(arr[0][i] + arr[1][j]);
      }
    }
    arr.splice(0, 2, temp);
    if(arr.length > 1){
      comb(arr);
    } else {
      return temp;
    }
    return arr[0];
  }

  return comb(code);
}
/**
 * 总结
 * arr.splice() -> 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
 */
