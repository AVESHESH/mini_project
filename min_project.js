// Task 1: Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'John', age: 25 },
                { id: 2, name: 'Jane', age: 30 },
                { id: 3, name: 'Jim', age: 20 }
            ];
            resolve(users);
        }, 2000);
    });
}

// Task 2: Closures
function createCounter() {
    let count = 0;
    return {
        increment: () => {
            count++;
        },
        getCount: () => {
            return count;
        }
    };
}

// Task 3: Callbacks
function processData(numbers, callback) {
    const processedNumbers = [];
    for (let number of numbers) {
        processedNumbers.push(callback(number));
    }
    return processedNumbers;
}

// Task 4: Async/Await
async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'John', age: 25 },
                { id: 2, name: 'Jane', age: 30 },
                { id: 3, name: 'Jim', age: 20 }
            ];
            resolve(users);
        }, 2000);
    });
}

// Task 5: Array Manipulation: Map
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

// Task 6: Array Manipulation: Filter
function filterNumbersLessThan10(numbers) {
    return numbers.filter(number => number >= 10);
}

// Task 7: Array Manipulation: Find
function findFirstNumberGreaterThan15(numbers) {
    return numbers.find(number => number > 15);
}

// Task 8: Array Manipulation: Reduce
function sumNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

// Task 9: Object Manipulation
function transformUsersToObj(users) {
    return users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
}

// Task 10: Classes and Objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Task 11: Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}

// Task 12: Error Handling with Promises
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.5;
            if (shouldFail) {
                reject("Failed to fetch data");
            } else {
                const users = [
                    { id: 1, name: 'John', age: 25 },
                    { id: 2, name: 'Jane', age: 30 },
                    { id: 3, name: 'Jim', age: 20 }
                ];
                resolve(users);
            }
        }, 2000);
    });
}

fetchDataWithError().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

// Task 13: Error Handling with Async/Await
async function fetchDataAsyncWithError() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shouldFail = Math.random() < 0.5;
                if (shouldFail) {
                    reject("Failed to fetch data");
                } else {
                    const users = [
                        { id: 1, name: 'John', age: 25 },
                        { id: 2, name: 'Jane', age: 30 },
                        { id: 3, name: 'Jim', age: 20 }
                    ];
                    resolve(users);
                }
            }, 2000);
        });
    } catch (error) {
        console.error(error);
    }
}

// Task 14: Complex Array Manipulation
function getAllUniqueHobbies(users) {
    return users.reduce((hobbies, user) => {
        user.hobbies.forEach(hobby => {
            if (!hobbies.includes(hobby)) {
                hobbies.push(hobby);
            }
        });
        return hobbies;
    }, []);
}

// Example usage and testing of functions
(async () => {
    // Testing Promises and Async/Await
    console.log(await fetchData());
    console.log(await fetchDataAsync());

    // Testing Closures
    const counter = createCounter();
    counter.increment();
    counter.increment();
    console.log(counter.getCount()); // Should log 2

    // Testing Callbacks
    const numbers = [1, 2, 3, 4];
    const squaredNumbers = processData(numbers, num => num * num);
    console.log(squaredNumbers); // Should log [1, 4, 9, 16]

    // Testing Array Manipulation
    console.log(doubleNumbers([1, 2, 3])); // Should log [2, 4, 6]
    console.log(filterNumbersLessThan10([5, 10, 15])); // Should log [10, 15]
    console.log(findFirstNumberGreaterThan15([10, 20, 30])); // Should log 20
    console.log(sumNumbers([1, 2, 3])); // Should log 6

    // Testing Object Manipulation
    const users = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Jim', age: 20 }
    ];
    console.log(transformUsersToObj(users));

    // Testing Classes and Inheritance
    const person = new Person('Alice', 40);
    console.log(person.describe()); // Should log 'Alice is 40 years old.'
    
    const student = new Student('Bob', 20, 'A');
    console.log(student.describe()); // Should log 'Bob is 20 years old.'
    console.log(student.study()); // Should log 'Bob is studying.'

    // Testing Complex Array Manipulation
    const usersWithHobbies = [
        { name: 'John', hobbies: ['Reading', 'Swimming'] },
        { name: 'Jane', hobbies: ['Reading', 'Cycling'] },
        { name: 'Jim', hobbies: ['Swimming', 'Running'] }
    ];
    console.log(getAllUniqueHobbies(usersWithHobbies)); // Should log ['Reading', 'Swimming', 'Cycling', 'Running']
})();
