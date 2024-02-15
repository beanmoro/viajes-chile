const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


let nameInput = $('#nameFormControlInput')
let topicInput = $('#topicFormControlInput')
let messageInput = $('#messageFormControlTextarea')
let submitButton = $('#sendButton')


$(document).ready(function () {

    $('a.nav-link').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });


    submitButton.click(function(){


        if(nameInput.val().trim().length > 0 && topicInput.val().trim().length > 0 && messageInput.val().trim().length > 0 ){
            nameInput.val("");
            topicInput.val("");
            messageInput.val("");
            submitButton.val("");
    
            alert('El mensaje a sido enviado.')
        }else{
            alert('ERROR: Ingrese dato en todos los cuadros de texto!')
        }
    })
});