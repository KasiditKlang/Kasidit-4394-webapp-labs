var nameTag1 = document.getElementsByTagName("h1");
console.log(nameTag1)
console.log(nameTag1[0])
nameTag1.innerHTML = "Hello, world";
for (var i = 0; i < nameTag1.length; i++) {
    nameTag1[i].innerHTML = "Hello, world";
}