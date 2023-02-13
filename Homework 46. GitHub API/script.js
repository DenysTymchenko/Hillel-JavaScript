async function getData(action) {
    const response = await fetch(action);
    const data = await response.json();

    return data;
}

async function getGitHubUserData(username) {
    const data = await getData(API + `users/${username}`);
    return data;
}

function renderGitHubData(data) {
    const card = document.createElement('div');
    const avatar = document.createElement('img');
    const infoBlock = document.createElement('div');//div that contains all info, except avatar
    const username = document.createElement('h2');
    const profileLink = document.createElement('a');// link that'll be inside of h2(username), so client could go to GitHub profile page of user he was looking for. 
    const wrapper = document.createElement('div'); //wrapper for followers and following paragraphs
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const repositories = document.createElement('p');

    card.classList.add('user-card');
    avatar.classList.add('user-avatar');
    infoBlock.classList.add('info-block');
    username.classList.add('user-name');
    wrapper.classList.add('wrapper');
    repositories.classList.add('user-repos');

    avatar.src = data.avatar_url;
    profileLink.href = data.html_url;

    profileLink.innerText = data.login;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;
    repositories.innerText = `Repositories: ${data.public_repos}`;

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
    //we always clear error paragraph at the start of this function.
    const errorP = document.querySelector('.error');
    errorP.innerText = '';

    //then we trying to get data from GitHub API.
    //if it was successful -- we render that data.
    //otherwise we displaying error msg inside of errorP
    try {
        const data = await getGitHubUserData(usernameInput.value);
        if (data.message === 'Not Found') {
            throw new Error('There is no GitHub page with this username')
        } else {
            renderGitHubData(data);
        }
    } catch (error) {
        errorP.innerText = error;
    }
});
