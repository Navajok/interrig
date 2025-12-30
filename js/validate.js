document.getElementById("contactus").addEventListener("submit", function (event) {
    if (!validateForm()) {  // if the validation of the form fails, we will not submit the form.                             
        event.preventDefault(); // prevents the form from submitting.
    }
    else {
        if (!("Confirm Submission of Sign Up Form?")) { // if form not confirmed to submit , we will not submit the form         
            event.preventDefault(); // prevents the form from submitting.
        }
    }
})

function validateForm() {
    var formOK = true;
    var mobile = document.getElementById("mobile").value;
    var name = document.getElementById("name").value;
    clearErrorMsgs();

    // mobile field validations
    if (!validateMobile(mobile)) {
        formOK = false;
        document.getElementById("mobile_err").innerHTML = "Mobile number must be 8 digits.";
    }

    if (!validateName(name)) {
        formOK = false;
        document.getElementById("name_err").innerHTML = "Name must only be alphabetical values";
    }

    return formOK;
}

function validateMobile(str) {
    // a shorter way to test regex
    return /^\d{8}$/.test(str); // using regex to ensure all 8 characters in string are numbers.
}

function validateName(str) {
    return /^[A-Za-z ]+$/.test(str);
}

// clears the error messages
function clearErrorMsgs() {
    var labels = document.getElementsByClassName("err_label");

    for (let i = 0; i < labels.length; i++) {
        labels[i].innerHTML = "";
    }
}


