/**
 * 参考：
 * https://github.com/any86/any-rule
 */

export function isUrl(path: string): boolean {
    const regex = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
    return regex.test(path);
}
/**
 * 判断是否是微信环境
 */
export function isWxClient() {
    const regex = /MicroMessenger/i;
    const ua = navigator.userAgent.toLowerCase();
    return regex.test(ua);
}

/**
 * 判断是否是移动端
 */
export function isMobile() {
    const regex = /AppleWebKit.*Mobile.*/i;
    const ua = navigator.userAgent.toLowerCase();
    return regex.test(ua);
}

/**
 * 判断是否是 iOS 终端
 */
export function isiOS() {
    const regex = /(iPhone|iPad|iPod|iOS)/i;
    const ua = navigator.userAgent.toLowerCase();
    return regex.test(ua);
}

/**
 * 判断是否为图片 URL
 * copy from https://github.com/vant-ui/vant/blob/7eaefd04fac0f2a188d9386ea677379ead61e903/packages/vant/src/uploader/utils.ts#L66-L68
 */
export const isImageUrl = (url: string): boolean => {
    const regex = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return regex.test(url);
};

/**
 * 判断是否为 整数
 */
export const isInteger = (num: string): boolean => {
    const regex = /^(?:0|(?:-?[1-9]\d*))$/;
    return regex.test(num);
};

/**
 * 判断是否为 正整数
 */
export const isPositiveInteger = (num: string): boolean => {
    const regex = /^\+?[1-9]\d*$/;
    return regex.test(num);
};

/**
 * 判断当前是否是企微环境
 */
export const isWeWork = window.navigator.userAgent.match('wxwork');

/**
 * 判断是否是手机号
 */
export const isPhoneNo = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;

/**
 * 判断是否是 邮箱地址
 */
export const isMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * 判断是否是 英文
 */

export const isOnlyEnglish = /^[a-zA-Z]+$/;

/**
 * 判断是否是 中文
 */

export const isOnlyChinese = /^[\u4e00-\u9fa5]+$/;

/**
 * 判断是否是手机号
 */
export const isPhoneNumber = /^1[3-9]\d{9}$/;

/**
 * 判断 是否是英文+空格+数字
 */

export const validFormat = /^[a-zA-Z0-9\s]*$/;

/**
 * 电话号码校验规则: 只支持数字, 位数最长限制为40（有海外的号码）
 * 更新规则: 新增「-」和「（）」的支持
 */
export const phoneNumberPattern = (value: string): boolean => {
    const regex = /^[\d()-]{1,40}$/;

    return regex.test(value);
};

/**
 * 验证居民身份证号码是否有效
 * @param idCardNo 证件号码
 * @returns boolean
 */
export const isValidResidentIdentityCard = (idCardNo: string): boolean => {
    // 居民身份证：18位
    // 最后一位必须是数字或者字母X
    const idCardPattern = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;

    if (!idCardPattern.test(idCardNo)) {
        return false;
    }

    const coefficients = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    const idCardArray = idCardNo?.split('');

    const sum = idCardArray?.slice(0, 17)?.reduce((acc, num, index) => {
        return acc + parseInt(num, 10) * coefficients[index];
    }, 0);

    const calculatedCheckCode = checkCodes[sum % 11];

    // 确保最后一位是大写的X
    const actualCheckCode = idCardArray[17].toUpperCase();

    return calculatedCheckCode === actualCheckCode;
};
