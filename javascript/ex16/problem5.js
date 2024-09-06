function filterShortStrings(arr) {
    return arr.map(element => element.length > 3);
}
console.log(filterShortStrings(["hi", "hello", "hey", "world"])); 
console.log(filterShortStrings(["a", "ab", "abc", "abcd"])); 
