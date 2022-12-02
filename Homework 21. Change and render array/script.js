function createTr(arr) {
    const trArr = arr
        .map(function (task) {
            task[1] = task[1] / 60;
            return task;
        })
        .filter(function (task) {
            return task[1] > 2;
        })
        .map(function (task) {
            task.push(task[1] * amount);
            return task;
        })
        .map(function (task) {
            return `
        <tr>
            <td>Task name: ${task[0]}</td>
            <td>Taks duration: ${task[1]} hours</td>
            <td>Task amount: ${task[2]}$</td>
        </tr>
        `
        })
        .join('');

    return trArr;
}


let amount = 100;
let monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];


const mondayTr = createTr(monday);
const tuesdayTr = createTr(tuesday);


document.write(`
    <table>
        <tbody>
            ${mondayTr}
            ${tuesdayTr}
        </tbody>
    </table>    
`)