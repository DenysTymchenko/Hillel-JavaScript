alert('Welcome to SUPER MEGA QUIZ! Press OK to start.')
score = 0;

getAnswer1 = prompt("First question: What has a face and two hands, but no arms or legs?").toLowerCase().trim()
if (getAnswer1 == 'a clock' || getAnswer1 == 'clock') {
    score += 10
    alert(`Great Start!\nNow you have ${score} point.`)
}
else {
    alert(`Nope :(`)
}

getAnswer2 = prompt("Second question: Some months have 31 days, others have 30 days, but how many have 28 days?").toLowerCase().trim()
console.log(getAnswer2)
if (getAnswer2 == '12' || getAnswer2 == 'all') {
    score += 10
    alert(`That was a tricky one!\nNow you have ${score} points.`)
}
else {
    alert(`Nah :(`)
}

getAnswer3 = prompt("Third question: What do you call a woman who knows where her husband is all the time?").toLowerCase().trim()
if (getAnswer3 == 'a widow' || getAnswer3 == 'widow') {
    score += 10
    alert(`A litle bit of dark humor :D\nNow you have ${score} points.`)
}
else {
    alert(`No :(`)
}

getAnswer4 = prompt("The last 2 a pretty hard, so be ready!\nFourth question: Will Luffy become a king of pirates?").toLowerCase().trim()
if (getAnswer4 == 'yes' || getAnswer4 == 'ofcourse') {
    score += 10
    alert(`That was an easy one actully...\nAnyway, now you have ${score} points.`)
}
else {
    alert(`That's unforgivable to not know an answer to this!`)
}

getAnswer5 = prompt("Fifth question: Do you think universals exist as real and distinct entities, or only as mental constructs?").toLowerCase().trim()
if (getAnswer5 == 'uma' || getAnswer5 == 'uma umauma umaaaaaa uma uma um') {
    score += 10
    alert(`Whooh.. That one was really tough!`)
}
else {
    alert(`Wrong! But i don't blame you. This one is hard.`)
}

document.write(`
    <h2>Your final score is ${score}</h2>
    <h3>You answered correctly for ${score / 10}/5 questions</h3>
`)