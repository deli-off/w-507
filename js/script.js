let students = [

]

let tbody = document.querySelector('tbody')
let btn = document.querySelector('.btn')
let form = document.forms.task
let age = document.querySelector('.age-inp')
let name_inp = document.querySelector('.name-inp')

form.onsubmit = (event) => {
    event.preventDefault();

    let student = {
        name: name_inp.value,
        age: new Date().getFullYear() - age.value,
    };

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        student[key] = value;
    });

    students.push(student)
    reload(students)
};


function reload(arr) {
    tbody.innerHTML = ''

    for (let item of arr) {
        let tr = document.createElement('tr')
        let numtd = document.createElement('td')
        let namtd = document.createElement('td')
        let agetd = document.createElement('td')
        let actionstd = document.createElement('td')

        numtd.innerHTML = arr.indexOf(item) + 1
        namtd.innerHTML = item.name
        agetd.innerHTML = item.age
        actionstd.innerHTML = 'edit'

        tr.append(numtd, namtd, agetd, actionstd)
        tbody.append(tr)
    }
}

reload(students)