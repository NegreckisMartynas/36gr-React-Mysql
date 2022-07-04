
/** 
 * @param {string | string[] | undefined} param
 * @returns {boolean}
*/
export function isInteger(param) {
    return !isNaN(param) && Number.isInteger(Number.parseInt(takeString(param)));
}

/** 
 * @param {string | string[] | undefined} param
 * @returns {string}
*/
export function firstOrOnly(param) {
    if(param == undefined) return '';
    return Array.isArray(param) ? param[0] : param;
}

/** 
 * @param {string | string[] | undefined} param
 * @returns {number}
*/
export function takeInt(param) {
    return Number.parseInt(firstOrOnly(param));
}

/** 
 * @param {string | string[] | undefined} param
 * @returns {string}
*/
export function takeString(param) {
    return firstOrOnly(param);
}

/** 
 * @param {any} enumObj
 * @param {string | string[] | undefined} param
 * @returns {boolean}
*/
export function isKeyOf(enumObj, param) {
    return Object.keys(enumObj).includes(firstOrOnly(param));
}

/** 
 * @param {string | string[] | undefined} a
 * @param {string | string[] | undefined} b
 * @returns {number}
*/
export function compare(a, b) {
    if(a === null) {
        return -1;
    }
    else if(b === null) {
        return 1;
    }
    else if(typeof(a) === 'number' && typeof(b) === 'number') {
        return a - b;
    }
    else if(typeof(a) === 'string' && typeof(b) === 'string'){
        return a.localeCompare(b);
    }
    else {
        console.error("Can't compare:", a, b);
        return 0;
    }
}