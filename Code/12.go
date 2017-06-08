/**
 * @param {int} num
 * @return {string}
 *
 * 罗马数字没有 0
 * 罗马数字与阿拉伯数字对应关系：
 * I：1
 * V：5
 * X：10
 * L：50
 * C：100
 * D：500
 * M：1000
 *
 * 无脑遍历法
 */
package main

import "fmt"

func intToRoman(num int) string {
	M := [4]string{"", "M", "MM", "MMM"}
	C := [10]string{"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"}
	X := [10]string{"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"}
	I := [10]string{"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"}

	return M[num/1000] + C[(num%1000)/100] + X[(num%100)/10] + I[num%10]
}

func main() {
	fmt.Println(intToRoman(99))
}
