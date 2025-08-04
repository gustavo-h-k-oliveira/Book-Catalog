let helloWorld = "Hallo, Welt!";
console.log(helloWorld, typeof helloWorld);

type UserStatus = "active" | "inactive" | "banned";

// Creating an object
const user: User = {
    name: "Dennis Madison",
    id: 0,
    status: "active",
};

// Defining an interface for an object
interface User { // Interfaces are hoisted
    name: string;
    id: number;
    status: UserStatus;
};

// Creating a new object based on the interface
const newUser: User = { // TypeName
    name: "Britanny Roy",
    id: 1,
    status: "inactive",
};

// Interface declaration with class
class UserAccount {
    name: string;
    id: number;
    status: UserStatus;

    constructor(name: string, id: number, status: UserStatus) {
        this.name = name;
        this.id = id;
        this.status = status;
    }
}

// Creating a new user using a constructor
const thirdUser = new UserAccount("Leroy Schmitt", 2, "banned")

// Storing users in an array
const users: User[] = [user, newUser, thirdUser];

function deleteUser(user: User) { // Functions are hoisted
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
        users.splice(index, 1);
    }
}

// Iterated values from the array
for (let user of users) {
    console.log(`Name: ${user.name}, ID: ${user.id}`);
}

// Table of the array
console.table(users);

deleteUser(thirdUser);

console.log("After deletion:");
console.table(users);

function getLength(obj: string | User[]) {
    return obj.length;
}

console.log(`Username's length: ${getLength(user.name)}`);
console.log(`User list's length: ${getLength(users)}`);

// The function returns different values depending on the type it receives
function greetingMessage(obj: string | User) {
    if (typeof obj === "string") {
        return `Willkommen, Besuchende ${obj}!`;
    }
    return `Willkommen zurück, ${obj.name}`;
}

console.log(greetingMessage("Shatoll"));
console.log(greetingMessage(user));

type StringArray = Array<string>;

let fruits: StringArray = ["Passion Fruit", "Strawberry", "Blueberries"];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`)
}

// Fetch API
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=America%2FSao_Paulo")
    .then(response => {
        if (!response.ok) throw new Error("Request error.");
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Fetch API with a function
async function getData() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=America%2FSao_Paulo";
    try {
        const response = await fetch(url);
        if (!response.ok) throw Error(`Response status: ${response.status}`);

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getData();
