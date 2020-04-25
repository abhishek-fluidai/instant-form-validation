const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('Re-enter Password');
const btn = document.querySelector('button');
let isname = false; let isemail = false;
let ispass = false; let isrepass = false;
const blankHandler = (elem) => {
    const ele = document.getElementById(elem)

    const val = ele.value
    // console.log(ele)
    if (val === '' || val === null) {
        setErrorFor(ele, `${ele.id} cannot be blank`);
    }
    else {
        setSuccessFor(ele);
    }

}

document.querySelectorAll('.ref').forEach(item => {
    item.addEventListener('keydown', event => {
        // var a = document.getElementById()
        // console.log(a.)
        blankHandler(event.target.id.trim())
    })
})

username.addEventListener('blur', e => {
    if (e.target.value !== "") {
        setSuccessFor(username)
        isname = true
        grandV()
    }
    else {
        setErrorFor(username, 'username is not valid');
        isname = false
        grandV()
    }

})

email.addEventListener('blur', (e) => {
    const emailValue = e.target.value
    // console.log(emailValue)
    if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
        isemail = false
        grandV()
    }
    else {
        setSuccessFor(email);
        isemail = true
        console.log(isemail)
        grandV()
    }
})
password.addEventListener('blur', e => {
    if (e.target.value !== "") {
        setSuccessFor(password)
        ispass = true
        grandV()
    }
    else {
        setErrorFor(password, 'password is not valid');
        ispass = false
        grandV()
    }
})

password2.addEventListener('blur', (e) => {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
        isrepass = false
        grandV()
    }

    else if (passwordValue === password2Value) {
        setSuccessFor(password2);
        isrepass = true;
        grandV()

        // btn.click()

    }

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("success")
});

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error msg inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    //select the div .form-control
    const formControl = input.parentElement;

    //add sucess class
    formControl.className = 'form-control success';

}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function grandV() {

    if (isemail === true && isrepass === true && ispass === true && isname === true) {
        btn.innerHTML = 'submit'
        btn.classList.remove("unvalid")
    } else if (isemail === false || isrepass === false || ispass === false || isname === false) {
        btn.innerHTML = '&#9888;'
        btn.classList.add("unvalid")
    }
}




// function checkInputs() {

//     //get values from inputs
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();


//     if (usernameValue === '') {
//         //show error & add error class
//         setErrorFor(username, 'Username cannot be blank');
//     }
//     else {
//         //add success class
//         setSuccessFor(username);
//     }



//     if (emailValue === '') {
//         setErrorFor(email, 'Email cannot be blank');
//     }
//     else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Email is not valid');
//     }
//     else {
//         setSuccessFor(email);
//     }



//     if (passwordValue === '') {
//         setErrorFor(password, 'Password cannot be blank');
//     }
//     else {
//         setSuccessFor(password);
//     }



//     if (password2Value === '') {
//         setErrorFor(password2, 'Password check cannot be blank');
//     }
//     else if (passwordValue !== password2Value) {
//         setErrorFor(password2, 'Passwords does not match');
//     }
//     else {
//         setSuccessFor(password2);
//     }

//     //last success message
//     const btn = document.querySelector('button');
//     btn.innerHTML = 'Validated Successfully  ✔';


// }

