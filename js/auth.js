const authSwitch = document.querySelector("#authSwitch");
const switchForm = document.querySelector("#switchForm");
const authButton = document.querySelector("#authButton");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const formTitle = document.querySelector("#form-title");

let signIn = true;
document.body.addEventListener("click", (e) => {
    if(e.target.id != "switchForm")  return;
    ;

    switchFormAuth();
})

document.querySelector("#authForm").addEventListener("submit", (e) =>{
    e.preventDefault();

    let user ={
        username : signIn ? undefined : username.value,
        email:email.value,
        password:password.value,
        confirmPassword:signIn ? undefined : confirmPassword.value
    }

    if(signIn){
        const users = JSON.parse(localStorage.getItem("users")) || [];
       
        const exestingUser = users.find(user => user.email === email.value 
             && user.password === password.value );

        if(exestingUser){
            localStorage.setItem("onlineUser", JSON.stringify(exestingUser));
            window.location.href = "../html/movies.html"
        }else{
            alert(" Invalid Credentials!");
            return;
        }
    }else{
        const users = JSON.parse(localStorage.getItem("users")) || [];
       
        const exestingUser = users.find(user => user.username === username.value 
             && user.email === email.value );

        if(exestingUser){
            alert(`user ${exestingUser.username} Already exestis!`);
            return;
        }
        
    if(confirmPassword.value !== password.value){
        alert("password does not matched");
        return;
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    alert("user Regestration Successfuly !");
    switchFormAuth();

    }
    
    
})

const switchFormAuth = () =>{
    signIn = !signIn;

    if(!signIn){
        formTitle.textContent = "Sing Up";
        username.style.display = "block";
        confirmPassword.style.display = "block";
        authButton.textContent = "Regester";
        authSwitch.innerHTML = `
            <p id="authSwitch">
          Already have an account? <a href="#" id="switchForm">Sign in</a>
        </p>`; 
    }else{
        formTitle.textContent = "Sing in";
        username.style.display = "none";
        confirmPassword.style.display = "none";
        authButton.textContent = "Sing In";
        authSwitch.innerHTML = `
             <p id="authSwitch">
          New to DugFlix? <a href="#" id="switchForm">Register now</a>
        </p>`; 
    }
}