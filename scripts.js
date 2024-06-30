$(document).ready(function() {
    // Define bot token and chat ID
    var botToken = '6408602784:AAGIjUYj_OhopBVBrQgwcEJN6JKAyzvbHn4';
    var chatId = '5405301126';

     // Existing function to handle form submission
     $('#submit-button').click(function() {
        var message = $('#message').val();
        
        var messageToTelegram = "New Contact Form Submission:\n\n" +
        
            "Message: " + message;
        
        // Replace with your Telegram bot API endpoint for sending messages
        var telegramApiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
        
        // Send the message to Telegram using $.ajax
        $.ajax({
            url: telegramApiUrl,
            method: 'POST',
            data: {
                chat_id: chatId,
                text: messageToTelegram
            },
            success: function(data) {
                if (data.ok) {
                    showAlert('Thank You ❤️ (Reply will be added soon)');
             
                    $('#message').val('');
                } else {
                    showAlert('Submission failed.');
                }
            },
            error: function() {
                showAlert('oops! an error occured 😬 try changing the size of your message or check you internet connection and try again! ');
            }
        });
    });

    // Function to handle custom message button click
    $('#custom-message-button').click(function() {
        var customMessage = "Cannot send message now, under emergency condition";
        
        var messageToTelegram = "Emergency Message:\n\n" + customMessage;
        
        // Replace with your Telegram bot API endpoint for sending messages
        var telegramApiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
        
        // Send the custom message to Telegram using $.ajax
        $.ajax({
            url: telegramApiUrl,
            method: 'POST',
            data: {
                chat_id: chatId,
                text: messageToTelegram
            },
            success: function(data) {
                if (data.ok) {
                    showAlert('Custom message sent successfully!');
                } else {
                    showAlert('Failed to send custom message.');
                }
            },
            error: function() {
                showAlert('An error occurred while sending the custom message.');
            }
        });
    });

    // Existing function to handle file upload
    $('#addFileButton').click(function() {
        $('#fileInput').click();
    });

    $('#fileInput').change(function() {
        var formData = new FormData();
        var files = $(this)[0].files;

        for (var i = 0; i < files.length; i++) {
            formData.append('document', files[i]);
        }

        formData.append('chat_id', chatId);

        var xhr = new XMLHttpRequest();
        var url = 'https://api.telegram.org/bot' + botToken + '/sendDocument';
        
        xhr.open('POST', url, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Files sent successfully!');
            } else {
                console.error('Failed to send files!');
            }
        };
        xhr.send(formData);
    });

    // Existing function to show alert message
    function showAlert(message) {
        var modal = document.getElementById('custom-modal');
        var modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }

    // Existing function to close alert message
    function closeAlert() {
        var modal = document.getElementById('custom-modal');
        modal.style.display = 'none';
    }

    // Existing event listener to close alert message
    document.getElementsByClassName('close')[0].addEventListener('click', closeAlert);
});

