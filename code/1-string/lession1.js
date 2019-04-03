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
export default (str) => {
	// (1)字符串按空格分隔,保存数组,数组的元素顺序就是字符串的单词顺序
	// (2)对数组便利，每个元素进行翻转
	return str.split(' ').map(item => {
		return item.split('').reverse().join('');
	}).join(' ');
};