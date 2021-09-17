// const data = [
//     ['Keven', 'Hartmann', 'male', '1984-12-06'],
//     ['Oran', 'Morar', 'male', '1975-05-16'],
//     ['Erna', 'Greenholt', 'female', '1992-08-12'],
//     ['Kareem', 'Keeling', 'male', '2017-09-06'],
//     ['Alan', 'Ebert', 'male', '2011-06-02'],
//     ['Lucius', 'Marks', 'male', '1997-07-02'],
//     ['Nicole', 'Kreiger', 'female', '2012-02-21'],
//     ['Lesch', 'Kyleigh', 'male', '1962-08-20'],
//     ['Scottie', 'Baumbach', 'male', '1972-07-08'],
//     ['Tiara', 'Bechtelar', 'female', '1950-09-10'],
//     ['Prohaska', 'Burnice', 'female', '1938-06-27'],
//     ['Murphy', 'Leilani', 'female', '1998-11-30'],
//     ['Hane', 'Ebba', 'female', '1991-11-15'],
//     ['Emmerich', 'Alexandrine', 'female', '2015-10-18'],
//     ['Erdman', 'Eusebio', 'male', '1932-08-13'],
//     ['Batz', 'Velma', 'female', '1999-01-07'],
//     ['Schuster', 'Andre', 'male', '1975-08-03'],
//     ['Kiehn', 'Lourdes', 'male', '2016-08-07'],
//     ['Kunde', 'Lavon', 'male', '2012-11-04'],
//     ["O'Kon", 'Arvid', 'male', '2020-11-27']
// ];

const fs = require('fs')


function Person({ name, surname, date, gender }) {
    this.name = name;
    this.surname = surname;
    this.date = new Date(date);
    this.gender = gender;
    this.docs = `${name[0]}. ${surname}`;
}


let data;
fs.readFile('ppl.csv', function (err, fileData) {
    data = fileData
            .toString()
            .split(';;;;')
            .filter(e => e)
            .map(
                e => 
                    e.replace('\r\n', '')
                    .split(';'))
                    .slice(1);

    const persons = data.map(
        ([name, surname, gender, date]) => new Person({ name, surname, gender, date})
    );
    console.log(persons);

    console.log(
        persons.sort(
            (a, b) => b.date - a.date
        ).map(person => person.docs)
    );
    
    console.log(
        persons.filter(person => person.gender === 'male')
                .map(person => person.docs)
    );
    console.log(
        persons.filter(person => person.gender === 'female')
                .map(person => person.docs)
                    );
});


