/** @param {object} params */
export function params(params) {
    const res = Object.entries(params)
                      .filter(e => e[1] !== undefined)
                      .map(e => `${e[0]}=${e[1]}`)
                      .join('&')
    return res ? '?' + res : '';
}