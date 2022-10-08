document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const email = this.email.value
    const password = this.password.value
    const gender = this.gender.value
    const plan = this.plan.value
    const agree = this.agreement.checked

    let errorMsg = ""
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!(email.match(pattern))){
        errorMsg += "Please input valid email. <br/>";
    }

    const passnumb = /(?=.*\d)/;
    const passupper = /(?=.*[A-Z])/;
    const passlower = /(?=.*[a-z])/;
            
    if(!(password.match(passupper))){
        errorMsg += "Your password must be at least one uppercase.</br>";     
    }
    if(!(password.match(passlower))){
        errorMsg += "Your password must be at least one lowercase.</br>";
    }
    if(!(password.match(passnumb))){
        errorMsg += "Your password must be at least one number.</br>";
    }
    if(password.length<8){
        errorMsg +="Your password must be at least 8 characters.</br>"
    }

    if(gender.length == 0){
        errorMsg += "Please choose your gender. <br/>";
    }

    if (plan.length == 0) {
        errorMsg += "Please choose plan.<br/>";
    }

    if (!agree) {
        errorMsg += "Agreement must be checked. <br />"
    }
    error.innerHTML = errorMsg

    if(errorMsg.length == 0){
        alert("Your account have been created.\nEnjoy watching!")
        window.location.reload(false);
    }
})