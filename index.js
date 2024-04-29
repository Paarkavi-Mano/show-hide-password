let passwordElement = document.getElementById("password");
let icon = document.getElementById("icon");

icon.onclick=function(){
    if(passwordElement.type === "password"){
        passwordElement.type="text";
        icon.classList.add("fa-solid", "fa-eye");

    }
    else{
        passwordElement.type = "password";
        icon.classList.remove("fa-solid", "fa-eye");
        icon.classList.add("fa-solid", "fa-eye-slash");
    }

}