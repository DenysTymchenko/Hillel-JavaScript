import { users } from "./data";
import $ from 'jquery';

export function renderData() {
    users.forEach(user => {
        const { id, name, age, email, country, company, birthday } = user;

        const div = $('<div></div>').css({
            "width": "fit-content",
            "background-color": "gray",
            "padding": "10px",
            "margin-bottom": "10px"
        });

        const idP = $('<p></p>').text(`id: ${id}`).appendTo(div);
        const mainInfoP = $('<p></p>').text(`Name: ${name}, age: ${age} (${birthday})`).appendTo(div);
        const countryP = $('<p></p>').text(`Country: ${country}`).appendTo(div);
        const emailP = $('<p></p>').text(`Email: ${email}`).appendTo(div);
        const companyP = $('<p></p>').text(`Work: ${company}`).appendTo(div);

        $('body').append(div);
    });
}