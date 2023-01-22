const pollInfo = {
    title: 'Best emoji poll!!!',
    options: {
        1: {
            value: '😎',
            votes: 0
        },
        2: {
            value: '🫣',
            votes: 0
        },
        3: {
            value: '🤯',
            votes: 0
        },
        4: {
            value: '🙃',
            votes: 0
        },
        5: {
            value: '💩',
            votes: 0
        }
    }
}

function renderPoll(pollObj) {
    const poll = document.createElement('section');
    const title = document.createElement('h2');
    const wrapper = document.createElement('div');

    poll.classList.add('poll');
    wrapper.classList.add('wrapper');

    title.innerText = pollObj.title;
    poll.append(title);

    for (const option in pollObj.options) {
        const optionDiv = document.createElement('div');
        const valueP = document.createElement('p');
        const votesP = document.createElement('p');

        optionDiv.classList.add('option');
        valueP.classList.add('value');
        votesP.classList.add('votes');

        valueP.innerText = pollObj.options[option].value;
        votesP.innerText = pollObj.options[option].votes;

        optionDiv.append(valueP);
        optionDiv.append(votesP);
        wrapper.append(optionDiv);

        optionDiv.addEventListener('click', () => {
            votesP.innerText++;
        })
    }

    poll.append(wrapper);
    document.querySelector('body').append(poll);
}

renderPoll(pollInfo);