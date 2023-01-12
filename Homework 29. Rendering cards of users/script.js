function createUsers(usersArr) {
    return usersArr.map(user => {
        switch(user.role){
            case 'admin':
                return new Admin(user.name, user.age, user.img, user.role, user.courses);
            case 'lector':
                return new Lector(user.name, user.age, user.img, user.role, user.courses);
            default:
                return new User(user.name, user.age, user.img, user.role, user.courses);
        }
    });
}

class User {
    constructor(name, age, img, role, courses) {
        this.name = name;
        this.age = age;
        this.pfp = img;
        this.role = role;
        this.courses = courses;
    }

    getGrade(score){
        //this functon return array with 2 values. 1: name of html class; 2: text inside of span, which must to start from capital letter.
        //This is why I created this little function for capitalization.
        const capitalize = word => word[0].toUpperCase() + word.slice(1);

        //Also if we get value 'very-good', it need to look like 'Very Good' inside of span. This is why I use replace down below.
        if(grades[score]) return [grades[score], capitalize(grades[score]).replace('-g',' G')];
        else if(score < 20) return [grades[20], capitalize(grades[20]).replace('-g',' G')];

        let result, found = false;
        grades.allGrades.forEach((grade,index) => {            
            if((grade - score) > 0 && !found){
                found = true;
                result = grades[grades.allGrades[index - 1]];
            }
        });

        return [result, capitalize(result).replace('-g',' G')];
    }

    render() {
        return `
            <div class="user">
                <div class="user__info">
                    <div class="user__info--data">
                        <img src="${this.pfp}" alt="${this.name}" height="50">
    
                        <div class="user__naming">
                            <p>Name: <b>${this.name}</b></p>
                            <p>Age: <b>${this.age}</b></p>
                        </div>
                    </div>
    
                    <div class="user__info--role ${this.role}">
                        <img src="${rolesImg[this.role]}" alt="${this.role}" height="25">
                        <p>${this.role}</p>
                    </div>
                </div>

                ${this.renderCourses()}
            </div>
        `
    }

    renderCourses() {
        if (this.courses) {
            return `
                <div class="user__courses">
                    ${this.courses
                        .map(course => {
                            return `
                                <p class="user__courses--course student">
                                    ${course.title} <span class="${this.getGrade(course.score)[0]}">${this.getGrade(course.score)[1]}</span>
                                </p>
                            `
                            })
                        .join('')}
                </div>
            `
        } 
        
        return ``
    }
}

class Admin extends User {
    constructor(name, age, img, role, courses){
        super(name, age, img, role, courses);
    }

    renderCourses(){
        return `
            <div class="user__courses admin--info">
                ${this.courses
                    .map(course => {
                        return `
                            <div class="user__courses--course admin">
                                <p>Title: <b>${course.title}</b></p>
                                <p>Admin's score: <span class="${this.getGrade(course.score)[0]}">${this.getGrade(course.score)[1]}</span></p>
                                <p>Lector: <b>${course.lector}</b></p>
                            </div>
                        `
                    })
                    .join('')
                }
            </div>
        `
    }

}

class Lector extends User {
    constructor(name, age, img, role, courses){
        super(name, age, img, role, courses);
    }

    renderCourses(){
        return `
            <div class="user__courses admin--info">
                ${this.courses
                    .map(course => {
                        return `
                            <div class="user__courses--course lector">
                                <p>Title: <b>${course.title}</b></p>
                                <p>Lector's score: <span class="${this.getGrade(course.score)[0]}">${this.getGrade(course.score)[1]}</span></p>
                                <p>Average student's score: <span class="${this.getGrade(course.studentsScore)[0]}">${this.getGrade(course.score)[1]}</span></p>
                            </div>
                        `
                    })
                    .join('')
                }
            </div>
        `
    }

}

const rolesImg = {
    admin: "images/roles/admin.png",
    student: "images/roles/student.png",
    lector: "images/roles/lector.png"
};

const grades = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent",
    allGrades: [20, 55, 85, 100]
};

const users = [
    {
        name: "Jack Smith",
        age: 23,
        img: "images/pfp.png",
        role: "student",
        courses: [
            {
                title: "Front-end Pro",
                score: 20
            },
            {
                title: "Java Enterprise",
                score: 100
            }
        ]
    },
    {
        name: "Amal Smith",
        age: 20,
        img: "images/pfp.png",
        role: "student"
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "images/pfp.png",
        role: "student",
        courses: [
            {
                title: "Front-end Pro",
                score: 50
            }
        ]
    },
    {
        name: "Charlie Smith",
        age: 18,
        img: "images/pfp.png",
        role: "student",
        courses: [
            {
                title: "Front-end Pro",
                score: 75
            },
            {
                title: "Java Enterprise",
                score: 23
            }]
    },
    {
        name: "Emily Smith",
        age: 30,
        img: "images/pfp.png",
        role: "admin",
        courses: [
            {
                title: "Front-end Pro",
                score: 10,
                lector: "Leo Smith"
            },
            {
                title: "Java Enterprise",
                score: 50,
                lector: "David Smith"
            },
            {
                title: "QA",
                score: 75,
                lector: "Emilie Smith"
            }]
    },
    {
        name: "Leo Smith",
        age: 25,
        img: "images/pfp.png",
        role: "lector",
        courses: [
            {
                title: "Front-end Pro",
                score: 78,
                studentsScore: 79
            },
            {
                title: "Java Enterprise",
                score: 85,
                studentsScore: 85
            }
        ]
    }
];

let newUsers = createUsers(users);

document.write(`
    <div class="users">
        ${  
            newUsers.
                map(user => user.render())
                .join('')
        }
    </div>
`);