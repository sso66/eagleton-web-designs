// employees.js
const faker = require('faker');

function generateEmployees() {
    let employees = [];

    for (let id = 0; id < 50; id++) {
        let firstname = faker.name.firstName();
        let lastname = faker.name.lastName();
        let email = faker.internet.email();

        employees.push({
            "id": id,
            "firstname": firstname,
            "lastname": lastname,
            "email": email
        });
    }
    return {"employees": employees}
}

module.exports = generateEmployees;

// eof