const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = 'username';

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS);
}
else {
    loginForm.classList.add(HIDDEN_CLASS)        
    greeting.classList.remove(HIDDEN_CLASS);

    paintGreeting(savedUserName);
}

function handleButtonClick(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASS)        
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreeting(username);
}


function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

loginButton.addEventListener("click", handleButtonClick);