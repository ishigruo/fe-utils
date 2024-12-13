'use strict';

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
function addCommas(number) {
    // 将数字转为字符串
    var numStr = number.toString();
    // 将整数部分和小数部分分开
    var parts = numStr.split('.');
    var integerPart = parts[0];
    var decimalPart = parts[1] ? ".".concat(parts[1]) : '';
    // 对整数部分添加逗号
    var integerWithCommas = (integerPart === null || integerPart === void 0 ? void 0 : integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')) || '';
    // 返回加上逗号的整数部分和小数部分（如果有）
    return integerWithCommas + decimalPart;
}

/**
 * 参考：
 * https://github.com/any86/any-rule
 */
/**
 * 判断当前是否是企微环境
 */
window.navigator.userAgent.match('wxwork');
/**
 * 验证居民身份证号码是否有效
 * @param idCardNo 证件号码
 * @returns boolean
 */
var isValidResidentIdentityCard = function (idCardNo) {
    var _a;
    // 居民身份证：18位
    // 最后一位必须是数字或者字母X
    var idCardPattern = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
    if (!idCardPattern.test(idCardNo)) {
        return false;
    }
    var coefficients = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    var idCardArray = idCardNo === null || idCardNo === void 0 ? void 0 : idCardNo.split('');
    var sum = (_a = idCardArray === null || idCardArray === void 0 ? void 0 : idCardArray.slice(0, 17)) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, num, index) {
        return acc + parseInt(num, 10) * coefficients[index];
    }, 0);
    var calculatedCheckCode = checkCodes[sum % 11];
    // 确保最后一位是大写的X
    var actualCheckCode = idCardArray[17].toUpperCase();
    return calculatedCheckCode === actualCheckCode;
};

exports.addCommas = addCommas;
exports.isValidResidentIdentityCard = isValidResidentIdentityCard;
