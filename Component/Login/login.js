let = document.getElementById("login-form").innerHTML




function userLogin(form){
    let username = form.username.value
    let password = form.password.value

    fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify({
            "employeeUsername" : username,
            "password" : password
        })
        //must match login request
    })
    .then(response => {
        console.log(response.status)
        if (response.status === 404){
            throw new Error(response.text().then(body=>console.log(body)))
        }
        document.getElementById("login-form").innerHTML = "<h1 id='welcome'> Welcome to customer tracker, " + username + "</h1>"
        console.log(password)
        logoutButton();
    })
    .catch(error => {
        colsole.error(error)
    })
    //returns promise of a response 
    //sends out request. at some point of time expect a response.
    //postman acts as origin
    //api shares info to another spot
}




function logoutButton(){
    let button = document.createElement("button")
    let node = document.createTextNode("Logout")

    button.appendChild(node);
    button.setAttribute("onclick", "logout()")
    const welcomeH1 = document.getElementByID ("welcome")
    welcomeH1.appendChild(button)
}




function logout(){
    document.getElementById("login-form").innerHTML = loginInitial;
}