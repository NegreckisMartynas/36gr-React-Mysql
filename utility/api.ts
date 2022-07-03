export function isInteger(param:string|string[]|undefined) {
    return !isNaN(param as any) && Number.isInteger(Number.parseInt(takeString(param)));
}

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

export function compare(a:number|string|null, b:number|string|null): number {
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