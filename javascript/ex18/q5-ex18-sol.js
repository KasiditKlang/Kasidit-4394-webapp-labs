var avatarEls = document.getElementsByTagName("img");
for (i = 0; i < avatarEls.length; i++) {
    avatarEls[i].height = "80";
    avatarEls[i].title = avatarEls[i].alt;
}