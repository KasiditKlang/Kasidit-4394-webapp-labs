const username = 'KasiditKlang'; 
const apiURL = `https://api.github.com/users/${username}`;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const githubURL = data.html_url;
        const avatarURL = data.avatar_url;

        const githubNameElement = document.getElementById('github-name');
        const githubAvatarElement = document.getElementById('github-avatar');

        githubNameElement.innerHTML = `<a href="${githubURL}" target="_blank">${name}</a>`;              
        githubAvatarElement.src = avatarURL;

                })
    .catch(error => console.error('Error fetching GitHub user data:', error));