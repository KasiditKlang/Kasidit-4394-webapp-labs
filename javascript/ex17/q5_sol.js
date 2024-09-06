var imgs = document.getElementsByTagName("img");
var sec = document.querySelector('section p');
sec.textContent = "We hope you enjoy learning";
sec.style.backgroundColor = "Black";
sec.style.padding = "10px";
sec.style.width = "250px";
sec.style.textAlign = "center";
sec.style.color = "White";
sec.style.inlineSize = "740px"
imgs[0].src = "outputs/en-kku.jpg";
imgs[0].onclick = function() {
    window.open("http://www.kku.ac.th");
}