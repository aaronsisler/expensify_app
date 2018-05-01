console.log('destructuring');

const person = {
    name: 'Aaron',
    age: 32,
    location: {
        city: 'Durham'
        ,temp: 50
    }
};

const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

const { city, temp: temperature = 'hot' } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

