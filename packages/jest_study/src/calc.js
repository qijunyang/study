export const add = (a, b) => {
    if(isNaN(a)) {
        a = 0;
    }
    if (isNaN(b)) {
        b = 0;
    }
    return Number(a) + Number(b);
}