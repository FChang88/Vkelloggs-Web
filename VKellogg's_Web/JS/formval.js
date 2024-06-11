
// ini logic belum di improve ya, mentahan banget ini + jelek

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        return validateForm();
    };
});



function validateFirstName() {
    const firstName = document.getElementById('first-name').value;
    if (!firstName) {
        alert('First Name is required.');
        return false;
    }
    for (let i = 0; i < firstName.length; i++) {
        if (!((firstName[i] >= 'A' && firstName[i] <= 'Z') || (firstName[i] >= 'a' && firstName[i] <= 'z'))) {
            alert('First Name can only contain letters.');
            return false;
        }
    }
    return true;
}

function validateLastName() {
    const lastName = document.getElementById('last-name').value;
    if (!lastName) {
        alert('Last Name is required.');
        return false;
    }
    for (let i = 0; i < lastName.length; i++) {
        if (!((lastName[i] >= 'A' && lastName[i] <= 'Z') || (lastName[i] >= 'a' && lastName[i] <= 'z') || (lastName[i] === ' '))) {
            alert('Last Name can only contain letters.');
            return false;
        }
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Email Address is required.');
        return false;
    }
    if (email.indexOf('@') === -1) {
        alert('Email Address must contain @ symbol.');
        return false;
    }
    const validDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
    const domain = email.split('@')[1];
    
    if (!validDomains.includes(domain)) {
        alert('Email Address should be a valid Gmail, Yahoo, or Hotmail address.');
        return false;
    }
    
    return true;
}

function validatePhone() {
    const phone = document.getElementById('telephonenum').value;
    if (!phone) {
        alert('Phone Number is required.');
        return false;
    }
    for (let i = 0; i < phone.length; i++) {
        if (!(phone[i] >= '0' && phone[i] <= '9')) {
            alert('Phone Number can only contain numbers.');
            return false;
        }
    }
    return true;
}

function validateInquiry() {
    const inquiry = document.getElementById('inquiry').value;
    if (!inquiry) {
        alert('Please select the nature of your inquiry.');
        return false;
    }
    return true;
}

function validateForm() {
    return validateFirstName() && validateLastName() && validateEmail() && validatePhone() && validateInquiry();
}

document.querySelector('form').onsubmit = function() {
    return validateForm();
};