document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('8r-EVp6uIZhh4aF8c');  
});

function handle_submit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

const params = {
  from_name: name,
  from_email: email,  
  from_subject: subject,
  from_message: message
};


  emailjs.sendForm('service_p4wg4vn', 'template_6dsx0cq', params)
    .then(function() {
      alert('Message Sent Successfully!');
      window.location.reload();
    }, function(error) {
      alert('FAILED...', error);
    });
}
