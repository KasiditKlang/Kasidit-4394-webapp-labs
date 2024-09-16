var planets = document.createElement("div");
planets.className = "planet";
planets.style.backgroundColor = "Pink";
document.body.appendChild(planets);

var moons = document.createElement("div");
moons.className = "moon";
moons.style.backgroundColor = "Red";
planets.appendChild(moons);