document.getElementById("contactus").addEventListener("submit", function (event) {
    if (!validateForm()) {  
        event.preventDefault(); // This stops the form from sending if there are errors
        return;
    }
});

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

$(document).ready(function() {
    $('#popupOkBtn').click(function() {
        $('.popupBackground').fadeOut(150);
        window.history.replaceState(null, null, window.location.pathname);
    });
});