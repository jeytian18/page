<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['inputName']);
    $email = htmlspecialchars($_POST['inputEmail']);
    $message = htmlspecialchars($_POST['inputMessage']);

    // Email details
    $to = "info@romanmediaug.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Success message
        echo "Email sent successfully! Redirecting to the homepage...";
        
        // JavaScript for redirect after 3 seconds
        echo '<script>
                setTimeout(function() {
                    window.location.href = "index.html";
                }, 3000);
              </script>';
    } else {
        // Error message if the email could not be sent
        echo "There was an error sending your message. Please try again later.";
        
       // Optional redirect back to the contact form after a delay (uncomment if needed)
        echo '<script>
                setTimeout(function() {
                    window.location.href = "contact.html";
                }, 3000);
              </script>';
    }
} else {
    // Error message if the script is accessed directly
    echo "Invalid request.";
    // Redirect to the homepage after 3 seconds
    echo '<meta http-equiv="refresh" content="3;url=index.html">';
}
?>