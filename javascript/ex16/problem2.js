function getMiddleElements(arr) {
    const len = arr.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        return arr.slice(mid - 1, mid + 1);
    } else {
        return arr.slice(mid, mid + 1);
    }
}

console.log(getMiddleElements([1, 2, 3, 4, 5]));
console.log(getMiddleElements([1, 2, 3, 4]));