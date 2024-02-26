 // jQuery code to handle form submission
 $(document).ready(function() {
    $('#submit-button').click(function() {
    
        var message = $('#message').val();
        
        var messageToTelegram = "New Contact Form Submission:\n\n" +
     
            "Message: " + message;
        
        // Replace with your Telegram bot API endpoint
        var telegramApiUrl = 'https://api.telegram.org/bot6408602784:AAGIjUYj_OhopBVBrQgwcEJN6JKAyzvbHn4/sendMessage';
        
        // Send the message to Telegram using $.ajax
        $.ajax({
            url: telegramApiUrl,
            method: 'POST', // Change the method to POST
            data: {
                chat_id: '5405301126',
                text: messageToTelegram
            },
            success: function(data) {
                if (data.ok) {
                    showAlert('Thank You ❤️ (Reply will be added before 11pm)');
                    // Clear form fields
                    $('#message').val('');
                } else {
                    showAlert('Form submission failed.');
                }
            },
            error: function() {
                showAlert('An error occurred while submitting the form.');
            }
        });
    });
});

// Open the modal with a custom message
function showAlert(message) {
    var modal = document.getElementById('custom-modal');
    var modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

// Close the modal
function closeAlert() {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.getElementsByClassName('close')[0].addEventListener('click', closeAlert);

