export function firstOrOnly(param:string|string[]|undefined): string {
    if(param == undefined) return '';
    return Array.isArray(param) ? param[0] : param;
}

export function takeInt(param:string|string[]): number {
    return Number.parseInt(firstOrOnly(param));
}

export function takeString(param:string|string[]|undefined): string {
    return firstOrOnly(param);
}

export function isKeyOf(enumObj: any, param:string|string[]|undefined): boolean {
    return Object.keys(enumObj).includes(firstOrOnly(param));
}