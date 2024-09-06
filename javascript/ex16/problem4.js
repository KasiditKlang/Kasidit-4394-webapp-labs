function uppercaseWords(arr) {
    const upper = arr.map(element => {
        return element.toUpperCase();
    });
    return upper;
}

console.log(uppercaseWords(["hello", "world", "javascript"]));
console.log(uppercaseWords(["a", "b", "c"])); 
