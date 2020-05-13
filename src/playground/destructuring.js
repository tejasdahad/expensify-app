// Object Destructuring

/*const person = {
    name: 'Tejas',
    age: 19,
    location: {
        city: 'Jalgaon',
        temp: 41
    }
};

const { name: firstName = 'Anonymous', age, location } = person;

const { city, temp: temparature } = location;

console.log(`Hey I am ${firstName} from ${city} where temp is ${temparature} and my age is ${age}`);

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);*/

// Array Destructuring

const item = ['Coffee (hot)', '30', '50', '80'];
const [name, , medprice] = item;
console.log(`${name} cost Rs.${medprice}`);