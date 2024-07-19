export function concatenate(str1: string, str2: string) {
    return str1 + str2;
}

export const toUpperCase = (str: string) => str.toUpperCase(); 

export const toLowerCase = (str: string) => str.toLowerCase();

export const reverseString = (str: string) => str.split('').reverse().join('');
