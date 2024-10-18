function welcomeMsg(){
    let username = prompt ("enter your name here :")
    console.log (`enter user's name is ${user_name}`);
    
    let confirmation = confirm (`Do you agree ${user_name} to our terms and conditions`)

    if (confirmation)
        alert (`welcome to our abc app ${user_name}`)
    else
        alert("you didn't agree to our terms and conditions")
}
welcomeMsg()
