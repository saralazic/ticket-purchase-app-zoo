function init(){
    localStorage.setItem('users_full_data', JSON.stringify(USERS_FULL_DATA));
    localStorage.setItem('employees', JSON.stringify(EMPLOYEES));
}

const USERS_FULL_DATA = [
    { username: "pera", password: "pera123", email: "pera@gmail.com", address: "Ustanicka 5", first_name: "Petar", last_name: "Petrovic", phone: "067/7234-897" },
    { username: "zika", password: "zika123", email: "zika@gmail.com", address: "Takovska 5", first_name: "Zivorad", last_name: "Zikic", phone: "067/1234-897" },
    { username: "laza", password: "lazaa123", email: "lazaa@gmail.com", address: "Bulevar Kralja Aleksandra 148", first_name: "Laza", last_name: "Lazic", phone: "067/7234-797" },
    { username: "sara", password: "sara123", email: "sara@gmail.com", address: "Voje Veljkovica 22", first_name: "Sara", last_name: "Lazic", phone: "067/7159-923" },
    { username: "mina", password: "mina123", email: "mina@gmail.com", address: "Vardarska 12", first_name: "Mina", last_name: "Lazic", phone: "064/0914-217" },
]

const EMPLOYEES = ["pеra", "zika", "laza"];