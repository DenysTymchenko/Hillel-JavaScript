const linkInput1 = document.getElementById('link-1');
const linkInput2 = document.getElementById('link-2');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', () => {
    const link = linkInput1.value;
    validLink(link) ? window.open(link) : window.open(`https://${link}`);
});

btn2.addEventListener('click', () => {
    const link = linkInput2.value;
    validLink(link) ? window.open(link) : window.open(`https://${link}`);
});

function validLink(link) {
    if (link.indexOf('http://') != -1 || link.indexOf('https://') != -1) {
        return true;
    }

    return false;
}