

let mybutton = document.getElementById("backToTopBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


mybutton.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const error = document.getElementById('error');
    
    error.textContent = '';

    if (!name) {
        error.textContent = 'Por favor, ingrese su nombre.';
        return false;
    }

    if (!email) {
        error.textContent = 'Por favor, ingrese su email.';
        return false;
    }

    if (!message) {
        error.textContent = 'Por favor, ingrese un mensaje.';
        return false;
    }

    return true;
}

    
