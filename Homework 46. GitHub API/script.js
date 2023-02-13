async function getData(action) {
    const response = await fetch(action);
    const data = await response.json();

    return data;
}

async function getGitHubUserInfo(username) {
    const info = await getData(API + `users/${username}`);
    return info;
}

function renderGitHubInfo(info) {
    const card = document.createElement('div');
    const avatar = document.createElement('img');
    const infoBlock = document.createElement('div');
    const username = document.createElement('h2');
    const profileLink = document.createElement('a');
    const wrapper = document.createElement('div');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const repositories = document.createElement('p');

    card.classList.add('user-card');
    avatar.classList.add('user-avatar');
    infoBlock.classList.add('info-block');
    username.classList.add('user-name');
    wrapper.classList.add('wrapper');
    repositories.classList.add('user-repos');

    avatar.src = info.avatar_url;
    profileLink.href = info.html_url;

    profileLink.innerText = info.login;
    followers.innerText = `Followers: ${info.followers}`;
    following.innerText = `Following: ${info.following}`;
    repositories.innerText = `Repositories: ${info.public_repos}`;

    card.append(avatar);
    card.append(infoBlock);

    infoBlock.append(username);
    infoBlock.append(wrapper);
    infoBlock.append(repositories);

    username.append(profileLink);

    wrapper.append(followers);
    wrapper.append(following);

    body.append(card);
}

const API = 'https://api.github.com/';

const body = document.querySelector('body');
const usernameInput = document.querySelector('#username');
const getInfoBtn = document.querySelector('.get-info-btn');

getInfoBtn.addEventListener('click', async () => {
    const errorP = document.querySelector('.error');
    errorP.innerText = '';

    try {
        const info = await getGitHubUserInfo(usernameInput.value);
        if (info.message === 'Not Found') {
            throw new Error('There is no GitHub page with this username')
        } else {
            renderGitHubInfo(info);
        }
    } catch (error) {
        errorP.innerText = error;
    }
});