let loginInitial = document.getElementById("login-form").innerHTML

function userLogin(form) {
    let username = form.username.value
    let password = form.password.value

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify({ 
        "username" : username,
        "password" : password
        })
    })
    .then(response => {
        console/log(response)
    })
    .catch(error => {
        console.error(error)
    })

    document.getElementById("login-form").innerHTML = "<h1 id='welcome'> Welcome to the Reimbursement Page, " + username + " ! " +  "</h1>"
    console.log(password)
    logoutButton()
}

function logoutButton() {
    let button = document.createElement("button")
    let node = document.createTextNode("Logout")

    button.appendChild(node);
    button.setAttribute("onclick", "logout()")
    const welcomeH1 = document.getElementById("welcome")
    welcomeH1.appendChild(button)
}

function logout() {
    document.getElementById("login-form").innerHTML = loginInitial
}