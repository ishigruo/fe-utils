/**
 * 小数千分位格式化，添加 ,
// 示例用法
console.log(addCommas(123456789));  // 输出: "123,456,789"
console.log(addCommas(12345.67));   // 输出: "12,345.67"
console.log(addCommas(0.123));      // 输出: "0.123"
console.log(addCommas(123));        // 输出: "123"
console.log(addCommas(123456.789)); // 输出: "123,456.789"
 * @param number 
 * @returns 
 */

export function addCommas(number: number | string) {
    // 将数字转为字符串
    const numStr = number.toString();

    // 将整数部分和小数部分分开
    const parts = numStr.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] ? `.${parts[1]}` : '';

    // 对整数部分添加逗号
    const integerWithCommas = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '';

    // 返回加上逗号的整数部分和小数部分（如果有）
    return integerWithCommas + decimalPart;
}