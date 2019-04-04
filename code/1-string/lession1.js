/**
 * 题目:翻转字符串中的单词
 * 给定一个字符串，你需要翻转字符串中每个单词的字符顺序，
 * 同时仍保留空格和单词的出事顺序。
 * 示例：
 * 输入"Let's take LeetCode contest"
 * 输出"s'teL ekat edoCteeL tsetnoc"
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中
 * 不会有任何额外的空格。
 */
//(1)直接使用字符串" "
// export default (str) => {
// 	// (1)字符串按空格分隔,保存数组,数组的元素顺序就是字符串的单词顺序
// 	// (2)对数组便利，每个元素进行翻转
// 	return str.split(' ').map(item => {
// 		return item.split('').reverse().join('');
// 	}).join(' ');
// };
//(2)正则
// export default (str) => {
// 	// /\s/g 使用正则选出空格
// 	return str.split(/\s/g).map(item => {
// 		return item.split('').reverse().join('');
// 	}).join(' ');
// };
//(3)正则 + match 去识别单词
export default (str) => {
	// /[\w']+/g 使用正则选出单词
	return str.match(/[\w']+/g).map(item => {
		return item.split('').reverse().join('');
	}).join(' ');
};

/**
 * 知识点总结
 * 一：String方法
 *   (1)split() 把字符串分割为字符串数组。
 *   (2)match() 找到一个或多个正则表达式的匹配。
 * 二：Array方法
 *   (1)map() 通过指定函数处理数组的每个元素，并返回处理后的数组。
 *   (2)reverse() 反转数组的元素顺序。
 *   (3)join() 把数组的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
 */